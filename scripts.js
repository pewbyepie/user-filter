const result = document.getElementById('result');
const filter = document.getElementById('filter');
const lista = [];

getData();

async function getData() {
    const resp = await fetch("https://randomuser.me/api?results=75");
    const { results } = await resp.json();

    result.innerHTML = ``;

    results.forEach(user => {
        const li = document.createElement("li");

        lista.push(li);

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
        result.appendChild(li);
    })
}

filter.addEventListener("input", (e) => {
    filterName(e.target.value);
});

function filterName(valuee) {
    lista.forEach(item => {
        if(item.innerText.toLowerCase().includes(valuee.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}