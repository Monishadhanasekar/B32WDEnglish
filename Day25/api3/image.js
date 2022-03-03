function create(url) {
    document.querySelector(".user-list").innerHTML +=
        `<div class="info">
        <img src = "${url}">
      </div>`;
}
// function to fetch data from server
async function datas() {
    const data = await fetch("http://random.dog/woof.json");
    const list = await data.json();
    document.querySelector(".user-list").innerHTML = "";
    const result = list.url;
    console.log(result);
    if(result.length == 0){
        document.querySelector(".user-list").innerHTML = "No image to show";
    }
   create(result);
} 
