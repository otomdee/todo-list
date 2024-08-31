import burgerImg from "./burger.jpg";
import mealImg from "./meal.jpg";
//populate menu page fxn


export function populateMenu() {
    //card 1
    const contentDiv = document.querySelector("#content");
    const div1 = document.createElement("div");
    const burgerImage = document.createElement("img");
    const cardtext1 = document.createElement("div");
    const span1card1 = document.createElement("span");
    const span2card1 = document.createElement("span");
    const button1 = document.createElement("button");

    span1card1.innerHTML = "Try our special";
    span2card1.innerHTML = 'The Cheese Burger is a favourite among our customers. The reason? We use original and fresh American cheese along with our special sauce, which gives the burger a more flavourful and traditional taste.'

    div1.id = "div1";
    span2card1.classList.add("cardtextSmall");
    span1card1.classList.add("cardtextLarge");
    cardtext1.classList.add("cardtext");
    burgerImage.src = burgerImg;
    burgerImage.alt = "burger image";
    button1.innerHTML = "ORDER";

    cardtext1.append(span1card1);
    cardtext1.append(span2card1);
    cardtext1.append(button1);
    div1.append(burgerImage);
    div1.append(cardtext1);

    contentDiv.append(div1);
    
    //card2
    const div2 = document.createElement("div");
    const mealImage = document.createElement("img");
    const cardtext2 = document.createElement("div");
    const span1card2 = document.createElement("span");
    const span2card2 = document.createElement("span");
    const button2 = document.createElement("button");

    span1card2.innerHTML = "Our menu";
    span2card2.innerHTML = "We pride ourselves on offering a diverse and mouth-watering menu that caters to every taste. From our signature burgers, to our perfectly grilled steaks and succulent seafood dishes. we serve what vou love. We also offer fresh and vibrant salads. while our vegetarian and vegan options ensure that evervone can find something to love.";

    div2.id = "div2";
    span1card2.classList.add("cardtextLarge");
    span2card2.classList.add("cardtextSmall");
    cardtext2.classList.add("cardtext2");
    mealImage.src = mealImg;
    mealImage.alt = "meal image";
    button2.innerHTML = "See Full Menu";

    cardtext2.append(span1card2);
    cardtext2.append(span2card2);
    cardtext2.append(button2);
    div2.append(mealImage);
    div2.append(cardtext2);

    contentDiv.append(div2);
}