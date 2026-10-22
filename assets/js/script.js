
 // up files
function updateInputValue() {
	const fileInput = document.getElementById('fileUpload');
	const inputField = document.getElementById('attach-resume');
	if (fileInput.files.length > 0) {
		inputField.value = fileInput.files[0].name;
	}
	else {
		inputField.value = '';
	}
}
//Add event up values
document.querySelector('#fileUpload').addEventListener('change', updateInputValue);

//Event click btn select file
document.querySelector('.btn-file').addEventListener('click', ()=>{
	document.getElementById('fileUpload').click();
})


//owl of feedback
$('.owl-carousel').owlCarousel({
	nav:true, // Show next and prev buttons
	autoplaySpeed:300,
	navSpeed:400,
	items:1
})

 //add shortcut button
 document.querySelector('.add-shortcut-btn').addEventListener('click', () => {
	 // Implement the functionality to add a shortcut here
	 let result = confirm("Add shortcut");
	 if (result == true) {
		 alert("Added shortcut");
	 } else {
		 alert("Cancel");
	 }
 });

//when the button is clicked, the remaining buttons will be displayed.
 document.addEventListener('DOMContentLoaded', () => {
	 const toggleButton = document.querySelector('.toggle-buttons');
	 const socialLinkIcon = document.querySelector('.social-link-icon');

	 toggleButton.addEventListener('click', () => {
		 socialLinkIcon.classList.toggle('show-buttons');
		 
	 });
 });
