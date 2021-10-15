const navPencegahan = document.querySelector("#nav-pencegahan");
const navLayanan = document.querySelector("#nav-layanan");
const articlePencegahan = document.querySelector("#article-pencegahan");
const articleLayanan = document.querySelector("#article-layanan");

navPencegahan.addEventListener('click', function() {
    articlePencegahan.scrollIntoView(true);

    var scrolledY = window.scrollY;
    if (scrolledY) {
        window.scroll(0, scrolledY - 100);
    }
});

navLayanan.addEventListener('click', function() {
    articleLayanan.scrollIntoView(true);

    var scrolledY = window.scrollY;
    if (scrolledY) {
        window.scroll(0, scrolledY - 100);
    }
});