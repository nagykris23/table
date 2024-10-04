const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
 
 
const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");
const th_lastname = document.createElement("th");
const th_firstname = document.createElement("th");
const tbody = document.createElement("tbody");
 
document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th_lastname);
tr.appendChild(th_firstname);
table.appendChild(tbody);
 
th_lastname.innerHTML = "Vezeténév";
th_firstname.innerHTML = "Keresztnév";
th_firstname.colSpan = 2;
 
for(let pers of array){
    const tr_body = document.createElement("tr");
    tbody.appendChild(tr_body);
    const td_lastname = document.createElement("td");
    td_lastname.innerHTML = pers.lastname;
    tr_body.appendChild(td_lastname);
    const td_firstname1 = document.createElement("td");
    td_firstname1.innerHTML = pers.firstname1;
    tr_body.appendChild(td_firstname1);
    if(pers.firstname2 === undefined){
        td_firstname1.colSpan = 2;
    }else{
        const td_firstname2 = document.createElement("td");
        td_firstname2.innerHTML = pers.firstname2;
        tr_body.appendChild(td_firstname2);
    }
}
 
 
