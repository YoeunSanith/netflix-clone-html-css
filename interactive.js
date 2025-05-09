// Wait for the DOM to load
//trending news
document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const carousel = document.querySelector(".trending-carousel");

    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: 200, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -200, behavior: "smooth" });
    });
});
// faq question
document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq__question");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const answer = item.querySelector(".faq__answer");
            const plus = question.querySelector(".faq__plus");

            const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

            // Close all other open answers
            document.querySelectorAll(".faq__answer").forEach((el) => {
                el.style.maxHeight = null;
            });

            // Reset all "+" icons
            document.querySelectorAll(".faq__plus").forEach((el) => {
                el.textContent = "+";
            });

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                plus.textContent = "×";
            }
        });
    });
});
