document.addEventListener("DOMContentLoaded", () => {
    const descriptions = {
        "rendu_potion.png" : "J'ai débuté la modélisation 3D il n'y a pas longtemps, et voici mon meilleur projet pour le moment.",
        "projet_pokemon.png" : "Durant mon année de terminal, je me suis penché sur une bibliothèque python nommée Pygame.Elle permet un affichage coloré et facile d'utilisation. Donc j'ai codé un jeu de combat pokémon, avec une IA pour pour quee l'ordi puisse jouer contre nous. ",
        "projet_snake.png" : "De meme, jai continué à faire des projets en python, car c'est le language que je maitrise le mieux à l'heure actuel, j'ai donc recodé mon snake, en y ajoutant des fruits avec des pouvoir spécials.",
        "projet_pc_minecraft.png" : "En début d'année j'ai vu une vidéo d'un youtuber Minecraft réaliser un ordinateur en Redstone dans mincraft. (La redstone est un peu comme de l'éléctricité dans Minecraft) J'ai donc voulu faire de meme à l'aide de tutoriel. J'ai donc mieux compris le fonctionnement d'un ordinateur et de l'utilisation des bits dans celui ci.",
    };

    const zoneTexte = document.getElementById("description_texte");
    // On cible la div parente (la boîte blanche) pour l'afficher
    const conteneurDescription = document.querySelector(".description_section");

    document.addEventListener("click", (e) => {
        if (e.target.tagName === "IMG") { // On vérifie que c'est une image
            const nom = e.target.getAttribute("src");
            
            // 1. On insère le texte
            zoneTexte.textContent = descriptions[nom] || "aucune description disponible";
            
            // 2. On rend la boîte visible
            conteneurDescription.style.display = "flex";
        }
    });
});

function experiences(type) {
    // 1. On définit quelle image correspond à quel bouton
    const images = {
        'CTF': 'photo_CTF.jpg',           
        'Communication': 'photo_ddtm.jpg',
        'volley': 'photo_coupe_bretagne.jpg'
    };

    // 2. On récupère l'élément image par son ID
    const imageAffichee = document.getElementById("monImage");

    // 3. On change la source de l'image si le type existe dans notre liste
    if (images[type]) {
        imageAffichee.src = images[type];
        
        // Optionnel : on peut aussi changer le texte alternatif pour l'accessibilité
        imageAffichee.alt = "Expérience " + type;
    }
}