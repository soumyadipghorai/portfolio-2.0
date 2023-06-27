// prealoader --> body 
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

// modify gradient --> contact section 
window.addEventListener('scroll', function(){
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
    }
})

// image duplicate --> prev experience 
function duplicateExperience() {
    // for logos slider 
    let logos = document.querySelector('.logos-slide').cloneNode(true);
    document.querySelector('.logos').appendChild(logos);
}

// drop down icon change --> accordion
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

// class scroller class --> books 
function addScrollerClass(){
    
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width <= 772){
        var leftScroll = document.querySelector('.scrolling-column').getElementsByClassName('image-container');
        for (let i = 0; i < leftScroll.length; i++){
            leftScroll[i].classList.add('scroll-left');
        }

        var booksColumn = document.querySelector('.books-columns').getElementsByClassName('image-container');
        for (let i = 0; i < booksColumn.length; i++){
            booksColumn[i].classList.add('scroll-right');
        }
    }

    return false;
}

// books scroller --> books section
window.addEventListener('scroll', function() {

    var section = document.querySelector('.books-section');
    var scrollingColumns = document.querySelector('.scrolling-columns');
    var sectionOffsetTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var windowScrollTop = window.pageYOffset;
    var windowHeight = window.innerHeight;

    addScrollerClass(); 

    var scrollLeft = document.getElementsByClassName('scroll-left');
    var scrollRight = document.getElementsByClassName('scroll-right');

    var scrollTriggerOffset = 100; // Adjust this value as needed

    if (windowScrollTop > sectionOffsetTop - windowHeight + scrollTriggerOffset && windowScrollTop < sectionOffsetTop + sectionHeight) {
        if (scrollLeft.length != 0){
            for (let i = 0; i < scrollLeft.length; i++){
                scrollLeft[i].style.transform = 'translateX(-' + (windowScrollTop - sectionOffsetTop + scrollTriggerOffset) / 2 + 'px)';
            }

            for (let i = 0; i < scrollRight.length; i++){
                scrollRight[i].style.transform = 'translateX(' + (windowScrollTop - sectionOffsetTop + scrollTriggerOffset) / 2 + 'px)';
            }

        } else{
            scrollingColumns.style.overflow = 'visible';
            scrollingColumns.style.transform = 'translateY(-' + (windowScrollTop - sectionOffsetTop + scrollTriggerOffset) / 2 + 'px)';
        }
    } else {
        scrollingColumns.style.transform = 'translateY(-1)';
    }
});

// auto increment hero-section --> hero section
const counters = document.querySelectorAll('.counter');
const speed = 1000;

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

// about section hover effect 
const images = document.querySelectorAll('.image-box');

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        image.classList.add('active');
    });
});

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        image.classList.add('active');
    });
});

images[images.length - 1].addEventListener('mouseout', () => {
    images.forEach((image) => {
        image.classList.remove('active');
    });
    images[0].classList.add('active');
});

let activeImage = images[0];

images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        image.classList.add('active');
        activeImage = image;
    });
});

images[images.length - 1].addEventListener('mouseout', () => {
    images.forEach((image) => {
        image.classList.remove('active');
    });
    activeImage.classList.add('active');
});

// circular text 
const text = document.getElementById('circle-text'); 
const rotate = new CircleType(text).radius(50); 

window.addEventListener('scroll', function() {
    text.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
})

// testimonial scroller  
const productContainers = [...document.querySelectorAll('.testimonial-card-container')];
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
const leftButton = [...document.querySelectorAll('.left-button')];
const rightButton = [...document.querySelectorAll('.right-button')];

productContainers.forEach((item, i) => {
    var card = item.getElementsByClassName('testimonial-slider-card'); 
    console.log(card[0]);
    let containerDimensions = card[0].getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    leftButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth+40;
    })

    rightButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth+40;
    })
})