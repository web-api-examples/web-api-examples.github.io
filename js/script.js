function toggle(className) {
    const classDom = document.querySelector(className)
    classDom.classList.toggle("close")
}

function toggleNav(navName) {
    console.log(toggleNav.first)
    const screenWidth = screen.width
    const disp = leftAside.style.display
    const headerBar = document.querySelector(".header-bars")
    const container = document.querySelector(".container")

    // desktop view
    if(screenWidth > 792) {
        if(container.style.marginLeft === "280px") {
            console.log("if screenWidth:", screenWidth)
            leftAside.style.display = "none";
            container.style.marginLeft = "0px"
            headerBar.style.marginLeft = "0px"
        }
        else {
            if(toggleNav.first === undefined) {
                leftAside.style.display = "none";
                container.style.marginLeft = "0px"
                headerBar.style.marginLeft = "0px"                
            } else {
                console.log("else screenWidth:", screenWidth)
                container.style.marginLeft = "280px"
                headerBar.style.marginLeft = "280px"
                leftAside.style.display = "block";
            }
        }
    } else {
        // mobile view
        if(leftAside.style.display === "none") {
            leftAside.style.display = "block";
        } else {
            if(toggleNav.first === undefined) {
                leftAside.style.display = "block";
            } else
            leftAside.style.display = "none";
        }
    }

    if(toggleNav.first === undefined) {
        toggleNav.first = true;
    }
}

function setStyleProp(domEl, prop, value) {
    domEl.style[prop] = value;
}