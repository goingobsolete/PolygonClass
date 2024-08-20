class Polygon {
    constructor(centerX, centerY, radius, numSides, fillColor = "black") {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.numSides = numSides;
        this.fillColor = fillColor;
        this.vertices = this.calcVertices();
    }

    calcVertices() {
        let vertices = [];
        let angleStep = TAU / this.numSides;

        for (let i = 0; i < this.numSides; i++) {
            let angle = i * angleStep;
            let x = 0 + this.radius * cos(angle);
            let y = 0 + this.radius * sin(angle);
            vertices.push({ x: x, y: y});
        }
        return vertices;
    }
    draw() {
        push();
        translate(this.centerX,this.centerY);
        fill(this.fillColor);
        noStroke();
        beginShape();
        this.vertices.forEach(tempVertex => {
            vertex(tempVertex.x,tempVertex.y);
        });
        endShape(CLOSE);
        
        pop();
    }

}

