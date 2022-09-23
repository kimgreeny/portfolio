/*
	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
*/

const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
	"안녕하세요",
	"좀 하는 디자이너",
	"김소연",
	"입니다",
	"저의 작업물은 ",
	"하단에 있습니다",
	"scroll now!"
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}



// ------------------------------------------------


// Start the animation.
animate();

$(document).ready(function(){
			// $fn.scrollSpeed(step, speed, easing);
			jQuery.scrollSpeed(200, 800);
});

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {
    
    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };
    
    jQuery.easing.default = function (x,t,b,c,d) {
    
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    
})(jQuery);


// 6번째 섹션

const swiper = new Swiper('div.wrap', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: {
    el: 'div.swiper-pagination',
    type: 'fraction'
    },

    // Navigation arrows
    navigation: {
    nextEl: 'div.swiper-button-next',
    prevEl: 'div.swiper-button-prev',
    },
    spaceBetween: 50,
    slidesPerView: 'auto',
    grabCursor: true,
    centeredSlides: true,
    speed: 1000,

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },

    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
});

const btoStart = document.querySelector('ul li.btoStart');
console.log(btoStart);
const btoStop = document.querySelector('ul li.btoStop');
console.log(btoStop);
const videoStop = document.querySelectorAll('video');
console.log(videoStop);

btoStart.addEventListener('click',function(){
    swiper.autoplay.start();

    for (let el of videoStop) {
        el.pause();
    }

    // videoStop.forEach(index => {
    //     index.pause();
    // });

    // for ( let i=0; i<=videoStop.length; i++) {
    //     videoStop[i].pause();
    // }

})
btoStop.addEventListener('click',function(){
    swiper.autoplay.stop();
})

// btoStart.addEventListener('click',function(){
//     let swiperAuto = swiper.autoplay.start();
//     if (swiperAuto == true) {
//         swiper.autoplay.start();
//         for (let el of videoStop) {
//             el.pause();
//         }
//     } else {
//         swiper.autoplay.stop();
//     }
// })

videoStop.forEach(index => {
    index.addEventListener('mouseenter',function(){
        index.setAttribute('controls','controls');
    })
    index.addEventListener('mouseleave',function(){
        index.removeAttribute('controls','controls');
    })
});