document.getElementById('comment-link').addEventListener("click", function () {
	document.querySelector('.comment-section').style.display = "flex";
});

document.getElementById('close').addEventListener("click", function () {
	document.querySelector('.comment-section').style.display = "none";
});

