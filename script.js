document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        img.addEventListener("load", () => img.classList.add("loaded"));
    });
});