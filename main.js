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
const table = document.createElement('table');
const thead = document.createElement('thead');
const tr= document.createElement('tr');
const th_firstname= document.createElement('th');
const th_lastname= document.createElement('th');
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th_lastname);
th_lastname.innerHTML = "keresztnév"
tr.appendChild(th_firstname);
th_firstname.innerHTML = "vezetéknév"
th_lastname.colSpan=2;
table.appendChild(tbody);

for(let pers of array){
    const tr_body= document.createElement('tr');
    tbody.appendChild(tr_body);
    const td_firstname= document.createElement('td');
    td_firstname.innerHTML=pers.firstname1
    const td_lastname= document.createElement('td');
    td_lastname.innerHTML=pers.lastname
}