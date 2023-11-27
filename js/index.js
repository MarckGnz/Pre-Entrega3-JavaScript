const tickets = [
    {
        id: "ticket 01",
        titulo: "Duki",
        imagen: '../images/Duki.jpg',
        categoria: "river",
        precio: "22.000"
    },
    {
        id: "ticket 02",
        titulo: "CRO",
        imagen: "../images/cro.png",
        categoria: "obras",
        precio: "10.000"
    },
    {
        id: "ticket 03",
        titulo: "Maria",
        imagen: "../images/maria.png",
        categoria: "river",
        precio: "35.000"
    },
    {
        id: "ticket 04",
        titulo: "RHCP",
        imagen: "../images/RHCP.png",
        categoria: "river",
        precio: "45.000"
    },
    {
        id: "ticket 05",
        titulo: "Taylor",
        imagen: "../images/Taylor.jpg",
        categoria: "river",
        precio: "56.000"
    },
    {
        id: "ticket 06",
        titulo: "YSY A",
        imagen: "../images/ysy.webp",
        categoria: "huracan",
        precio: "14.000"
    }
]

const conTickets = document.querySelector("#conTickets")

function cargarTickets() {

    tickets.forEach(tickets => {

        const div = document.createElement("div");
        div.classList.add("tickets");
        div.innerHTML =  `
        <img class="tickets-imagen" src="${tickets.imagen}" alt="${tickets.titulo}">
        <div class="tickets-detalles">
            <h1 class="tickets-precio">$${tickets.precio}</1>
            <button class="agregar" id="${tickets.id}">Agregar</button>
        </div>
    `;

    conTickets.append(div)

    })
}

cargarTickets();