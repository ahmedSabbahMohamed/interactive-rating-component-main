let submit = document.querySelector(".submit"),
rating = document.querySelector('.rating'),
thank = document.querySelector('.Thank'),
rateBtn = document.querySelectorAll(".rate-btn button"),
selectedRate = document.querySelector(".selected-rate");

rateBtn.forEach(btn => {
    btn.addEventListener("click", e => {
        rateBtn.forEach(btn => {
            btn.classList.add("bg-mdGray");
            btn.classList.remove("bg-primary");
        });
        e.currentTarget.classList.remove("bg-mdGray");
        e.currentTarget.classList.add("bg-primary");
        selectedRate.innerHTML = e.currentTarget.value;
    });
});

submit.addEventListener("click", _ => {
        rating.classList.add("hidden");
        thank.classList.remove("hidden");
});