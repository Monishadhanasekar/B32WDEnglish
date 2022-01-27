var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function()
{
    var data = JSON.parse(request.response);
    console.log(data);
    var res = data.map(x => x.population).reduce((acc,cv) => 
    {
        let comp = acc +cv;
        return comp;
    },0);
    console.log(res);
}
