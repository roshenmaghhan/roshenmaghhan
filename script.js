$(document).ready(function(){
	$("#coded").delay(500).fadeIn();
	$("#coded").delay(1500).fadeOut();
	$("#background-wrap").delay(2500).animate({"backgroundColor" : "#FFE694"});	
	$(".containers").delay(3000).fadeIn();
	$("#about_me").delay(1000).animate({"left" : "4vw"});
	$("#skills").delay(1000).animate({"left" : "28vw"});
	$("#achievements").delay(1000).animate({"left" : "52vw"});
	$("#projects").delay(1000).animate({"left" : "76vw"});
	$(".wrap").delay(5500).fadeIn();
	$(".container_txt").delay(6000).fadeIn();
});

var tabs = ["tab1","tab2","tab3","tab4","tab5"];

var socials = ["LINKEDIN", "E-MAIL", "INSTAGRAM", "TWITTER", "SNAPCHAT"];
var skillSet = ["WEB DEV", "SOFTWARE DEV", "HARDWARE DEV", "ANDROID DEV", "VR/AR DEV"];
var winnings = ["ORATORY", "MENTORING", "HACKATHONS", "PROGRAMMING", "PIANO"];
var projectList = ["HARDWARE PROJECTS", "SOFTWARE PROJECTS", "VR/AR PROJECTS", "APP PROJECTS", "WEB PROJECTS"];

var text = ["My Name is Roshen Maghhan. I'm a 22 year old self taught programmer, who began coding at the age of 14. I studied under a full-scholarship in Taylor's University, and in July 2020, I graduated with a first class honours in Computer Science, with a CGPA of 3.8. I code and occasionally hack for fun, as a hobby. I have experience in web development, Android development, Augmented & virtual reality, software and hardware development, and many more. Click <a href='https://orangkata.my/tokoh/lelaki-genius-dari-malaysia-ni-dah-macam-iron-man-cipta-macam-macam/'>here</a>, to read an article about my inventions. <br><br>Throughout January 2020, to June 2020, I interned as an application developer in a company called Configura. Aside from technology, I also have interests in puzzle solving, such as Rubiks cubes and Sudoku.",
			"I usually prefer to code in Java, which is my strongest programming language. However, I am able to code in various languages as well, to cater for the requirements of other projects, such as web development projects, Android projects, Hardware projects, and many more. <br> <br> I am also able to code in HTML, CSS, Javascript, Jquery, PHP, SQL, C, Java, and C++. I am currently learning how to code in GO. Aside from programming languages, I also have an intermediate knowledge in Cyber Security, especially in web security. In addition to that, I also have knowledge in using GIT.",
			"These are my achievements!", 
			"These are my list of projects"];

function changeContent(text) {
	$("#content_txt").delay(500).fadeOut();
	setTimeout(function(){
		document.getElementById("content_txt").innerHTML = text;
	}, 800);
	$("#content_txt").delay(1000).fadeIn();
}

function generateTabs(arr) {
	for(var i = 0; i < 5; i++) {
		document.getElementById(tabs[i]).innerHTML = arr[i];
	}
}

function backHome() {
	$("#content").css("display", "flex").delay(1000).fadeOut();
	$("#extra").delay(1500).animate({"opacity" : "0", "bottom" : "-100vh"});
	$("#home_txt").delay(2000).fadeOut();
	$("#home_button").delay(2500).animate({"width" : "0vw"});
	$("#about_me").delay(3000).animate({"left" : "4vw"});
	$("#skills").delay(3000).animate({"left" : "28vw"});
	$("#achievements").delay(3000).animate({"left" : "52vw"});
	$("#projects").delay(3000).animate({"left" : "76vw"});
	$("#about_me, #skills, #achievements, #projects").fadeIn();
	$(".wrap").delay(1500).slideDown();
	$(".container_txt").delay(2000).fadeIn();
}


function me() {
	$("#skills, #achievements, #projects").delay(500).fadeOut();
	appear(text[0], socials);
}

function skills() {
	$("#about_me, #achievements, #projects").delay(500).fadeOut();
	$("#skills").delay(1000).animate({"left" : "4vw"});
	appear(text[1], skillSet);
}

function achievements() {
	$("#skills, #about_me, #projects").delay(500).fadeOut();
	$("#achievements").delay(1000).animate({"left" : "4vw"});
	appear(text[2], winnings);	
}

function projects() {
	$("#skills, #about_me, #achievements").delay(500).fadeOut();
	$("#projects").delay(1000).animate({"left" : "4vw"});
	appear(text[3], projectList);	
}

function appear(text, arr) {
	$(".container_txt").delay(1500).fadeOut();
	$(".wrap").delay(2000).slideUp();
	document.getElementById("content_txt").innerHTML = text;
	$("#content").css("display", "flex").hide().delay(2500).fadeIn();
	$("#home_button").delay(3000).animate({"width" : "20vw"});
	$("#home_txt").delay(3500).fadeIn();
	generateTabs(arr);
	$("#extra").delay(4000).animate({"opacity" : "1", "bottom" : "12.5vh"});
}

var contact = new Map();
contact.set('LINKEDIN', "https://www.linkedin.com/in/roshen-maghhan-831b3498/");
contact.set('E-MAIL', "mailto:roshenmaghhan@gmail.com");
contact.set('INSTAGRAM', "https://www.instagram.com/roshenmaghhan/");
contact.set('TWITTER', "https://twitter.com/roshennn");
contact.set('SNAPCHAT', "https://www.snapchat.com/add/roshennn");

//CAN PUT THE BOTTOM 3 IN ONE MAP
var skillText = new Map();
skillText.set('WEBDEV', 'This is web dev');
skillText.set('SOFTWAREDEV', 'this is software dev');
skillText.set('HARDWAREDEV', 'this is hardware dev');
skillText.set('ANDROIDDEV', 'this is app dev');
skillText.set('VR/ARDEV', 'this is virtual & augmented reality');

var winningsText = new Map();
winningsText.set('ORATORY', 'ORATORY');
winningsText.set('MENTORING', 'MENTORING');
winningsText.set('HACKATHONS', 'HACKATHONS');
winningsText.set('PROGRAMMING', 'COMPETITIVE PROGRAMMING');
winningsText.set('PIANO', 'PIANO');

var projectText = new Map();
projectText.set('HARDWAREPROJECTS', 'Hardware');
projectText.set('SOFTWAREPROJECTS', 'software');
projectText.set('VR/ARPROJECTS', 'ar / vr stuff');
projectText.set('APPPROJECTS', 'apps');
projectText.set('WEBPROJECTS', 'web');

$('#extra').delegate('div.socials', 'click', function() {
    var text = $(this).text().replace(/\s/g, "");
	console.log(text);
	if(contact.has(text)) {
		window.open(contact.get(text));
	} else if(skillText.has(text)) {
		changeContent(skillText.get(text));
	} else if(winningsText.has(text)) {
		changeContent(winningsText.get(text));
	} else if(projectText.has(text)){
		changeContent(projectText.get(text));
	}
});