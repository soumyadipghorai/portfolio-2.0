// prealoader --> body 
var loader = document.getElementById('preloader'); 
window.addEventListener("load", function(){
    loader.style.display = "none";
})

// add breakpoints --> hero section 
window.addEventListener('load', function(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const lineBreak = document.getElementById('linebreak'); 
    const space = '&nbsp'; 
    const brk = '<br>';
    // console.log(width);

    if (width > 1310){
        lineBreak.innerHTML = space;
    }
    if (width > 770 && width <= 1310){
        lineBreak.innerHTML = brk;
    }
    if (width > 630 && width <= 770){
        lineBreak.innerHTML = space;
    }
    if (width <= 630){
        lineBreak.innerHTML = brk;
    }
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

    var fullTimeSection = document.getElementById('fullTimeSection');
    fullTimeSection.style = "";

    if (width <= 770){
        fullTimeSection.style.background = "linear-gradient(0deg, var(--primaryColor), #e42d3315), url('images/contact/pattern-three.png') no-repeat";
        fullTimeSection.style.backgroundSize = "cover";
        fullTimeSection.style.backgroundPosition = "center";
    }
    
    else{
        fullTimeSection.style.background = "linear-gradient(270deg, var(--primaryColor), #e42d3315), url('images/contact/pattern-three.png') no-repeat";
        fullTimeSection.style.backgroundSize = "cover";
        fullTimeSection.style.backgroundPosition = "center";
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
        }
        else{
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
    // console.log(card[0]);
    let containerDimensions = card[0].getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    leftButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth+40;
    })

    rightButton[i].addEventListener('click', () => {
        item.scrollLeft += (containerWidth+40)*0.99;
    })
})

// back to top button 
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// hover content update --> about section
function checkhover(){
    const subtitle = [
        "Farewell Backstage hustlers", 
        "Asutosh Soccer League ‘20", 
        "Phoktey-dara Trek", 
        "High School reunion", 
        "back in my college days ‘19"
    ]; 

    const paraText = [
        'During our farewell ceremony for seniors, I took charge backstage. While not performing, managing the event became my role. It felt incredible to contribute to their special day.',
        "In our college's soccer league, I proudly played my heart out. We secured victory in that match, and I got the chance to assist a goal—a cherished memory on the field!", 
        'Venturing through the Indo-Nepal border, I unexpectedly encountered a friendly group of Nepali army officers. We shared stories and laughter, making that trek an unforgettable and heartwarming experience.', 
        'After years apart pursuing higher studies in different cities, a magical evening reunited me with my school friends. Laughter, nostalgia, and cherished bonds made it an unforgettable reunion.', 
        'During my college days, I took the initiative to create our departmental t-shirt. Armed with determination and a design flair, I embarked on this solo project, and the result was truly rewarding!'
    ];

    const aboutSection = document.querySelectorAll('.about-section .image-box'); 
    const story = document.querySelector('.about-section .about-section-description-text .about-section-story');
    const subtitleText = document.querySelector('.about-section .about-section-description-text .section-subtitle');

    for (let i = 0; i < aboutSection.length; i++){
        if (aboutSection[i].matches(":hover")){
            subtitleText.innerHTML = subtitle[i];
            story.innerHTML = paraText[i];
        }
    }
}