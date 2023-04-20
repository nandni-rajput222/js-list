function addTask() {	
	var task = document.getElementById("input").value;

	var li = document.createElement("li");
	li.innerHTML = task;
	
	document.getElementById("list").appendChild(li);

		document.getElementById("input").value = "";
}
