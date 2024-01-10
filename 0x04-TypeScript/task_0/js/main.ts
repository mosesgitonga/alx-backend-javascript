const { JSDOM } = require('jsdom');


interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Moses",
    lastName: "Gitonga",
    age: 20,
    location: "Kenya"
};

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "Kenya"
}

let studentsList: Student[] = [student1, student2];

function renderTable() {
    const dom = new JSDOM(`<!DOCTYPE html><table><thead><tr><th>First Name</th><th>Location</th></tr></thead><tbody id="tableBody"></tbody></table>`);
    const document = dom.window.document;

    const table = document.querySelector('table')
    const tableBody = document.createElement('tbody');

    studentsList.forEach(student => {
        const row = document.createElement('tr')
        const cell1 = document.createElement('td')
        const cell2 = document.createElement('td')

        cell1.textContent = student.firstName;
        cell2.textContent = student.location;

        row.appendChild(cell1)
        row.appendChild(cell2)
        tableBody.appendChild(row)
    })
    table.appendChild(tableBody);
    console.log(dom.window.document.documentElement.outerHTML);

}

renderTable()
