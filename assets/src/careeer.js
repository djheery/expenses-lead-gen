class Career {
  constructor(name, photolink) {
    this.name = name;
    this.photo = photolink
  } 

  getName() { return this.name; }

  getPhotoLink() { return this.photo }

  setName(name) { this.name = name; }

  setPhotoLink(link) { this.photo = link; }

}