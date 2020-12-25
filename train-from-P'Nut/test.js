function a(animal) {
	animal.isOpen = true;
}

const cat = {
	isOpen : false
}

a(cat);

console.log(cat.isOpen);