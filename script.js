function afficher(id) {
	// Cache toutes les sections
	document.querySelectorAll('section').forEach(
	s => s.classList.remove('active')
	);
	// Affiche seulement celle choisie
	document.getElementById(id).classList.add('active');
	}


