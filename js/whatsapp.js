document.addEventListener("DOMContentLoaded", function () {
  function openWhatsApp(message) {
    const part1 = "91988";
    const part2 = "3230252";
    const number = part1 + part2;

    const url =
      "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  }

  /* Floating WhatsApp button */
  const whatsappFloat = document.getElementById("whatsappFloat");

  if (whatsappFloat) {
    whatsappFloat.addEventListener("click", function (e) {
      e.preventDefault();
      openWhatsApp("Hi I saw your website and want a website for my business");
    });
  }

  /* Footer WhatsApp link */
  const whatsappLink = document.getElementById("whatsappLink");

  if (whatsappLink) {
    whatsappLink.addEventListener("click", function (e) {
      e.preventDefault();
      openWhatsApp("Hi I want to build a website");
    });
  }
});
