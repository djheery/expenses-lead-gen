const EXPENSES_LEAD_GEN_APP = (() => {
  const loadEventListeners = () => {

  }

  const scrolling = true;


  return {
    init: () => {      
      EXPENSES_LEAD_GEN_STATE.init();
    },
    dynamicContent: (content) => {
      for(let i = 0; i < content.length; i++) {
        EXPENSES_LEAD_GEN_UI.populateHeading(
          content[i].getName(), i
        )
        EXPENSES_LEAD_GEN_UI.populateImg(
          content[i].getPhotoLink(), i
        )
      }

      if(scrolling) {
        setInterval(EXPENSES_LEAD_GEN_UI.rotateName, 3000)
        setInterval(EXPENSES_LEAD_GEN_UI.rotatePicture, 3000)
      }
    },
  }
})();

EXPENSES_LEAD_GEN_APP.init(EXPENSES_LEAD_GEN_STATE, EXPENSES_LEAD_GEN_UI, EXPENSES_LEAD_GEN_APP);
