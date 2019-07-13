const parallax = document.querySelector('.parallax')
const layers = parallax.children

function moveLayersDependOnScroll(mScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const offset = mScroll * divider / 10;

        layer.style.transform = `translateY(-${offset}%)`;
    })
}

window.addEventListener('scroll', e => {
    const mScroll = window.pageYOffset;
    moveLayersDependOnScroll(mScroll)
})