function scrollProgress() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    document.getElementById("scroll-bar").style.height = scrolled + "%";
}

window.onscroll = () => scrollProgress();


function setMenuLinkHeight() {
    const liElements = document.querySelectorAll("#side-scroll-menu li")
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    console.log(documentHeight)


    for (let li of liElements) {
        const sectionId = li.firstChild.hash
        const sectionHeight = document.querySelector(`${sectionId}`).offsetHeight
        let liHeight = Math.ceil(((sectionHeight + 150) / documentHeight) * 100)

        if (liHeight == Infinity) {
            li.style.height = 0
        } else {
            li.style.height = liHeight + "%"
        }
        console.log(li.style.height)
    }
}

setMenuLinkHeight()