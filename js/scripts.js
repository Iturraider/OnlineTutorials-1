var pos = document.documentElement;
pos.addEventListener("touchmove", e => {
    pos.style.setProperty('--x', e.clientX + "px");
    pos.style.setProperty('--y', e.clientY + "px");
})