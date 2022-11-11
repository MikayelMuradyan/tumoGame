class Grass extends LivingCreature {
    
    mul() {
        this.multiply++;
        if (this.multiply == 3) {

           

            var empty = random(this.getDirections(0));
            if (empty) {
                var x = empty[0];
                var y = empty[1];

                

                xotArr.push(new Grass(x, y))

                
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}