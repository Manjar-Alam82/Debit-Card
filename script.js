const card = document.getElementById("card");

/* CARD DATA – CHANGE HERE ONLY */
const cardData = {
  number: "4312 8765 9988 2345",
  name: "MANJAR ALAM",
  expiry: "12/30",
  cvv: "456",
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
