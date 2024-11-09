/**
 *
 * @param {td|th} tagname
 * @param {string} inner
 * @param {HTMLTableRowElement} parent
 * @returns{HTMLElement}
 */

function creatTableCell(tagname, inner, parent) {
    const td = document.createElement(tagname);
    td.innerHTML = inner;

    parent.appendChild(td);
    return td;
}
/**
 *
 * @param {*} tag
 * @param {*} id
 * @param {*} parent
 */
function creatHtmlElement(tag, id, parent) {
    const elem = document.createElement(tag)
    elem.id = id;
    parent.appendChild(elem);

}

function creatHtmlElementWithParentId(tag, id, parentid) {
    const elem = document.getElementById(parentid)
    if (elem != undefined) {
        creatHtmlElement(tag, id, elem)
    }
}

function renderTableHeader(persontr) {
    const theader = document.getElementById(persontr)
    creatTableCell("th", "vezetéknév", theader)
    const kerszt = creatTableCell("th", "keresztnév", theader)
    kerszt.colSpan = 2
    creatTableCell("th", "házas", theader)
    creatTableCell("th", "állat", theader)
}

function renderTable(parray) {
    const tbody = document.getElementById("personbody")
    tbody.innerHTML = '';
    for (let pers of parray) {
        const tr_body = document.createElement("tr");

        creatTableCell('td', pers.lastname, tr_body)
        const firstName1 = creatTableCell('td', pers.firstname1, tr_body);


        if (pers.firstname2 === undefined) {
            firstName1.colSpan = 2;
        } else {
            creatTableCell("td", pers.firstname2, tr_body);
        }
        creatTableCell("td", pers.married ? "igen" : "nem", tr_body);

        creatTableCell("td", pers.pet, tr_body);

        tbody.appendChild(tr_body);
        tr_body.addEventListener("click", function (e) {
            console.log("clicked");
            const select = tbody.querySelector(".selected");
            if (select != undefined) {
                select.classList.remove("selected");
            }
            e.currentTarget.classList.add("selected");
        });



    }

}

function validateField(lastname, firstName1, pet) {
    let result = true
    if (lastname.value === "") {
        const apa = lastname.parentElement
        const error = apa.querySelector(".error")
        error.innerHTML = "kötelező"
        result = false

    }
    if (firstName1.value === "") {
        const firstapa = firstName1.parentElement
        const firsterror = firstapa.querySelector(".error")
        firsterror.innerHTML = "kötelező"
        result = false
    }
    if (pet.value === "") {
        const petapa = pet.parentElement
        const peterror = petapa.querySelector(".error")
        peterror.innerHTML = "kötelező"
        result = false
    }
    return result


}