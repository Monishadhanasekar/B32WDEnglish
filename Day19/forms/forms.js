let count = 1;
function validate(){
  let table = document.getElementById('datastored');
  let row = table.insertRow(count);
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const genderselect = document.getElementById("gender-select").value;
    var food = "";
    let foodcount = 0;
    if(document.getElementById("food1").checked == true){
        food = food + " " + document.getElementById("food1").value;
        foodcount++;
    }
    if(document.getElementById("food2").checked == true){
        food = food + " " + document.getElementById("food2").value;
        foodcount++;
    }
    if(document.getElementById("food3").checked == true){
        food = food + " " + document.getElementById("food3").value;
        foodcount++;
    }
    if(document.getElementById("food4").checked == true){
        food = food + " " + document.getElementById("food4").value;
        foodcount++;
    }
    if(document.getElementById("food5").checked == true){
        food = food + " " + document.getElementById("food5").value;
        foodcount++;
    }
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    
    if(fname && lname && address&& food && foodcount >=2 && pincode && state && country && genderselect){
        let cell1 = row.insertCell(0);
    cell1.innerHTML = fname;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = lname;
    let cell3 = row.insertCell(2);
    cell3.innerHTML = address;
    let cell4 = row.insertCell(3);
    cell4.innerHTML = pincode;
    let cell5 = row.insertCell(4);
    cell5.innerHTML = genderselect;
    let cell6 = row.insertCell(5);
    cell6.innerHTML = food;
    let cell7 = row.insertCell(6);
    cell7.innerHTML = state;
    let cell8 = row.insertCell(7);
    cell8.innerHTML = country;
    }
    else if(foodcount< 2){
        alert("atleast 2 item should be select"); 
        
    }
    else{
        alert(" fill all the details");
       
    }
    
   var form = document.getElementById("forms");
   form.reset();
}



