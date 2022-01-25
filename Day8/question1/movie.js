class movie
{
    constructor(title,studio,rating="PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(films)
    {
        let d =[];
        for(let i=0;i<films.length;i++)
        {
            if(films[i].rating == "PG")
            {
                d.push(films[i]);
            }
        }
        return d;
    }
}
let s1 = new movie("Casino Royale","Eon productions","PG13");
let s2 = new movie("Harrypotter","S productions","PG12");
let s3 = new movie("Little john","V productions");
let films = [s1,s2,s3];
console.log(s1.getPG(films));