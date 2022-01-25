class uber
{
    constructor(distance)
    {
        this.distance = distance;
        this.costperkm = 100;
    }
    getprice()
    {
        let price = this.distance * this.costperkm;
        return price;
    }
}
let c1 = new uber(30);
console.log(c1.getprice());
