function rollDiceFun(){

    const numOfDices = document.getElementById("numOfDices").value;
    const diceText =document.getElementById("diceText");
    const diceImg = document.getElementById("diceImg");

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDices; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
       images.push(`<img src="${value}.png" alt="Dice ${value}" />`)
    }
    diceText.textContent =`Dice : ${values.join("-")}`;
    diceImg.innerHTML = images.join("");

}