function sendToTelegram() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    alert("Пожалуйста, введите ваше имя");
    return;
  }

  const encodedName = encodeURIComponent(name);
  const botUsername = "mikhailrenata_rsvp_bot"; // Замени на имя своего бота

  const telegramLink = `https://t.me/${botUsername}?start=${encodedName}`;
  window.open(telegramLink, "_blank");
}
