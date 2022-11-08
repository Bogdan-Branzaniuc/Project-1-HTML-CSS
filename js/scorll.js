function scrollProgress() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    document.getElementById("scroll-bar").style.height = scrolled + "%";
}

window.onscroll = () => scrollProgress();


function setMenuLinkHeight() {
    const liElements = document.querySelectorAll("#side-scroll-menu li")

    for (let li of liElements) {
        let sectionId = li.firstChild.href.split("#")[1]
        let sectionOffsetTop = document.getElementById(`${sectionId}`).offsetTop
        let liHeight = Math.floor((window.innerHeight / sectionOffsetTop) * 100)

        console.log(Math.floor((window.innerHeight / sectionOffsetTop) * 100))

        if (liHeight == Infinity) {
            li.style.height = 0 + "%"
            console.log(li.style.height)
        } else {
            li.style.height = liHeight + "%"
            console.log(li.style.height)
        }
    }
}

setMenuLinkHeight()