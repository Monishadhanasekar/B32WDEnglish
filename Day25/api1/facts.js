function create(text) {
    document.querySelector(".user-list").innerHTML +=
        `<div class="info">
      <h2>${text}</h2>
      <hr>
      </div>`;
}
// function to get an user search text
async function datas() {
    const animalType = document.querySelector(".animal-type").value;
    const factsCount = document.querySelector(".facts").value;
    const data = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${factsCount}`);
    const list = await data.json();
    document.querySelector(".user-list").innerHTML = "";
    const result = list
        .map((fact) => fact.text);
    console.log(result);
    if(result.length == 0){
        document.querySelector(".user-list").innerHTML = "No facts to show";
    }
    result.forEach((facts) => create(facts));
} 
