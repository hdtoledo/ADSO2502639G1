document.addEventListener("DOMContentLoaded", function() {
    const submenuParents = document.querySelectorAll(".has-submenu");
    
    submenuParents.forEach(parent => {
        parent.addEventListener("mouseenter", function() {
            const submenu = this.querySelector(".submenu");
            submenu.style.display = "block";
        });

        parent.addEventListener("mouseleave", function() {
            const submenu = this.querySelector(".submenu");
            submenu.style.display = "none";
        });
    });
});
