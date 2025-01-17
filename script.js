const cards = [
    {
        image: "assets/toh.png",
        title: "Tower Of Hell OP Script (PASTEBIN)",
        link: "https://work.ink/1R8U/m5zgwbur"
    },
    {
        image: "assets/blue-lock-rivals-codes.png",
        title: "Blue Lock Rivals OP Script (PASTEBIN)",
        link: "https://workink.net/1R8U/m5zq3cgk"
    },
    {
        image: "assets/image (1).png",
        title: "Untitled Boxing Game OP Script (PASTEBIN)",
        link: "https://workink.net/1R8U/m5zu9dps"
    },
    {
        image: "assets/template_roblox (2).png",
        title: "Autofarm Cash OP Script (PASTEBIN)",
        link: "https://workink.net/1R8U/m5zy8jg9"
    },
    {
        image: "assets/image (2).png",
        title: "Fisch OP Script (PASTEBIN)",
        link: "https://work.ink/1R8U/m60suees"
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