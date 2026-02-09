const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const question = faq.querySelector(".question");
  const icon = faq.querySelector(".icon");

  question.addEventListener("click", () => {
    const isActive = faq.classList.contains("active");

    faqs.forEach(function (item) {
      item.classList.remove("active");
      item.querySelector(".icon").textContent = "+";
    });

    if (!isActive) {
      faq.classList.add("active");
      icon.textContent = "−";
    }
  });
});
