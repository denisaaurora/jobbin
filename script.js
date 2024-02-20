const setupDropDowns = () => {
    const dropdownTitles = document.querySelectorAll(".dropdown-title")

    dropdownTitles.forEach((entry, index) => {
        addDropDownClickListener(entry, index)
    })
}

const addDropDownClickListener = (element, index) => {
    const dropdownTexts = document.querySelectorAll(".dropdown-text")
    const carrets = document.querySelectorAll(".carret")

    element.addEventListener("click", () => {
        const text = dropdownTexts[index]
        const carret = carrets[index]

        console.log("element clicked")

        if (window.getComputedStyle(text).display === "none") {
            console.log("show element")
            text.style.display = "block";
            carret.style.transform = "rotate(0deg)"
     
          } else {
            console.log("hide element")
            text.style.display = "none";
            carret.style.transform = "rotate(180deg)"
          }
    })
}

function redirectToIndex() {
    window.location.href = "/"
}

function toggleMobileNav() {
    window.getComputedStyle(document.querySelector(".menu-cta")).display

    if(window.getComputedStyle(document.querySelector(".menu-cta")).display === "none")
        document.querySelector(".menu-cta").style.display = "flex"
    else
        document.querySelector(".menu-cta").style.display = "none"
}

document.addEventListener("DOMContentLoaded", setupDropDowns)