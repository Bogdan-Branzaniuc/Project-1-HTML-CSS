function scrollProgress() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    document.getElementById("scroll-bar").style.height = scrolled + "%";
}

window.onscroll = () => scrollProgress();


function setMenuLinkHeight() {
    const liElements = document.querySelectorAll("#side-scroll-menu li")
    let counter = 0
    liElements.forEach(li => counter++)

    for (let li of liElements) {
        li.style.height = 100 / counter + "%"
    }
}

setMenuLinkHeight()