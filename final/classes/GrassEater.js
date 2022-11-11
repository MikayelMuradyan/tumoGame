class GrassEater extends LivingCreature {
    constructor(x, y){
        super(x, y);
        this.energy = 8;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
       move() {
        

        var cord = random(this.getDirections(0));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

          
            this.x = x;
            this.y = y;

        }
    }


    
    eat() {
        

        var cord = random(this.getDirections(1));

        
        if (cord) {
            var x = cord[0];
            var y = cord[1];

          
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

           
            this.x = x;
            this.y = y;

            
            this.multiply++;

           
            this.energy++;

       
            for (let i = 0; i < xotArr.length; i++) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }

           
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            this.move();
            this.energy--;
            if (this.energy < 3) { 
                this.die();
            }
        }
    }

   
    mul() {
       

        var cord = random(this.getDirections(0));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            eatArr.push(new GrassEater(x, y));

            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }

   
    die() {
        matrix[this.y][this.x] = 0;

        for (let i = 0; i < eatArr.length; i++) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }
}
