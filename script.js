let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
})

tl.add({
    targets: 'section div', 
    backgroundColor: 'rgb(136, 103, 185)',
    delay: anime.stagger(100)
})


