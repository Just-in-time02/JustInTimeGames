class Sprite{

    constructor({position, imageSrc}){
          this.position = position
          this.image = new Image()
          this.image.onload = () => {
            this.loaded = true
         }

          this.loaded =  false
          this.image.src = imageSrc
          

    }

    draw(){
       if(!this.loaded) return

       c.drawImage(this.image, this.position.x, this.position.y)
    }
 }
