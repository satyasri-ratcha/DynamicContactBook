let contacts = [
    { name: "Ravi", phone: "9876543210", cat: "Friends" },
    { name: "Anjali", phone: "9123456780", cat: "Family" },
    { name: "John", phone: "9988776655", cat: "Work" }
];

let currentCat = "All";

function render() {
    let list = document.getElementById("list");
    let search = document.getElementById("search").value.toLowerCase();

    list.innerHTML = "";

    contacts
        .filter(c => currentCat == "All" || c.cat == currentCat)
        .filter(c => c.name.toLowerCase().includes(search))
        .forEach((c, i) => {

            list.innerHTML += `
    <div class="card">
      <div class="avatar">${c.name[0]}</div>
      <div class="name">${c.name}</div>
      <div>${c.phone}</div>
      <div class="category">${c.cat}</div>

      <div class="btns">
        <button class="edit" onclick="editContact(${i})">Edit</button>
        <button class="delete" onclick="delContact(${i})">Delete</button>
      </div>
    </div>
    `;
        });
}

function addContact() {
    let n = document.getElementById("name").value;
    let p = document.getElementById("phone").value;
    let c = document.getElementById("category").value;

    contacts.push({ name: n, phone: p, cat: c });
    render();
}

function delContact(i) {
    contacts.splice(i, 1);
    render();
}

function editContact(i) {
    let newName = prompt("Edit Name", contacts[i].name);
    contacts[i].name = newName;
    render();
}

function filterCat(cat) {
    currentCat = cat;
    render();
}

document.getElementById("search").addEventListener("input", render);

render();