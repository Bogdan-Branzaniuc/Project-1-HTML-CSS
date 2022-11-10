let screenOrientation

window.addEventListener("load", () => {
    screenOrientation = screen.orientation.type
    console.log(screenOrientation)
});

screen.orientation.addEventListener("change", () => {
    screenOrientation = screen.orientation.type
    console.log(screenOrientation)
});

let supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function () {
    window.location.reload()
}, false);

function scrollProgress() {
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;

    if (screenOrientation === "portrait-primary") {
        document.getElementById("scroll-bar").style.height = scrolled + "%";
    } else {
        document.getElementById("scroll-bar").style.width = scrolled + "%";
    }
}

window.onscroll = () => scrollProgress();


function setMenuLinkHeight() {
    const liElements = document.querySelectorAll("#side-scroll-menu li")
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    console.log(documentHeight)
    const offsetScrollIntoView = 150


    for (let li of liElements) {
        const sectionId = li.firstChild.hash
        const sectionHeight = document.querySelector(`${sectionId}`).offsetHeight
        let liSize = Math.floor(((sectionHeight + offsetScrollIntoView) / documentHeight) * 100)

        if (liSize == Infinity) {
            li.style.height = 0
        } else {
            if (screenOrientation === "portrait-primary") {
                li.style.height = liSize + "%"
            } else {
                li.style.width = liSize + "%"
            }
        }
    }
}

setMenuLinkHeight()