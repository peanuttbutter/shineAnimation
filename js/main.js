const animatedLi = document.querySelectorAll('li');
let delay = 0.2;
for(element of animatedLi){
    element.style.animationDelay = `${delay}s`;
    delay += 0.2;
}