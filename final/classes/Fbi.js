class Fbi extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
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
        this.energy--;
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }


    eat() {

        var cord = random(this.getDirections(3));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.multiply++;

            this.energy++;

            for (let i = 0; i < impArr.length; i++) {
                if (x == impArr[i].x && y == impArr[i].y) {
                    impArr.splice(i, 1);
                }
            }

            if (this.multiply == 10) {
                this.mul()
            }


        } else {

            this.move();
            this.energy--;
        }
    }

    mul() {

        var cord = random(this.getDirections(0));

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            fbiArr.push(new Fbi(x, y));

            matrix[y][x] = 4;
            this.multiply = 0;
        }
    }
}