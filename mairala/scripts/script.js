jQuery(document).ready(function($) {
	// home image-block responsive

	function responsiveIMGinParent(parent, child){
		var arrHeight = [];
		var i = 0;
$(parent).find(child).each(function(){
var that = $(this);
var height = that.outerHeight();
// console.log(height);
arrHeight[i]=height;
i++;
});
var parentResponsiveHeight = Math.min.apply(null, arrHeight);

$(parent).css({
	'overflow': 'hidden',
	'height': parentResponsiveHeight
})
	}

window.onload = function(){

	responsiveIMGinParent('.home-block-images', '.h-b-i__img');
	window.onresize = function() {
	responsiveIMGinParent('.home-block-images', '.h-b-i__img');
	responseSkillsSvg()

	}
	responseSkillsSvg()
}

$('.nav-btn').on('click', function(){
	var menu = $('.header__nav-mob');
	var that = $(this);
	if(that.hasClass('nav-btn-act')){
		that.removeClass('nav-btn-act');
		menu.addClass('nav-hide');
		menu.removeClass('nav-show');
		

	}
	else{
		that.addClass('nav-btn-act');
		menu.addClass('nav-show');
		menu.removeClass('nav-hide');



	}
});

const skillsCont = document.querySelector('.home-block-skills__bottom');

document.addEventListener('scroll', onScrollSkill);

function onScrollSkill() {
  const posTop = skillsCont.getBoundingClientRect().top;
  
  if(posTop + skillsCont.clientHeight <= window.innerHeight && posTop >= 0) {
    // skillsCont.classList.add('visible');
animateSkillsSvg(85);
    document.removeEventListener('scroll', onScrollSkill);
  }
}

// SKILLS
var svgCircle = $('.js-skil');

// response svg skill
function responseSkillsSvg(){
	var mediaS = $(window).width();
	var skills = $('.home-block-skills__bottom').find('.js-skill');
	var parentHeight = $('.js-h-b-s__svg').height();
	// console.log('height: '+parentHeight);
	var marginSvg = 8;

var Rad = parentHeight/2-marginSvg;
var Cx = parentHeight/2;
var Cy = Cx;

skills.attr('cx', Cx);
skills.attr('cy', Cy);
skills.attr('r', Rad);

}

function animateSkillsSvg(percent){
	var mediaS = $(window).width();
	if(mediaS<=1100){
var delayLine = 140;
var delayPercent = 50;
}
else{
var delayLine = 50;
var delayPercent = 46;

}
	var spanPercent = $('.h-b-s__circle__percent');
	var circlesSvg = $('.home-block-skills__bottom').find('.js-skill');
	var rad = circlesSvg.attr('r');
	var Csvg = 2*3.14*rad;
	// console.log('circle length:'+Csvg);
	var num = Csvg*percent/100;
	var svgAttrStrokeStr = circlesSvg.attr('stroke-dasharray');
	// console.log(svgAttrStrokeStr);
	
	var isIE = svgAttrStrokeStr.indexOf(',');
	if(~isIE){
	svhAttrStrokeArr = svgAttrStrokeStr.split(',');
	}
	else{
	svhAttrStrokeArr = svgAttrStrokeStr.split(' ');

	}
	
	function animCircle(i){
		i=i*1;
setTimeout(function(){
circlesSvg.attr('stroke-dasharray', i+' '+svhAttrStrokeArr[1]);

i = i+5;
if(i<=num){
animCircle(i);
}
}, delayLine);

}

function animPercent(j){

setTimeout(function(){
spanPercent.html(j+'%');
j++;
if(j<=percent){
animPercent(j);
}
}, delayPercent);

}

animCircle(svhAttrStrokeArr[0]);
animPercent(20);

}




});