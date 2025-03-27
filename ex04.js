function estNegatif(nombre) {
	if (nombre < 0) {
		return true;
	} else {
		return false;
	}
}

console.log(estNegatif(-3)); // Résultat attendu : true
console.log(estNegatif(5)); // Résultat attendu : false
console.log(estNegatif(78)); // Résultat attendu : false
console.log(estNegatif(-45)); // Résultat attendu : true
console.log(estNegatif(173)); // Résultat attendu : false
console.log(estNegatif(-785)); // Résultat attendu : true
