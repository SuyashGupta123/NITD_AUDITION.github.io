const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Bizzcup";
            }, 0);
            setTimeout(() => {
                text.textContent = "Tech-Fest";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Hult Prize";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);