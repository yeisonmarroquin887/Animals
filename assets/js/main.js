const ingresar = document.getElementById("IngresarOne");
const ingresarTwo = document.getElementById("IngresarTwo");
const Volver = document.getElementById("Volver");
const ImagenPrincipal = document.querySelector(".imagePrincipal img")
const miniatura = document.querySelector(".miniaturas")
const nombre = document.getElementById("name")
const disti = document.querySelector(".disti")
const cara = document.querySelector(".cara")
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")


ingresar.addEventListener("click", function(){
    const bienvenida = document.querySelector(".Bienvenida")
    bienvenida.style.display = "none"

    const galeria = document.querySelector(".Galeria")
    galeria.style.display = "block"
});

ingresarTwo.addEventListener("click", function(){
    const bienvenida = document.querySelector(".Bienvenida")
    bienvenida.style.display = "none"

    const galeria = document.querySelector(".Galeria")
    galeria.style.display = "block"
});
Volver.addEventListener("click", function(){
    const bienvenida = document.querySelector(".Bienvenida")
    bienvenida.style.display = "flex"

    const galeria = document.querySelector(".Galeria")
    galeria.style.display = "none"
});



const Animales = [
    {
        image: "../../public/images/Leon.webp",
        name: "Leon",
        distribucion: "Los leones se encuentran principalmente en África subsahariana, aunque también hay una pequeña población remanente en el Parque Nacional de Gir en India.",
        caracteristicas: "Los leones son grandes felinos con una distintiva melena en los machos, que varía en color desde rubio claro hasta negro. Las hembras son generalmente más pequeñas y carecen de melena. Tienen cuerpos robustos, patas fuertes y garras retráctiles."
    },
    {
        image: "../../public/images/chita.jpg",
        name: "Guepardo",
        distribucion: "Los guepardos se encuentran principalmente en África, pero también se encuentran en algunas partes de Irán.",
        caracteristicas: "Son felinos esbeltos y aerodinámicos, con un pelaje amarillo claro o dorado cubierto de manchas negras. Tienen una cabeza pequeña con ojos negros distintivos y una lágrima negra que corre desde el ojo hasta la comisura de la boca."
    },
    {
        image: "../../public/images/elefante.webp",
        name: "Elefante",
        distribucion: "Los elefantes africanos se encuentran en varias partes del África subsahariana, mientras que los elefantes asiáticos se encuentran en regiones de Asia, incluyendo India, Sri Lanka, Tailandia y partes del sudeste asiático.",
        caracteristicas: "Los elefantes son reconocidos por sus cuerpos masivos, largas trompas (proboscis), grandes orejas que pueden parecerse a la forma del continente africano y colmillos (en los elefantes africanos y en algunos elefantes asiáticos machos). Los elefantes africanos son generalmente más grandes que los elefantes asiáticos y tienen orejas más grandes."
    },
    {
        image: "../../public/images/Hiena.jpg",
        name: "Hiena",
        distribucion: "Las hienas se encuentran principalmente en África subsahariana, aunque también habitan en partes de Asia, como la India y el Medio Oriente.",
        caracteristicas: "Las hienas son animales robustos con cuerpos musculosos, patas relativamente cortas y una espalda inclinada. Tienen cabezas grandes, mandíbulas poderosas y dientes afilados. La hiena manchada es la especie más grande y distintiva, con un pelaje marrón claro y manchas negras."
    },
    {
        image: "../../public/images/jirafa.avif",
        name: "Jirafa",
        distribucion: "Las jirafas se encuentran principalmente en África subsahariana, en regiones de sabana, pradera y bosques abiertos.",
        caracteristicas: "Las jirafas son conocidas por su cuello largo y distintivo, que puede alcanzar hasta 6 metros de longitud en los machos adultos. Tienen cuerpos robustos, patas largas y delgadas, y una cola larga con un mechón de cerdas en la punta. Su pelaje es de color amarillo claro con manchas oscuras que varían en forma y tamaño según la subespecie."
    },
    {
        image: "../../public/images/coco.jpg",
        name: "Cocodrilo",
        distribucion: "Los cocodrilos se encuentran en regiones tropicales y subtropicales de África, Asia, Australia y América.",
        caracteristicas: "Los cocodrilos tienen cuerpos largos y robustos, con piel gruesa y escamosa. Tienen cabezas anchas con mandíbulas poderosas llenas de dientes afilados. Sus ojos y fosas nasales están situados en la parte superior de la cabeza, lo que les permite respirar y ver mientras el resto del cuerpo permanece sumergido."
    },
	{
        image: "../../public/images/bufalo.avif",
        name: "Bufalo",
        distribucion: "Los búfalos africanos se encuentran en África subsahariana, desde el sur del Sahara hasta Sudáfrica. Los búfalos de agua asiáticos son nativos de Asia, incluyendo India, China, Tailandia y Filipinas.",
        caracteristicas: "Los búfalos son animales grandes y robustos, con cuerpos pesados y patas fuertes. Tienen cabezas grandes y cuernos curvos en forma de gancho, que pueden llegar a ser impresionantemente largos en los búfalos africanos. Su pelaje es generalmente oscuro y grueso."
    },
    {
        image: "../../public/images/Hipopotamo.webp",
        name: "Hipopotamo",
        distribucion: "Los hipopótamos se encuentran principalmente en África subsahariana, en áreas con cuerpos de agua como ríos, lagos y pantanos.",
        caracteristicas: " Los hipopótamos son animales grandes y pesados, con cuerpos redondeados, patas cortas y gruesas, y una cabeza grande con orejas pequeñas y ojos prominentes. Tienen piel gruesa y arrugada que secreta un líquido rosado, conocido como sudor hipopótamo, que actúa como protector solar y antibacterial."
    },
	{
        image: "../../public/images/sebra.jpg",
        name: "Cebra",
        distribucion: "Las cebras se encuentran principalmente en África, habitando en regiones de llanuras y sabanas en varios países del continente.",
        caracteristicas: "Las cebras son conocidas por su distintivo pelaje a rayas, que consiste en rayas blancas y negras que varían en patrón según la especie. Tienen cuerpos esbeltos, cuellos largos y cabezas pequeñas con orejas puntiagudas. Las cebras de Grevy son las más grandes y tienen rayas más estrechas que las otras especies."
    },
    
]

let currentIndex = 0;

function mostrarMini(){
    const miniaturas = document.querySelectorAll(".miniatura");
    miniaturas.forEach((mini, index) => {
        if(index >= currentIndex && index < currentIndex + 3){
            mini.style.display = "inline-block"
        }else {
            mini.style.display = "none"
        }
    })
}

prevBtn.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex -= 3; // Retroceder 4 miniaturas
        mostrarMini();
    }
});

nextBtn.addEventListener("click", function() {
    const miniaturas = document.querySelectorAll(".miniatura");
    if (currentIndex + 3 < miniaturas.length) {
        currentIndex += 3; // Avanzar 4 miniaturas
        mostrarMini();
    }
});

function mostrarinfo(descriptcion, caracteristicas){
     disti.textContent = descriptcion
     cara.textContent = caracteristicas

}

function MostrarAnimales(){
     Animales.forEach((animal) => {
      const mini = document.createElement("img")
      mini.src = animal.image;
      mini.alt = animal.name;
      mini.classList.add("miniatura")
      mini.addEventListener("click", function() {
        ImagenPrincipal.src = animal.image;
        nombre.textContent = animal.name
        mostrarinfo(animal.distribucion, animal.caracteristicas)
        console.log("me ejecuto")
    });

    miniatura.appendChild(mini)
 })

ImagenPrincipal.src = Animales[0].image
nombre.textContent = Animales[0].name
disti.textContent = Animales[0].distribucion
cara.textContent = Animales[0].caracteristicas


}

MostrarAnimales()
mostrarMini()
