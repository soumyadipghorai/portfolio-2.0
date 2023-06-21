function runAll() {
    modifyBorder_experience();
    duplicateExperience();
    // changeDropIcon();
}

function modifyBorder_experience() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // console.log(width); 

    if (width < 995){
        var textSection = document.getElementsByClassName('text-wrapper');
        for (let i = 0; i < textSection.length; i++){
            textSection[i].classList.remove('border-right');
            textSection[i].classList.add('border-bottom'); 
            textSection[i].classList.add('pb-3'); 
        } 
    }
}

function duplicateExperience() {
    // for logos slider 
    let logos = document.querySelector('.logos-slide').cloneNode(true);
    document.querySelector('.logos').appendChild(logos);
}

function changeDropIcon() {
    var accordionItems = document.getElementsByClassName('accordion-list-item');
    for (let i = 0; i < accordionItems.length; i++){
        if (accordionItems[i].getElementsByClassName('accordion-drop-down-radio-button')[0].checked){
            accordionItems[i].getElementsByClassName("accordionDropDown")[0].src = "images/iconpack/accordion-arrow-down.svg";
        }
        else {
            accordionItems[i].getElementsByClassName("accordionDropDown")[0].src = "images/iconpack/accordion-arrow-right.svg";
        }
    }
}

window.addEventListener('scroll', function() {
    var scrollingColumns = document.querySelector('.scrolling-columns');
    var section = document.querySelector('.books-section');

    var sectionOffsetTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var windowScrollTop = window.pageYOffset;
    // console.log(windowScrollTop, sectionOffsetTop);
    var windowHeight = window.innerHeight;

    var scrollTriggerOffset = 0; // Adjust this value as needed

    if (windowScrollTop > sectionOffsetTop - windowHeight + scrollTriggerOffset && windowScrollTop < sectionOffsetTop + sectionHeight) {
        scrollingColumns.style.transform = 'translateY(-' + (windowScrollTop - sectionOffsetTop + scrollTriggerOffset) / 2 + 'px)';
    } else {
        scrollingColumns.style.transform = 'translateY(0)';
    }
});