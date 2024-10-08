class PolygonGrid {
    constructor(xTiles, yTiles, radius, numSides) {
        this.xTiles = xTiles;
        this.yTiles = yTiles;
        this.radius = radius;
        this.numSides = numSides;
        this.polygons = [];
        // since the draw function happens after the polygon class you don't put this array in calccenters
        this.centers = this.calcCenters();
    }

    calcCenters() {
        const spacingX = this.radius * 1.5;
        const spacingY = this.radius * Math.sqrt(3); 


        for (let i = 0; i < this.xTiles; i++) {
            for(let j = 0; j < this.yTiles; j++) {
                let x = i * spacingX + this.radius;
                let y = j * spacingY + this.radius;

                if(i % 2 == 0) {
                    // x += (spacingX/2);
                    y += (spacingY/2);
                }
                
                let fillColor1 = color(random(0),random(0),random(0));
                let fillColor2 = color(random(255,255),random(255,255),random(255,255));
                // let fillColor3 = color(255,0,0,random(255));
                
                this.polygons.push(new Polygon(x, y, this.radius, this.numSides, fillColor1));
                this.polygons.push(new Polygon(x, y, this.radius*.95, this.numSides, fillColor2));
                // this.polygons.push(new Polygon(x, y, this.radius*.9, this.numSides, fillColor3));
                

            }
        }
    }

    display() {
        for (let polyInst of this.polygons) {
            polyInst.draw();
        }
    }
}