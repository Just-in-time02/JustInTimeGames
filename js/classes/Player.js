class Player 
{
    constructor()
    {
        this.position = {
          x: 100,
          y: 100  
        }

        this.velocity = {
            x: 0,
            y: 0,

        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height

        }
    }

    draw()
    {
    c.fillStyle = 'Red';
    c.fillRect(this.position.x, this.position.y,  this.width, this.height)
    }

    update()
    {
        this.position.y += this.velocity.y

        //above bottom of canvas
        if(this.sides.bottom < canvas.height){
        
        this.velocity.y += 1
        this.sides.bottom = this.position.y + this.height
        }
    }
}
