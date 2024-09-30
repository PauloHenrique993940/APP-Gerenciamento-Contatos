const contactForm = document.getElementById("contact-form");
const contactsTableBody = document.querySelector("#contacts-table tbody");
let contacts = [];

// Função para renderizar a lista de contatos
function renderContacts() {
    contactsTableBody.innerHTML = ""; // Limpa a tabela

    contacts.forEach((contact, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${contact.name}</td>
        <td>${contact.phone}</td>
        <td>${contact.email}</td>
        <td>
        <button class="edit" onclick="editContact(${index})">Editar</button>
        <button class="delete" onclick="deleteContact(${index})">Excluir</button>
        </td>
        `;

        contactsTableBody.appendChild(row);
    });
}

// Função para adicionar novo contato
function addContact(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Verifica se os campos não estão vazios
    if (name && phone && email) {
        const newContact = { name, phone, email };
        contacts.push(newContact); // Adiciona o novo contato à lista

        renderContacts(); // Renderiza a lista atualizada de contatos
        contactForm.reset(); // Limpa os campos do formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para editar contato
function editContact(index) {
    const contact = contacts[index];

    document.getElementById("name").value = contact.name;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;

    // Remove o contato antigo para substituí-lo
    contacts.splice(index, 1);
    renderContacts(); // Atualiza a lista
}

// Função para excluir contato
function deleteContact(index) {
    if (confirm("Tem certeza que deseja excluir este contato?")) {
        contacts.splice(index, 1); // Remove o contato da lista
        renderContacts(); // Renderiza a lista atualizada
    }
}

// Event listener para adicionar novo contato
contactForm.addEventListener("submit", addContact);
