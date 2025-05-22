$(".abrirMenu").click(function () {
    $(".abrirMenu").toggleClass("change");
    $(".menu").toggleClass("active");
    $("header").toggleClass("active");
    $("body").toggleClass("active");
});

$(".menu li a.menu-item").click(function () {
    $(".abrirMenu").removeClass("change").addClass("close");
    $(".menu").removeClass("active");
    $("header").removeClass("active");
    $("body").removeClass("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-hover");

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            menuItems.forEach((el) => el.classList.remove("clicked")); // remove de todos
            this.classList.add("clicked"); // adiciona no clicado
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    function handleScroll() {
        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // Aplica no carregamento
    handleScroll();

    // Aplica ao rolar
    window.addEventListener("scroll", handleScroll);

    // Aplica ao clicar em links do menu
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function () {
            header.classList.add("scrolled");
        });
    });
});