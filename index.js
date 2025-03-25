document.querySelectorAll('.category h3').forEach(header => {
    header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector('span');

        if (content.style.display === "block") {
            content.style.display = "none";
            icon.textContent = "+";
        } else {
            content.style.display = "block";
            icon.textContent = "-";
        }
    });
});

// Set dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();