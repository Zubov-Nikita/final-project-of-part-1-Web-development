const field = document.querySelector(".field");




for (let i=1;i<=15;i++){
 	const cell = document.createElement("div");
	cell.className = "cell";
	cell.innerHTML = i;
	
	
	field.append(cell);	
}