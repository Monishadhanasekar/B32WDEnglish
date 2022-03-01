// creates all the html elements to get an input from user
function create_input_elements() {
    let div = document.createElement("div");
    div.setAttribute("class", "fields");
    document.body.append(div);
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "heading");
    h2.innerText = "SEARCH BREWERIES";
    div.append(h2);
    let box = document.createElement("input");
    box.setAttribute("class", "form-control");
    box.setAttribute("type", "text");
    box.setAttribute("placeholder", "Enter the search text - eg:dog");
    div.append(box);
    var linebreak = document.createElement("br");
    div.append(linebreak);
    let div1 = document.createElement("div");
    div1.setAttribute("class", "text-center");
    div.append(div1);
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.innerText = "submit";
    div1.append(button);
    button.addEventListener("click", fetch_breweries);
    var linebreak1 = document.createElement("br");
    div.append(linebreak1);
    let div2 = document.createElement("div");
    div2.setAttribute("id", "table_div");
    document.body.append(div2);
}

// creates table headers to display the result data
function create_table_headers() {
    console.log("creating table headers");
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Brewery_type";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Address";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Website Url";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Phone number";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "Map Location";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);

    let thead = document.createElement('thead');
    thead.appendChild(row_1);

    let table = document.createElement('table');
    table.setAttribute("class", "table table-dark");
    table.setAttribute("id", "mytable")
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    tbody.setAttribute("id", "tbody");
    table.appendChild(tbody);

    // Adding the entire table to the div tag
    document.getElementById("table_div").appendChild(table)
}

// append the single brewery data as a row in to the table
function append_row(name, brewery_type, street, city, state, postal_code, country, phone, website_url, lat, long) {
    let row = document.createElement("tr");
    let table_body = document.getElementById("tbody");
    table_body.appendChild(row);
    
    let data1 = document.createElement('td');
    data1.innerHTML = name;

    let data2 = document.createElement('th');
    data2.innerHTML = brewery_type;

    let data3 = document.createElement('th');
    data3.innerHTML = street, city, state, postal_code, country;

    let data4 = document.createElement('th');
    if (website_url == null) {
        data4.innerHTML = "";
    } else {
        data4.innerHTML = `<a href=${website_url} target="_blank">${website_url}</a>`;
    }

    let data5 = document.createElement('th');
    data5.innerHTML = phone;

    let data6 = document.createElement('th');
    if (lat == null || long == null) {
        data6.innerHTML = ""
    } else {
        // adds the svg icon button
        data6.innerHTML = `<a href='https://maps.google.com/?q=${lat},${long}' target='_blank'><button type="button" class="btn btn-outline-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
        </svg>
    </button></a>`;
    }

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(data4);
    row.appendChild(data5);
    row.appendChild(data6);

}
// fetch the brewery datas of given search term
async function fetch_breweries() {
    const breweryType = document.querySelector(".form-control").value;
    if (breweryType == "") {
        alert("Please enter the search text!");
        return;
    }
    let data, list;
    try {
        data = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${breweryType}`);
        list = await data.json();
    }
    catch {
        alert("Something went wrong. Please try again!");
        return;
    }
    console.log(`result:${list}`);
    document.getElementById("table_div").innerHTML = "";
    create_table_headers();
    for (let i = 0; i < list.length; i++) {
        console.log("in for loop");
        const name = list[i].name;
        const b = list[i].brewery_type;
        const c = list[i].street;
        const d = list[i].city;
        const e = list[i].state;
        const f = list[i].postal_code;
        const g = list[i].country;
        const h = list[i].phone;
        const j = list[i].website_url;
        const lat = list[i].latitude;
        const long = list[i].longitude;
        append_row(name, b, c, d, e, f, g, h, j, lat, long);
    }
}
