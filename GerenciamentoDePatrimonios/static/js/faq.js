function toggleAccordion(element) {
    const desc = element.nextElementSibling;
    const icon = element.querySelector('.icon');

    if (desc.style.maxHeight) {
        desc.style.maxHeight = null;
        desc.style.opacity = 0;
        icon.textContent = "+";
    } else {
        desc.style.maxHeight = desc.scrollHeight + "px";
        desc.style.opacity = 1;
        icon.textContent = "-";
    }
}