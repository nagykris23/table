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


creatHtmlElement("table", "persontable", document.body);
creatHtmlElementWithParentId("thead", "personthead", "persontable");
creatHtmlElementWithParentId("tr", "persontr", "personthead");
creatHtmlElementWithParentId("tbody", "persontbody", "persontable");
renderTableHeader();

renderTable(array);


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


        renderTable(array);
    }

})




