function a() {
	setTimeout(() => {
		console.log("Hello")
	}, 2000);
}
function b() {
	a();
	setTimeout(() => {
		console.log("Yo")
	}, 1000);
}
function c(){
	b();
	console.log("Hi");
}

console.log(c());