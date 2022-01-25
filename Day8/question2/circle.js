class circle
{
    constructor(radius,color)
    {
        this.radius = radius;
        this.color = color;
    }
    getradius()
    {
        return this.radius;
    }
    setradius(r)
    {
        this.radius = r;
    }
    getcolor()
    {
        return this.color;
    }
    setcolor(c)
    {
        this.color = c;
    }
    toString()
    {
        let d = "The color of circle is" + " " + this.color + " " + "and the radius is" +" " + this.radius;
        return d;
    }
    getArea()
    {
        let pi = 3.14;
        let area = pi * this.radius **2;
        return area;
    }
    getCircumference()
    {
        let pi = 3.14;
        let cir = 2 * pi * this.radius;
        return cir;
    }
}
let c1 = new circle(2,"red");
let c2 = new circle(4,"Orange");
console.log(c1.getradius());
c1.setcolor("Blue");
console.log(c1.getcolor());
console.log(c1.toString());
console.log(c2.getArea());
console.log(c1.getCircumference());