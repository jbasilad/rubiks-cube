const navs = [
    "index.html",
    "about.html",
    "patterns.html"
]

function setNavActive(menu){
    const navItems = document.querySelectorAll(".nav-item > a");
    for(let navItem of navItems){
        const href = navItem.getAttribute("href")

        if(href === menu){
            navItem.classList.add("active")
        }else {
            navItem.classList.remove("active")
        }
    }
}

window.addEventListener("load", function(){
    const splittedPath = window.location.href.split("/")
    const path = splittedPath.pop();

    setNavActive(path || "index.html")
})
