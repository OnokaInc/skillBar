
var skillLevel = document.querySelectorAll('.skill-level');
function fun(){
    for(var i = 0; i < skillLevel.length; i++){
        skillLevel[i].style.width = skillLevel[i].dataset.percent;     
    }
};
setTimeout(fun,0);

