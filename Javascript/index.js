// Storage

const ytIds = {
	combat: "U11xtxmqqas",
	gun: "HgStITd73PI",
	dragonBall: "4F3xMB9ju8w",
	dragon: "-q82SFQnRjY",
	movement: "G1jcRdiemD8",
	transform: "J62wozWHJ2E"
};

// Modal Image Gallery

function onClick(element) {
	const videoFrame = document.getElementById("videoFrame");
    const videoId = ytIds[element.id];
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;

	document.getElementById("modal01").style.display = "block";

	// var captionText = document.getElementById("caption");
	// captionText.innerHTML = element.alt;
	// document.getElementById("img01").src = element.src;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};

function myFunction() {
	var navbar = document.getElementById("myNavbar");
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
	} else {
		navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
	}
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
	var x = document.getElementById("navDemo");

	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}