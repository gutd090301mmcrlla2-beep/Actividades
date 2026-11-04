const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    alert("Que ondaaa!");
});


const boxElement = document.getElementById("boxElement");

boxElement.addEventListener("mouseover", function() {
    console.log("El cursor está sobre el elemento");
});

boxElement.addEventListener("mouseout", function() {
    console.log("El cursor ha salido del elemento");
});


document.addEventListener("keydown", function(event) {
    console.log("Código de tecla pulsada: " + event.code);
    console.log("Objeto de evento completo:");
    console.log(event);

    if (event.key.toLowerCase() === "f") {
        console.log("¡Se ha presionado la tecla F!");
    }
});


const usernameInput = document.getElementById("usernameInput");
const greetingHeading = document.getElementById("greetingHeading");

usernameInput.addEventListener("input", function() {
    greetingHeading.textContent = usernameInput.value;
});


const singleButton = document.getElementById("singleButton");

singleButton.addEventListener("click", function() {
    console.log("Este mensaje y acción solo ocurrirán una sola vez.");
}, { once: true });