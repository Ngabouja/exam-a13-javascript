function estDivisible(a, b) {
	if (a % b) {
		return false;
	} else {
		return true;
	}
}

console.log(estDivisible(10, 2)); // Résultat attendu : true
console.log(estDivisible(10, 3)); // Résultat attendu : false
console.log(estDivisible(17, 2)); // Résultat attendu : false
console.log(estDivisible(20, 2)); // Résultat attendu : true
console.log(estDivisible(9, 3)); // Résultat attendu :true
console.log(estDivisible(47, 3)); // Résultat attendu : false
