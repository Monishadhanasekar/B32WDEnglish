//function to insert fetched datas in html page
function create(number, sect_tam, chapgrp_tam, chap_tam, line1, line2, tam_exp) {
    document.querySelector(".user-list").innerHTML +=
        `<div class="info">
      <p>Number: ${number}</p>
      <p>Section: ${sect_tam}</p>
      <p>Chapter-grp: ${chapgrp_tam}</p>
      <p>Chapter: ${chap_tam}</p>
      <p>Line 1: ${line1}</p>
      <p>Line 2: ${line2}</p>
      <p>Explanation: ${tam_exp}</p>
      </div>`;
}
// function to get an kural detail
async function datas() {
    const kural_num = document.querySelector(".kural-type").value;
    //to check the given number is valid or not
    if (kural_num > 1330) {
        document.getElementById("error").innerHTML = "*Enter a number between 1 and 1330";
        return;
    }
    document.getElementById("error").innerHTML = "";
    console.log(`fetching the thirukural : ${kural_num}`);
    const data = await fetch(`https://api-thirukkural.vercel.app/api?num=${kural_num}`);
    const list = await data.json();
    document.querySelector(".user-list").innerHTML = "";
    const a = list.number;
    const b = list.sect_tam;
    const c = list.chapgrp_tam;
    const d = list.chap_tam;
    const e = list.line1;
    const f = list.line2;
    const g = list.tam_exp;
    create(a, b, c, d, e, f, g);
} 
