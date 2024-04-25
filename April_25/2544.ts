function alternateDigitSum(n: number): number {
	const vet = n.toString();
	let sum = 0;
	for(let i=0;i<vet.length;i++){
		if(i%2==0) sum += +vet[i];
		else sum -= +vet[i];
	}
	return sum;
}
