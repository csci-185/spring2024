function elementInView(el, dividend = 1) {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
}

function elementOutofView(el) {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
    );
}

function handleScrollAnimation() {
    // 1. get all of the elements with the class of ".scroll-element" and store them in a list:
    const scrollElements = document.querySelectorAll(".scroll-element");

    // 2. loop through each element one by one:
    for (let i = 0; i < scrollElements.length; i++) {
        const el = scrollElements[i];

        // if the element is in view, add the scrolled class. Otherwise remove it:
        if (elementInView(el, 1.25)) {
            el.classList.add("scrolled");
        } else if (elementOutofView(el)) {
            el.classList.remove("scrolled");
        }
    }
}

// each time the user scrolls, call the "handleScrollAnimation" function
window.addEventListener("scroll", handleScrollAnimation);
