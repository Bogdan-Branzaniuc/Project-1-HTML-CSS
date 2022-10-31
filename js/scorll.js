function scrollProgress() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    document.getElementById("scroll-bar").style.height = scrolled + "%";
}

window.onscroll = () => scrollProgress();