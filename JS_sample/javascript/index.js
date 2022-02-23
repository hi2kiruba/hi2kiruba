let fname ="kiruba";
let lname ="dayalan";
//let age = prompt("Age is ");
//alert(fname +" " + lname +" " + age + " years old");

//template string
//let result = ` ${fname} ${lname} ${age} years old `;
//alert(result);

function gretting1(msg){
	
	return alert(`${msg} everyone`);
}
//gretting("Good morning");

//ARROW Function (with one line) - anonymous functino - without name
let gretting =(msg) => alert(`${msg} everyone`);
//gretting("Good morning");

//With curly braces
let createBlog = (title, body) => {
	
	if(!title) {
		throw new Error("A title is required")
	}
	
	if(!body) {
		throw new Error("A body is required")
	}
	
	return alert(`${title} - ${body}`);
}
//createBlog('react', 'details');

//ARROW function with this keyword

let test = {
	//ADD property
	ary: ["kiruba", "karan", "Dayalan"],
	//ADD method
	printVal: function() {
		console.log("print " +this);
		/*setTimeout(function(){
			console.log("time " +this);
			console.log(this.ary.join( " - "));
		}, 3000);*/
		//Anonymous function
		setTimeout(() => console.log(this.ary.join( " - ")), 3000);
	}
}


//alert(test.ary);
test.printVal();