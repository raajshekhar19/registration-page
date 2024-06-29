let timeLine = gsap.timeline();

timeLine.from("#heading",{
    y:-600,
    duration:.8
})

timeLine.from(".namediv",{
    x:-1000,
    duration:.2
})
timeLine.from(".emaildiv",{
    x:1000,
    duration:.2
})
timeLine.from(".phonediv",{
    x:-1000,
    duration:.2
})
timeLine.from(".dietdiv",{
    x:1000,
    duration:.2
})

timeLine.from(".commentdiv",{
    y:1000,
    duration:.2
})
timeLine.from(".inbuiltbutton",{
    opacity:0,
    duration:2
})
