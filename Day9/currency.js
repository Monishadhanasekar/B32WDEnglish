var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function()
{
    var data = JSON.parse(request.response);
    console.log(data);
    let s = data.filter(mark)  .map(cut);
    function mark(item){
        let flag = false;
        for(let i =0;i<item.currencies.length;i++)
        {
        if(item.currencies[i].code === "USD"){
            flag = true;
            break;
            }
        }
        return flag;
    }
    function cut(item)
    {
        return item.name;
    }
        console.log(s);
}