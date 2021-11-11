
//contact form for contact.html created by Andrew Roche 2967864



var comment = "placeholder";

var commentBox = document.querySelector("#commentBox");

var preview = document.querySelector(".preview");
preview.classList.add("hide");

var confirmBox = document.querySelector(".confirmBox");
confirmBox.classList.add("hide");

var previewBtn = document.querySelector(".previewBtn");

previewBtn.addEventListener("click", function(){
	preview.classList.remove("hide");
	comment = document.querySelector("#contactForm").contactComment.value;
	commentBox.classList.add("hide");
	
	var previewText = document.querySelector(".previewText");
	previewText.innerHTML = (comment);
	}
);

var submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function(){
	preview.classList.add("hide");
	confirmBox.classList.remove("hide");
	
})

var cancelBtn = document.querySelector(".cancelBtn");

cancelBtn.addEventListener("click", function(){
	preview.classList.add("hide");
	commentBox.classList.remove("hide");
})