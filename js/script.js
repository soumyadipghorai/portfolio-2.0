// prealoader 
var loader = document.getElementById('preloader'); 
window.addEventListener("load", function(){
    loader.style.display = "none";
})

// modify border --> areas of interest 
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

window.addEventListener('scroll', function(){
    // var flag = true; 
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    

    if (width <= 770){
        var fullTimeSection = document.getElementById('fullTimeHeroSection');

        fullTimeSection.style = "";
        fullTimeSection.style.background = "linear-gradient(0deg, var(--primaryColor), rgba(0, 0, 0, 0)), url('images/contact/contact-section-image.jpg') no-repeat";
        fullTimeSection.style.backgroundPosition = "center";
        fullTimeSection.style.backgroundSize = "cover";
        fullTimeSection.style.backgroundRepeat = "no-repeat";
    }

    else{
        var fullTimeSection = document.getElementById('fullTimeHeroSection');

        fullTimeSection.style = "";
        fullTimeSection.style.background = "linear-gradient(270deg, var(--primaryColor), rgba(0, 0, 0, 0)), url('images/contact/contact-section-image.jpg') no-repeat";
        fullTimeSection.style.backgroundPosition = "center";
        fullTimeSection.style.backgroundSize = "cover";
        fullTimeSection.style.backgroundRepeat = "no-repeat";
        // flag = true;
    }
})

// image duplicate --> prev experience 
function duplicateExperience() {
    // for logos slider 
    let logos = document.querySelector('.logos-slide').cloneNode(true);
    document.querySelector('.logos').appendChild(logos);
}

// drop down icon change 
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

// books scroller 
// window.addEventListener('scroll', function() {
//     var scrollingColumns = document.querySelector('.scrolling-columns');
//     var section = document.querySelector('.books-section');

//     var sectionOffsetTop = section.offsetTop;
//     var sectionHeight = section.offsetHeight;
//     var windowScrollTop = window.pageYOffset;
//     // console.log(windowScrollTop, sectionOffsetTop);
//     var windowHeight = window.innerHeight;

//     var scrollTriggerOffset = 0; // Adjust this value as needed

//     if (windowScrollTop > sectionOffsetTop - windowHeight + scrollTriggerOffset && windowScrollTop < sectionOffsetTop + sectionHeight) {
//         scrollingColumns.style.transform = 'translateY(-' + (windowScrollTop - sectionOffsetTop + scrollTriggerOffset) / 2 + 'px)';
//     } else {
//         scrollingColumns.style.transform = 'translateY(0)';
//     }
// });

// auto increment hero-section 
const counters = document.querySelectorAll('.counter');
const speed = 500;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('data-target');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});