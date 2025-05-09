// Memes pré-carregados
const memes = [
    { img: "assets/memes/grama1.jpg", desc: "Grama batendo sol" },
    { img: "assets/memes/grama2.jpg", desc: "Grama vs. pisoteio" }
];

// Carrega memes na página
function loadMemes() {
    const container = document.getElementById('memeContainer');
    memes.forEach(meme => {
        container.innerHTML += `
            <div class="meme-card">
                <img src="${meme.img}" alt="${meme.desc}">
            </div>
        `;
    });
}

// Efeito sonoro
document.getElementById('soundBtn').addEventListener('click', () => {
    new Audio('sounds/grass-sound.mp3').play();
});

window.onload = loadMemes;
