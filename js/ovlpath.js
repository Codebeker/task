const ovPath = {
    curviness: 1.25,
    autoRotate:true,
    values:[
        
        {x:105,y:74},
        {x:140,y:103},
        {x:170,y:140},
        {x:203,y:180},
        {x:260,y:216},
        {x:210,y:570},
        {x:65,y:730},
        {x:-110,y:820},


    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.ovl',1,{
        bezier : ovPath,
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '#servies',
    duration:1650,
    triggerHook:0.5
})
.setTween(tween)
//.addIndicators()
.addTo(controller);