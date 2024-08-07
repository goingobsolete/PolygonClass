class PolygonGrid {
    constructor(rows, cols, radius, numSides) {
        this.rows = rows;
        this.cols = cols;
        this.radius = radius;
        this.numSides = numSides;
        this.polygons = [];
        // since the draw function happens after the polygon class you don't put this array in calccenters
        this.centers = this.calcCenters();
    }

    calcCenters() {
        const spacing = this.radius * 2;


        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                let x = i * spacing + this.radius;
                let y = j * spacing + this.radius; // this needs adjusting because hexagons are shorter than diameter
                let fillColor1 = color(random(255),random(255),random(255));
                let fillColor2 = color(random(255),random(255),random(255));
                let fillColor3 = color(random(255),random(255),random(255));
                
                this.polygons.push(new Polygon(x, y, this.radius, this.numSides, fillColor1));
                this.polygons.push(new Polygon(x, y, this.radius*.8, this.numSides, fillColor2));
                this.polygons.push(new Polygon(x, y, this.radius*.6, this.numSides, fillColor3));
                

            }
        }
    }

    display() {
        for (let polyInst of this.polygons) {
            polyInst.draw();
        }
    }
}