let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]


const table = document.createElement("table");
const thead = document.createElement("thead");
const tr_head = document.createElement("tr");
const th_lastname = document.createElement("th");
const th_firstname = document.createElement("th");
const th_hazas = document.createElement("th");
const th_pet = document.createElement("th");
const tbody = document.createElement("tbody");

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr_head);
tr_head.appendChild(th_lastname);
tr_head.appendChild(th_firstname);
tr_head.appendChild(th_pet);
tr_head.appendChild(th_hazas);
table.appendChild(tbody);

th_lastname.innerHTML = "Vezeténév";
th_firstname.innerHTML = "Keresztnév";
th_hazas.innerHTML = "Married";
th_pet.innerHTML = "Pet";
th_firstname.colSpan = 2;

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const lastName = document.getElementById("lastname");
    const firstName1 = document.getElementById("firstname1");
    const firstName2 = document.getElementById("firstname2");
    const married = document.getElementById("married");
    const pet = document.getElementById("pet");

    const lastNameValue = lastName.value;
    const firstName1Value = firstName1.value;
    let firstName2Value = firstName2.value;
    const marriedValue = married.checked;
    const petValue = pet.value;

    if (firstName2Value === "") {
        firstName2Value = undefined;
    }
    const newPerson = {
        firstname1: firstName1Value,
        firstname2: firstName2Value,
        lastname: lastNameValue,
        married: marriedValue,
        pet: petValue
    }

    if (validateField(lastname, firstName1, pet)) {
        array.push(newPerson);
        console.log(array)


        renderTable();
    }

})

renderTable();

function validateField(lastname, firstName1, pet) {
    if (lastname.value === "") {
        const apa = lastname.parentElement
        const error = apa.querySelector(".error")
        error.innerHTML = "kötelező"
        return false

    }
    if (firstName1.value === "") {
        const firstapa = firstName1.parentElement
        const firsterror = firstapa.querySelector(".error")
        firsterror.innerHTML = "kötelező"
        return false
    }
    if (pet.value === "") {
        const petapa = pet.parentElement
        const peterror = petapa.querySelector(".error")
        peterror.innerHTML = "kötelező"
        return false
    }
    return true
}

function renderTable() {
    tbody.innerHTML = '';
    for (const pers of array) {
        const tr_body = document.createElement("tr");
        tbody.appendChild(tr_body);
        const td_lastname = document.createElement("td");
        td_lastname.innerHTML = pers.lastname;
        tr_body.appendChild(td_lastname);
        const td_firstname1 = document.createElement("td");
        td_firstname1.innerHTML = pers.firstname1;
        tr_body.appendChild(td_firstname1);


        if (pers.firstname2 === undefined) {
            td_firstname1.colSpan = 2;
        } else {
            const td_firstname2 = document.createElement("td");
            td_firstname2.innerHTML = pers.firstname2;
            tr_body.appendChild(td_firstname2);
        }
        tr_body.addEventListener("click", function (e) {
            console.log("clicked");
            const select = tbody.querySelector(".selected");
            if (select != undefined) {
                select.classList.remove("selected");
            }
            e.currentTarget.classList.add("selected");
        });
        const td_pet = document.createElement("td");
        td_pet.innerHTML = pers.pet;
        tr_body.appendChild(td_pet);
        if (pers.married == true) {
            const td_married = document.createElement("td");
            td_married.innerHTML = "igen";
            tr_body.appendChild(td_married);
        } else {
            const td_married = document.createElement("td");
            td_married.innerHTML = "nem";
            tr_body.appendChild(td_married);
        }

    }
}
