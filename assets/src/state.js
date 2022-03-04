const EXPENSES_LEAD_GEN_STATE = (() => {

  const carreersArray = [];

  return {
    init: async () => {
      await EXPENSES_LEAD_GEN_STATE.carreers()
        .then(data => {
          data.forEach(obj => {
            EXPENSES_LEAD_GEN_STATE.addNewCarreer(obj.name, obj.photo)
          }) 
          EXPENSES_LEAD_GEN_APP.dynamicContent(carreersArray)
        })
        .catch(err => {
            const obj = [
              {name: "Software Engineer", photo: "__PhotoLink__"},
              {name: "Actor", photo: "__PhotoLink__"},
              {name: "US Expat", photo: "__PhotoLink__"},
              {name: "Model", photo: "__PhotoLink__"},
            ]
            
            obj.forEach(o => EXPENSES_LEAD_GEN_STATE.addNewCarreer(o.name, o.photo));
            EXPENSES_LEAD_GEN_APP.dynamicContent(carreersArray)
          })
    },
    carreers: async () => {
      const res = await fetch("/assets/src/carreers.json");
      const resData = await res.json();
      return resData;
    },
    getCarreersArray : () => {
      return carreersArray;
    },
    addNewCarreer: (name, photolink) => {
      carreersArray.push(new Career(name, photolink));
    }
  }
})()