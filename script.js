const card = document.getElementById("card");

/* CARD DATA – CHANGE HERE ONLY */
const cardData = {
  number: "4312 8765 7788 2345",
  name: "MD SAHIL",
  expiry: "12/30",
  cvv: "496",
};

document.getElementById("cardNumber").innerHTML =
  cardData.number.replace(/ /g, "&nbsp;");
document.getElementById("cardName").innerText = cardData.name;
document.getElementById("cardExpiry").innerText = cardData.expiry;
document.getElementById("cardCvv").innerText = cardData.cvv;

/* ONE CLICK FLIP */
card.addEventListener("click", () => {
  card.classList.toggle("flip");
});
