
const form = document.getElementById('form-compare');


const result = `The result of multiplying ${firstNumber} by ${secondNumber} is ${firstNumber * secondNumber}.`;


form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
  
  let repo = form.elements["name"].value;
  let commit1 = form.elements["commit1"].value;
  let commit2 = form.elements["commit2"].value;
 
  let url = `https://github.com/github/${repo}/${commit1}..${commit2}`

	alert(url);
});
