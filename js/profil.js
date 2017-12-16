var profil = {
	coverImage:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t31.0-8/c0.77.851.315/p851x315/13064556_999014006855165_763700990434005909_o.jpg?oh=2c24212b4839cd5659a2b8f1b61fc750&oe=5A8D03DE" ,
	profileImage:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/13592647_1032617346828164_8664064096985920531_n.jpg?oh=e92c4ab3d5fdf409efde6b3a2b886820&oe=5A8EA182" ,
	name: "Aleksandra",
	lastName: "Drakulic",
	statusi: [
			'Hello World',
			'Pokusavam da napravim facebook',
			'Vidjecemo kako ce ispasti'
	]
};

var hero = document.getElementById('hero');
	hero.style.background = "url('" + profil.coverImage + "') no-repeat center";

var profileImage = document.getElementById('profile-img');
	profileImage.src = profil.profileImage;
	profileImage.alt = profil.name + " " + profil.lastName + "profile photo";

var fullName = document.getElementById('full-name');
	fullName.innerHTML = profil.name + " " + profil.lastName;


var statusiSection = document.getElementById('statusi');
var div; 
var p;

for (var i = profil.statusi.length - 1; i >= 0; i--) {
	div = document.createElement('div');
	p = document.createElement('p');
	p.innerHTML = profil.statusi[i];
	div.appendChild(p);
	div.classList.add('statusi');
	statusiSection.appendChild(div);
}
console.log(statusiSection);



