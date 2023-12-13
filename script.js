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

document.addEventListener("DOMContentLoaded", setupDropDowns)