class PolygonGrid {
    constructor(rows, cols, radius, numSides) {
        this.rows = rows;
        this.cols = cols;
        this.radius = radius;
        this.numSides = numSides;
        this.polygons = polygons [];
        // since the draw function happens after the polygon class you don't put this array in calccenters
        this.centers = this.calcCenters();
    }

    calcCenters() {
        const spacing = this.radius * 2;


        for (let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                let x = i * spacing + this.radius;
                let y = j * spacing + this.radius;
                let fillColor = color(0);
                
                this.polygons.push(x, y, this.radius, this.numSides, fillColor)

            }
        }
    }

    display() {
        for (let polyInst of this.polygons) {
            polyInst.display();
        }
    }
}