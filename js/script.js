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
    const header = document.querySelector(".header");

    // Pega os itens do menu e mapeia o href para o elemento da section
    const sectionMap = [];
    menuItems.forEach(item => {
        const href = item.getAttribute("href");
        const section = document.querySelector(href);
        if (section) {
            sectionMap.push({
                id: href,
                element: section,
                menuItem: item
            });
        }
    });

    function handleScroll() {
        const scrollY = window.scrollY;
        const offset = 150; // ajuste se necessário dependendo do tamanho do seu header

        // Atualiza classe 'scrolled' no header
        if (scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Verifica qual seção está visível
        let current = null;
        sectionMap.forEach(({ id, element }) => {
            const top = element.offsetTop - offset;
            const bottom = top + element.offsetHeight;
            if (scrollY >= top && scrollY < bottom) {
                current = id;
            }
        });

        // Atualiza a classe 'clicked' no menu
        menuItems.forEach(item => {
            if (item.getAttribute("href") === current) {
                item.classList.add("clicked");
            } else {
                item.classList.remove("clicked");
            }
        });
    }

    // Inicia e escuta scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});
