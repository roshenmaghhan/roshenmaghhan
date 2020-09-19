var screen = setInterval(rotate, 10);

function rotate() {  
  if(window.innerWidth > window.innerHeight){
    $("#rotate").css("display", "flex");
  } else if (window.innerWidth < window.innerHeight) {
    $("#rotate").css("display", "none");
  } 
}



$(document).ready(function(){
	$("#coded").delay(500).fadeIn();
	$("#coded").delay(1500).fadeOut();
	$("#background-wrap").delay(2500).animate({"backgroundColor" : "#FFE694"});
	$("#about_me").delay(3000).slideDown(1000);
	$("#skills").delay(4500).animate({"left" : "2.5vw"});
	$("#projects").delay(4500).animate({"left" : "67.5vw"});
	$("#achievements").delay(4500).animate({"bottom" : "2vh"});
	$("#contact").delay(5000).animate({"right" : "2.5vw"});
	$(".wrap").delay(5500).fadeIn();
	$("#about_txt").delay(6000).fadeIn();
});

var curValue = 0;

var tabs = ["tab1", "tab2", "tab3", "tab4", "tab5"];
var divs = ["#div1", "#div2", "#div3", "#div4", "#div5"];
var listPos = ["1vh", "16.8vh", "32.6vh", "48.4vh", "64.2vh"];


var skillSet = ["WEB DEV", "SOFTWARE DEV", "HARDWARE DEV", "ANDROID DEV", "VR/AR DEV"];
var winnings = ["ORATORY", "MENTORING", "HACKATHONS", "PROGRAMMING", "PIANO"];
var projects = ["HARDWARE PROJECTS", "SOFTWARE PROJECTS", "VR/AR PROJECTS", "APP PROJECTS", "WEB PROJECTS"];

var additionalInfo = new Map();

additionalInfo.set('WEBDEV', 'When I first started coding, I learnt a bit of Javascript, and was mainly curious about how web sites were built. Due to that, I started learning HTML, CSS, and Javascript, to design and create a website. However, this was only for the front-end aspect, after that, I began learning PHP and SQL, enabling me to build more than just static websites. <br><br> As of today, I have built over 20 different websites (most of which are personal websites), and built a few web-app games, and some web-applications for my personal projects.');
additionalInfo.set('SOFTWAREDEV', 'As software is a general term, I have dedicated this segment to the general overview of softwares I have built. I have coded several different softwares, from building a TIC-TAC-TOE bot which never loses, using the machine-learning minimax algorithm. I have also coded a chat-bot system in my final year project, which involved machine learning, and also voice recognition, voice transcription, and the Google API for voice translation, and many other softwares. <br><br> Most of my software-based projects, are coded in either C, C++, JAVA, or Javascript. However, I am always open to learning new programming languages, for different projects.');
additionalInfo.set('HARDWAREDEV', 'In 2019, I decided to expand my knowledge in technology, and venture into hardware as well. I decided the best option, is to start with arduino. Since then, I have used many different components, to create my projects, such as ultrasonic sensors to measure distance, RFID reader to duplicate cards, IR transmitter and receivers to build a Google-Home like product, and many more. <br><br> I also do my best to integrate software with hardware, in my projects, such as when I built a robot to wake me up, ( watch <a href="https://twitter.com/roshennn/status/1259141397187182593">here</a> ), I used Javascript for the voice recognition, and C++ to connect and control the arduino.');
additionalInfo.set('ANDROIDDEV', 'In 2019, as an effort to expand my knowledge in technology, I also decided to learn how to build Android applications. I focused mainly on Android apps, as it was easier for me to use, as I never owned an apple product. <br><br> I would usually use Android Studio, and Java when creating my apps. However, I have now started to learn Kotlin, as I realised its popularity in Android development is increasing rapidly. As of today, I have built 2 android apps.');
additionalInfo.set('VR/ARDEV', 'In 2018, I read a lot about occlusion, and how it limits augmented reality. Due to that interest, I started venturing into Augmented and Virtual Reality. I started off by using A-frame, for my web-based virtual and augmented reality projects. Then I moved on to using ARcore for my Augmented Reality Android-based projects. <br> <br> In 2019, I also used Virtual Reality in a hackathon, to build a prototype for a new education-based system, allowing kids to learn, by using VR headsets. Up till today, I have done about 5 different Augmented and Virtual Reality projects.');

additionalInfo.set('ORATORY', 'In 2015, I represented my school in a district-level public speaking competition, where I managed to clinch the fifth place, in the entire district. In that same year, I also represented my school in the "Dato Wira Debate Tournament", where I was awarded the best speaker for the quarter finals round. In that same year, I also represented my school in a District level competition, called the National Academic Decalthon, where I won 3rd in debate and 3rd overall. <br><br> In March 2020, I was invited by the University Of Southampton Malaysia, to give a TEDx talk. My talk was about  digital approaches to innovation and problem solving. The talk can be watched <a href="https://www.youtube.com/watch?v=TwurSgj4yTo">here</a>.');
additionalInfo.set('MENTORING', 'In 2017, my university ( Taylors University ), approached me, and asked me to be a mentor for high school students, for an upcoming competition called the Taylors 1 Million Dreams. The essence of the competition was similar to Shark Tank. Students would have to pitch their business ideas to a set of judges, who would then evaluate their business and its business model. <br><br> I was in-charge of mentoring 2 teams, in which both teams, managed to win 2nd and 3rd place, and also one of the best pitches, which resulted in me winning the title of the golden mentor.');
additionalInfo.set('HACKATHONS', 'In 2016, I joined my first hackathon with my classmates. It was the Imagine hack hackathon, organised by my university. In the hackathon, we built an app to help students manage their time. In the end, we managed to win the 2nd place in the hackathon. In the following year, my team and I joined the NASA Space apps challenge. In this ideathon, we built an app to help gather users for group activites. By the end of the hackathon, we managed to win 1st place. More about the event can be found <a href="https://www.youtube.com/watch?v=hTB10GFJX7Q&feature=youtu.be">here</a>. <br><br> In 2019, I joined the ABCDE hackathon alone. In this hackathon, I built an app to help pregnant mothers to do their online shopping, using AR, and machine learning. I then managed to secure a spot in the top 5 of the competition.');
additionalInfo.set('PROGRAMMING', 'In 2020, I decided to sharpen my problem solving skills, and started doing my reasearch on competitive programming. Then, on July 2020, I started using 2 different platforms, which are Hackerrank and Dcoder. I used Hackerrank, whenever I was on my laptop, and Dcoder, whenever I was on my phone. <br><br> As of today (September 2020), I am currently ranked number 6 in the whole of Malaysia, and the top 1% in the world, on Hackerrank, and I have also managed to attain a 6-star golden problem solving badge. See <a href="https://www.hackerrank.com/leaderboard?filter=Malaysia&filter_on=country&page=1&track=algorithms&type=practice">here</a>. On the other hand, I am currently ranked number 3 in Malaysia, on Dcoder. See <a href="https://code.dcoder.tech/leaderboard/">here</a>.');
additionalInfo.set('PIANO', 'I began my jouney in piano when I was 10 years old. Based on the ABRSM standards, I was a grade 5 pianist by the age of 14, and after the foundation of my music skills were built, I continued to learn to play the piano by myself, and would continue to play it as a form of relaxation. <br><br> There are many pieces I enjoy playing, one of which is Fur Elise, and also my newest favourite, a Spanish song, called Te Amo, which I was introduced to, by the show called Money Heist. You could watch me play a medly of Te Amo and Bella Ciao, <a href="https://twitter.com/roshennn/status/1254792919833128963">here</a>.');

additionalInfo.set('HARDWAREPROJECTS', 'One of my most notable projects, called the MYVI-TESLA, was a project I did for Malaysia day, where I tweaked the electronic components of a MYVI, to work as some-what of a Tesla. It could start/stop the car, roll down the windows, play music, and summon the car in a straight line, all just from the phone. An article about the invention can be read <a href="https://worldofbuzz.com/21yo-genius-can-control-his-myvi-from-his-phone-and-he-used-only-rm200-to-do-it/">here</a>. <br><br> Using an arduino, and IR transmitters and receivers, I also managed to build my own voice-operated version of Google Home, which was able to control my fan, TV and others. Later on, I added RF components for it to control my house gates. A demo of the project can be watched <a href="https://twitter.com/roshennn/status/1088456385686253569">here</a>.');
additionalInfo.set('SOFTWAREPROJECTS', 'Using the Google Translate API, I built a software to allow my earphones to translate languages in real time. Within that software, I also created my own voice-diarization program, to allow it to identify different voices, and also used machine learning to highlight and get information of certain topics from Wikipedia. More information of this software can be read <a href="https://says.com/my/tech/developer-gets-tired-of-colleagues-speaking-in-mandarin-and-makes-real-time-translator">here</a>. <br><br> I also reprogrammed a HID USB, which could execute any script the moment it was plugged into a computer/laptop, without the need of any human interaction. As an example, I made it steal all saved passwords on the users computer. A demo of the project can be watched <a href="https://twitter.com/roshennn/status/1075410243088089089">here</a>.');
additionalInfo.set('VR/ARPROJECTS', 'After reading about Augmented Reality, I built a simple business card, using a Javascript framework called A-Frame. I also created a simple customized pattern-marker, with my initial. This was easier to build as I was familiar with the languages used ( HTML, CSS, JS ). The code and the demo for the project can be found <a href="https://github.com/roshenmaghhan/augmented-reality-business-card">here</a>. <br><br> I then decided to take it up a notch, by creating an Augmented Reality resume, which was voice operated, and would send me contact details to my email, through an SMTP server. I used the Javascript Navigator API for the voice recognition, and responsive voice js, for the voice synthesis. A demo of the project can be viewed <a href="https://twitter.com/roshennn/status/1251531231956631552">here</a>.');
additionalInfo.set('APPPROJECTS', 'During my introduction to Mobile Applications class, my team and I built a game called CT, which was short for Critical Thinking. It was an Android Game, which had 20 different levels, and each user has 3 lives. For each question they got wrong, they would lose a life, and if all lives are lost, they would have to start all the way from the first level again. <br><br> During my internship in Configura, I was responsible for developing an application which could measure the dimensions of a room, using augmented reality. I used ARcore for the Augmented reality aspect of it, and since I completed the main requirements early, I proceeded to allow the app to get a digital blueprint of the measured area as well.');
additionalInfo.set('WEBPROJECTS', 'Most of my web-based projects are developed in Hackathons. However, aside from that, I have built over 20 websites, most of which are my own personal websites. Currently, one of my projects, is building a website for a start-up company called Quostation. <br><br> As I have invested more of my time in Machine Learning and app development, I not been extremely focused on web development, therefore, recently, I decided to build a simple hyper-casual mobile app game, to sharpen my skills in HTML, CSS, and Javascript. The simple game works by scoring users based on moving a ball through barriers. You could try the game out <a href="https://roshenmaghhan.github.io/hyper-casual-Mobile-Web-App-Game/">here</a>.');

function toFade(num, arr) {
	var included = "";
	for(var i = 0; i < arr.length; i++)
		if(i != num)
			included += arr[i] + ",";
	return included;	
}

$(".list").click(function(){
	var val = $(this).data('value');
	curValue = val;
	var text = $(this).text().replace(/\s/g, "");
	$(toFade(val, divs)).delay(500).fadeOut();
	$("#home_btn").delay(1000).animate({"opacity" : "0", "bottom" : "-105vh"});
	$(this).delay(1500).animate({"top" : "1vh"});
	$("#list_content").css("display", "flex").hide().delay(2000).slideDown();
	$("#cancel_btn").delay(2500).animate({"opacity" : "1", "bottom" : "5vh"});
	document.getElementById("content_info").innerHTML = additionalInfo.get(text);
	$("#content_info").delay(3000).fadeIn();
});


function generateTabs(arr) {
	for(var i = 0; i < 5; i++)
		document.getElementById(tabs[i]).innerHTML = arr[i];
}

function aboutMe() {
	dissapearHome();
	contentAppear();
}

function info(arr) {
	dissapearHome();
	generateTabs(arr);
	$(".list").delay(2500).animate({"width" : "95vw"});
	$(".listTxt").delay(3000).fadeIn();
	$("#home_btn").delay(3000).animate({"opacity" : "1", "bottom" : "5vh"});
}

function goHome() {
	$(".listTxt, #content_txt").delay(500).fadeOut();
	$(".list").delay(700).animate({"width" : "0vw"});
	$("#content").delay(700).slideUp();
	$("#home_btn").delay(1000).animate({"opacity" : "0", "bottom" : "-105vh"});
	//RE-APPEARING BEGINS BELOW
	$("#about_me").delay(1500).slideDown(1000);
	$("#skills").delay(3000).animate({"left" : "2.5vw"});
	$("#projects").delay(3000).animate({"left" : "67.5vw"});
	$("#achievements").delay(3000).animate({"bottom" : "2vh"});
	$("#contact").delay(3500).animate({"right" : "2.5vw"});
	$(".wrap").delay(4000).fadeIn();
	$("#about_txt").delay(4500).fadeIn();
}

function dissapearHome() {
	$("#about_txt").delay(500).fadeOut();
	$(".wrap").delay(1000).fadeOut();
	$("#about_me").delay(1500).slideUp();
	$("#skills").delay(2000).animate({"left" : "-100vw"});
	$("#projects").delay(2000).animate({"left" : "110vw"});
	$("#achievements").delay(2000).animate({"bottom" : "-110vh"});
	$("#contact").delay(2000).animate({"right" : "-100vw"});
}

function contentAppear() {
	$("#content").css("display", "flex").hide().delay(2500).slideDown(); // The delay must be based on the last animation of disspearHome().
	$("#content_txt").delay(3000).fadeIn();
	$("#home_btn").delay(3500).animate({"opacity" : "1", "bottom" : "5vh"});
}

function cancel() {
	$("#content_info").delay(500).fadeOut();
	$("#list_content").delay(1000).slideUp();
	$("#cancel_btn").delay(1000).animate({"opacity" : "0", "bottom" : "-105vh"});
	$(divs[curValue]).delay(1500).animate({"top" : listPos[curValue]});
	$(toFade(curValue, divs)).delay(2000).fadeIn();
	$("#home_btn").delay(2500).animate({"opacity" : "1", "bottom" : "5vh"});
}