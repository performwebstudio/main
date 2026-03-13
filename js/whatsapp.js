function openWhatsApp(message) {
  const part1 = "91988";
  const part2 = "3230252";
  const number = part1 + part2;

  const url =
    "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

/* Footer WhatsApp link */
document.getElementById("whatsappLink").addEventListener("click", function (e) {
  e.preventDefault();
  openWhatsApp("Hi I want to build a website");
});

/* Floating WhatsApp button */
document
  .getElementById("whatsappFloat")
  .addEventListener("click", function (e) {
    e.preventDefault();
    openWhatsApp("Hi I saw your website and want a website for my business");
  });
