const EXPENSES_LEAD_GEN_UI = (() => {
  const HTMLCOMPONENTS =  {
    photoBox: document.querySelector("#changable-images-track"),
    carreerContainer: document.querySelector("#changable-headings-track"),
  }
  let index = 0;
  let childNodeCount = 0;

  function getChildNodeCount() {
    return childNodeCount;
  }

  function setChildNodeCount() {
    childNodeCount++;
  }

  function getIndex() {
    return index;
  }

  function setIndex() {
    index++;
  }


  return {
    populateHeading: (carreerName, index) => {
      HTMLCOMPONENTS.carreerContainer.innerHTML +=` 
      <div class="heading carousel-heading text-center" data-index="${index}">
        <h3 class="text-heading">${carreerName}</h3>
      </div>
      `
      setChildNodeCount();
      EXPENSES_LEAD_GEN_UI.setHeight(index);
    },
    populateImg: (photo, index) => {
      HTMLCOMPONENTS.photoBox.innerHTML += `
      <div class="bacc-img-container" class="pos-r" data-photo-index="${index}">
        <img src="${photo}" alt="" class="person-img">
      </div>
      `

      EXPENSES_LEAD_GEN_UI.setPhotoWidth(index);
    },
    rotateName() {
      let index = getIndex();
      const d = document.querySelector(`[data-index="${index}"]`); 
      HTMLCOMPONENTS.carreerContainer.style.top = -d.offsetHeight * index  + "px";
      if(index >= 2) {
        EXPENSES_LEAD_GEN_UI.removeIndex()
      }
      setIndex();
    },
    rotatePicture() {
      let index = getIndex();
      const p = document.querySelector(`[data-photo-index="${index}"]`);
      HTMLCOMPONENTS.photoBox.style.left = -p.offsetWidth * index  + "px";
      if(index >= 2) {
        EXPENSES_LEAD_GEN_UI.removePhoto();
      }
    },
    setPhotoWidth: (i) => {
      const p = document.querySelector(`[data-photo-index="${i}"]`);
      p.style.marginLeft = p.offsetWidth * i + "px"; 
    },                
    setHeight: (i) => {
      const d = document.querySelector(`[data-index="${i}"]`);
      d.style.marginTop = d.offsetHeight * i + "px";
    },
    removeIndex: () => {
      const index = document.querySelector("#changable-headings-track").firstElementChild;
      const heading = index.querySelector('.text-heading').textContent;
      index.remove();
      EXPENSES_LEAD_GEN_UI.populateHeading(heading, getChildNodeCount());
    },
    removePhoto: () => {
      const index = document.querySelector("#changable-images-track").firstElementChild;
      const img = index.querySelector('.person-img').getAttribute("src");
      index.remove();
      EXPENSES_LEAD_GEN_UI.populateImg(img, getChildNodeCount());
    }
  }
})()