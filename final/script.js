let side = 10;
let xotArr = [];
let eatArr = [];
let impArr = [];
let waterArr = [];
let fbiArr = [];

let matrix = [];

  function generate(a,xot,eat,imp , fb) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {    
                
            matrix[i].push(0)
        }
    }
   
    for (let i = 0; i < xot; i++) {
        let x = Math.floor(Math.random()*a)
        let y = Math.floor(Math.random()*a)
        if(matrix[x][y] == 0) {
            
            matrix[x][y] = 1
        }
    }
   
    for (let i = 0; i < eat; i++) {
        let x = Math.floor(Math.random()*a)
        let y = Math.floor(Math.random()*a)
        if(matrix[x][y] == 0) {
            matrix[x][y] = 2
        }
    }
    
    for (let i = 0; i < imp; i++) {
        let x = Math.floor(Math.random()*a)
        let y = Math.floor(Math.random()*a)
        if(matrix[x][y] == 0) {
            matrix[x][y] = 3
        }
    }
    for (let i = 0; i < fb; i++) {
        let x = Math.floor(Math.random()*a)
        let y = Math.floor(Math.random()*a)
        if(matrix[x][y] == 0) {
            matrix[x][y] = 4
        }
    }
}

generate(80, 220,400, 10,5);



function objectsCreation() {
 
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 2) {
        eatArr.push(new GrassEater(x, y));
      } else if (matrix[y][x] == 1) {
        xotArr.push(new Grass(x, y));
      } else if (matrix[y][x] == 3) {
        impArr.push(new Imposter(x, y));
      }else if (matrix[y][x] == 4) {
        fbiArr.push(new Fbi(x, y));
    }
  }
}
}
function setup() {
  // noStroke();
  // frameRate(30);
  createCanvas(matrix[0].length * side, matrix.length * side); 
  background("grey");
}



function draw() {
  objectsCreation()

  //   background("#acacac");
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      } else if (matrix[y][x] == 2) {
        fill("orange");
      } else if (matrix[y][x] == 0) {
        fill("#acacac");
      } else if (matrix[y][x] == 3) {
        fill("black")
      } else if (matrix[y][x] == 4) {
        fill("red");
      }
      rect(x * side, y * side, side, side);
      }
 }

  for (let i = 0; i < xotArr.length; i++) {
    xotArr[i].mul();
  }
  for (let i = 0; i < eatArr.length; i++) {
    eatArr[i].eat();
  }
  for (let i = 0; i < impArr.length; i++) {
    impArr[i].eat()
  }
  for(let i = 0; i < fbiArr.length; i++) {
    fbiArr[i].eat()
  }
}