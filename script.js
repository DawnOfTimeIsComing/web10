const gifs = document.querySelectorAll(".gif");

gifs.forEach((gif) => {
    const originalSrc = gif.src;
    gif.addEventListener("mouseenter", () => {
        gif.src = gif.dataset.src;
    });

    gif.addEventListener("mouseleave", () => {
        gif.src = originalSrc;
    });
});