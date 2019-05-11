
window.addEventListener('load', () => {
    animateIcon();
});

let start;

function animateIcon() {
    let logo = document.getElementById("logo");

    logo.addEventListener('mouseenter', e => {
        requestAnimationFrame(animate);
    })

    logo.addEventListener('mouseleave', e => {
        start = null;
        cancelAnimationFrame(animate);
    })
}



let animate = (timestamp) => {
 
    if (!start) start = timestamp;
    var progress = timestamp - start;
    logo.style.transform = 'rotate(' + progress + 'deg)';

    requestAnimationFrame(animate);
    
}


