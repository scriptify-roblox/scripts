const cards = [
    {
        image: "assets/Limited Marble Race.png",
        title: "Limited Marble Race OP Script (PASTEBIN)",
        link: "#"
    },
]

function renderCards() {
    const cardContainer = document.getElementById("card-container");

    cards.forEach((card) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";

        cardDiv.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <h1>${card.title}</h1>
            <a href="${card.link}">GET THE SCRIPT</a>
        `;

        cardContainer.appendChild(cardDiv);
    });
}

renderCards();