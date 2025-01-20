const cards = [
    {
        image: "assets/toh.png",
        title: "Tower Of Hell OP Script (PASTEBIN)",
        link: "https://lootdest.org/s?zZnAfK2s"
    },
    {
        image: "assets/bluelock_temp.png",
        title: "Blue Lock Rivals OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?Sx3t7Z8b"
    },
    {
        image: "assets/image (1).png",
        title: "Untitled Boxing Game OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?MMrM70bT"
    },
    {
        image: "assets/template_roblox (2).png",
        title: "Blox Fruits Autofarm Cash OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?DBTUMlFg"
    },
    {
        image: "assets/image (2).png",
        title: "Fisch OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?93KjCOoE"
    },
    {
        image: "assets/bladeball.png",
        title: "Blade Ball OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?47cKfOLA"
    },
    {
        image: "assets/mm2.png",
        title: "Murder Mystery OP Script (PASTEBIN)",
        link: "https://lootdest.org/s?2IBcO5GB"
    },
    {
        image: "assets/ras.png",
        title: "Reborn As Swordsman OP Script (PASTEBIN)",
        link: "https://lootdest.org/s?429ukKTw"
    },
    {
        image: "assets/aws.png",
        title: "Arm Wrestling OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?GRAbPjnI"
    },
    {
        image: "assets/ct.png",
        title: "Car Training OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?rh5E9pz4"
    },
    {
        image: "assets/ml.png",
        title: "Muscle Legends OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?gtPrcrYb"
    },
    {
        image: "assets/lootify4.png",
        title: "Lootify OP Script (PASTEBIN)",
        link: "https://loot-link.com/s?QSd8dGxH"
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