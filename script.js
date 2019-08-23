let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
})

tl.add({
    targets: '.intro div', 
    backgroundColor: 'rgb(136, 103, 185)',
    delay: anime.stagger(100)
})


anime({
    targets:'.section-hero ',
    delay:1800,
    easing: 'linear',
    opacity: [0,1],
})


// anime({
//     targets: '.spin-wheel',
//     rotate: '60deg',
//     loop: true,
//     duration: '0.6',
//     direction: 'reverse'
// })

let iceCreamFlavours = [{
        flavour: "Vanilla",
        color: "#ffeed0"
    }, {
        flavour: 'Strawberry',
        color: "#f195a5"
    },
    {
        flavour: 'Pistacchio',
        color: "#c1f1b9"
    },
    {
        flavour: 'Chocolate',
        color: "#E5ACAA"
    },
    {
        flavour: 'Banana',
        color: "#edd164"
    },
    {
        flavour: 'Mango',
        color: "#f0b14c"
    },
    {
        flavour: 'Coffee',
        color: "#926f55"
    }
];

let wheel = document.querySelector('.spin-wheel')
let scoop = document.getElementsByClassName('st2');
let randomNumber;
let randomIceCreamFlavour;

let randomTime;

wheel.addEventListener('click', () => {

    calculations()
    setTimeout(printFlavour, randomTime / 1.8)
    changeIceCreamColor()
    animate()
})


function changeIceCreamColor() {
    for (var i = 0; i < scoop.length; i++) {
        scoop[i].style.fill = iceCreamFlavours[randomNumber].color;
    }
}

function printFlavour() {
    document.getElementById('icecream-flavour').innerHTML = randomIceCreamFlavour + "!";
}

function calculations() {
    randomNumber = Math.floor(Math.random() * Math.floor(iceCreamFlavours.length));
    randomIceCreamFlavour = iceCreamFlavours[randomNumber].flavour
    randomTime = Math.floor(Math.random() * Math.floor(2500))

}

function animate() {
    anime({
        targets: '.spin-wheel',
        easing: 'easeOutCirc',
        rotate: randomTime,
    })
}

// anime({
//     targets: '#right-eye', 
//     scaleY: 0.2,
//     loop:true, 
//     direction: 'alternate', 
//     easing: "easeInOutSine",
//     duration:'1000',
//     delay: 3000,
// })

// anime({
//     targets: '.ice-cream-wrapper',
//     easing: 'easeInOutSine',
//     translateY: '20',
//     loop: true,
//     direction: "alternate",
//     duration: '2000'
// })


let scoops = anime({
    targets: 'img',
    translateY: [{
            value: 400,
            duration: 1000
        },
        {
            value: 0,
            duration: 2000
        }
    ],
    loop: true,
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
    },
    delay: function (el, i) {
        return i * 1000
    },
    autoplay: true

});


var textWrapper = document.querySelector('.moving-letters-main .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x81]|\w)/g, "<span class='letters'>$&</span>");

function textAnimation(){
    anime.timeline({loop: false})
    .add({
    targets: '.moving-letters-main .letters',
    scale: [0.3,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: function(el, i) {
    return 70 * (i+1)
    }
    
    }).add({
    targets: '.moving-letters-main .line',
    scaleX: [0,1],
    loop: 'false',
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    /*offset: '-=875',*/
    delay: 100,
    })
    iconAnimation();
    
}

function iconAnimation(){
    anime.timeline({})
    .add({
    targets: '.icon-wrapper',
    scale: [0.3,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    delay: 1500,
    
    })
}


function checkForFooter() {
    var footer1 = document.querySelectorAll(".footers");
    footer1.forEach(function(footers) {
        if (isElementInViewport(footers)) {
            textAnimation();
      } 
    });
  }
  
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForFooter, false); 
    addEventListener('load', checkForFooter, false);
    addEventListener('scroll', checkForFooter, false);
  }