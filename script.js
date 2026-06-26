// NovaBuild AI

document.addEventListener("DOMContentLoaded", () => {

  // زر البدء
  const startBtn = document.getElementById("startBtn");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      alert("🚀 مرحبًا بك في NovaBuild AI!");
    });
  }

  // التمرير السلس للروابط
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // تأثير ظهور العناصر
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

});
