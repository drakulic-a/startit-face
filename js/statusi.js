var noviStatusInput = document.getElementById('novi-status');
var noviStatusButton = document.getElementById('novi-status-btn');
var statusDiv;
var prviStatus;
var noviStatus;
var noviDiv;
var noviParagraf;


noviStatusButton.onclick = function(e){
	e.preventDefault();
	noviStatus = document.createTextNode(noviStatusInput.value);
	if(noviStatusInput.value == ""){
    console.log('disabled');
	return false;
  }
  else{
	statusDiv = document.getElementById('statusi');
	prviStatus=statusDiv.firstChild;
	
	noviDiv = document.createElement('div');
	noviDiv.classList.add('status');
	noviParagraf = document.createElement('p');
	noviParagraf.appendChild(noviStatus);
	noviDiv.appendChild(noviParagraf);
	statusDiv.insertBefore(noviDiv, prviStatus);
	noviStatusInput.value = "";

	}
};
