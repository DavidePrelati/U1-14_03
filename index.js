const maxSize = 76

const tombola = document.querySelector(".tombola");


const generateCell = () => {


    for (let i = 0; i < maxSize; i++) {

        const numberCellDiv = document.createElement("div");
        numberCellDiv.className = "number";

        const numberCellH3 = document.createElement("h3");
        numberCellH3.innerText = i + 1;
        numberCellDiv.appendChild(numberCellH3)
        tombola.appendChild(numberCellDiv)
    }
}

const generateButton = document.getElementById("generate-button")
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

generateButton.addEventListener("click", () => {
    const randomNumber = getRandomNumber(1, maxSize);
    console.log(`Numero casuale generato: ${randomNumber}`);
});
window.onload = () => {
    generateCell();
};