window.addEventListener('DOMContentLoaded', function () {

    let squareSideInput = document.getElementById('square-length');
    let recHeightInput = document.getElementById('rectangle-height');
    let recWidthInput = document.getElementById('rectangle-width');
    let triHeightInput = document.getElementById('triangle-height')

    const MAX = 600;
    let container = document.getElementById('shape-container');
    let sidePanel = document.getElementById('side-panel');

    let sqButton = document.getElementById('sq-button');
    let rectanglebtn = document.getElementById('rectanglebtn');
    let circlebtn = document.getElementById('circlebtn');
    let trianglebtn = document.getElementById('trianglebtn');



    

    

    class Shapes {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            //this.div = document.createElement('div');
            //container.appendChild(this.div);
            //console.log(this);
        }
    }



    class Square extends Shapes {
        constructor(sideLength) {
            super();

            this.sideLength = squareSideInput.value
            this.makeSquare();
        }
        makeSquare() {
            if (this.sideLength < 600 && this.sideLength !== undefined) {
                this.div = document.createElement('div');
                this.div.classList.add('square');
                this.div.style.width = `${this.sideLength}px`;
                this.div.style.height = `${this.sideLength}px`;
                this.div.style.top = `${Math.floor(Math.random() * 600) + 1}px`
                this.div.style.left = `${Math.floor(Math.random() * 600) + 1}px`
                container.appendChild(this.div);
                console.log(this);
            } else {
                alert(`Nah son`)
            }

        }

    }

    sqButton.addEventListener('click', () => {
        new Square(null)
    });

    class Rectangle extends Shapes {
        constructor(width, height) {
            super();
            this.div = document.createElement('div');
            this.div.classList.add('rectangle');
            this.width = width;
            this.height = height;
            this.width = recWidthInput.value
            this.height = recHeightInput.value
            container.appendChild(this.div);
            this.div.style.width = `${this.width}px`;
            this.div.style.height = `${this.height}px`;
            this.div.style.top = `${Math.floor(Math.random() * 500)}px`
            this.div.style.left = `${Math.floor(Math.random() * 500)}px`
            console.log(this);
        }
    }
    rectanglebtn.addEventListener('click', () => {
        new Rectangle();
        //alert('Hello');
    });

    class Circle extends Shapes {
        constructor(radius) {
            super(2 * radius, 2 * radius);
            //super(height, width);
            // this.width = width;
            // this.height = height;
            //radius = circleRadiusInput;
            this.div = document.createElement('div');
            this.div.classList.add('circle');
            this.radius = radius;
            container.appendChild(this.div);
            this.div.style.width = `${this.radius}px`;
            this.div.style.height = `${this.radius}px`;
            this.div.style.top = `${Math.floor(Math.random() * 500) + 1}px`
            this.div.style.left = `${Math.floor(Math.random() * 500) + 1}px`
            console.log(this);
            //console.log(circleRadiusInput);
        }
    }

    circlebtn.addEventListener('click', () => {
        let radius = document.getElementById("circle-radius").value
        new Circle(radius);
        //alert('Hello');
    });

    class Triangle extends Shapes {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
            this.div = document.createElement('div');
            this.div.classList.add('triangle');
            container.appendChild(this.div);
            this.height = triHeightInput.value
            this.div.style.width = `${this.width}px`;
            this.div.style.height = `${this.height}px`;
            this.div.style.top = `${Math.floor(Math.random() * 500) + 1}px`
            this.div.style.left = `${Math.floor(Math.random() * 500) + 1}px`
            console.log(this);
        }
    }

    trianglebtn.addEventListener('click', () => {
        new Triangle();
       // alert('Hello');
    });

    function calculateArea() {
        var width = document.getElementById("width").value;
        var height = document.getElementById("height").value;
        var area = width * height;
        document.getElementById("area").value = area;
      
      }


});