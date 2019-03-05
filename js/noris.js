
/*
See https://www.greensock.com/splittext/ for details.
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/

var tl = new TimelineLite,
    mySplitText = new SplitText("#quote", {type:"words,chars"}),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

TweenLite.set("#quote", {perspective:400});

tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");



document.getElementById("animate");
