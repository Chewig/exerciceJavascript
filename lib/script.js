// Initialisation des variables
var mainElt, articleElt, titre, cv, divElt;
mainElt = document.querySelector('main');

// Tableau d'objet du cv
cv = [

    {
        terme: "Logiciels",
        definition: ["Photoshop", "Illustrator", "InDesign"],
    },
    {
        terme: "Frameworks",
        definition: ["Bootstrap", "Fondation", "Symphony2/Twig", "Angularjs"],
    },
    {
        terme: "Librairies",
        definition: ["JQUERY", "REACTJS"],
    },
    {
        terme: "Langages",
        definition: ["HTML", "CSS", "Javascript", "PHP"],
    },
    {
        terme: "Preprocesseurs",
        definition: ["SASS", "LESS", "Jade"],
    },
    {
        terme: "Outils",
        definition: ["Gulp", "Git"],
    },
    {
        terme: "CMS",
        definition: ["Wordpress", "Trumblr"],
    }

];


// Création de l'article du dl, d'un conteneur et du titre
articleElt = document.createElement('article');
titre = document.createElement('h3');
titre.textContent = "Compétences";
articleElt.appendChild(titre);
divElt = document.createElement("div");
articleElt.appendChild(divElt);


// Boucle de création des éléments et intégration au html
for (var dlElt, dtElt, ddElt, i = 0; i < cv.length; i++) {
    
    dlElt = document.createElement('dl');
    dtElt = document.createElement('dt');
    dtElt.textContent = cv[i].terme;
    dtElt.style.fontWeight = "800";
    dlElt.appendChild(dtElt);
    articleElt.appendChild(dlElt);
    

    // Boucle de création des dd et intégration au dl    
    cv[i].definition.forEach(function (logiciel) {
        
        ddElt = document.createElement('dd');
        ddElt.textContent = logiciel;
        ddElt.style.margin = "0";
        dlElt.appendChild(ddElt);
        divElt.appendChild(dlElt);
              
    });
};

mainElt.appendChild(articleElt);

// CSS
mainElt.style.paddingTop = "30px";

articleElt.style.boxSizing = "border-box";
articleElt.style.border = "3px solid black";
articleElt.style.borderRadius = "30px";
articleElt.style.padding = "30px 30px 0 30px";
articleElt.style.maxWidth = "600px";
articleElt.style.margin = "0 auto";

divElt.style.display = "flex";
divElt.style.height = "500px";
divElt.style.flexFlow = "column wrap";
divElt.style.alignContent = "space-around";











