
function animation(){

	/*Variables*/
	//Variables max and pos should be modified to confrom the transforming rects
	var elem = document.getElementById("animate");
	var pos = 0;
	var max = 100;
	var id = setInterval(frame,5);
	
	/*moves the frame outside of view*/
	function frame(){
		
		if(pos == max){
			clearInterval(id);
		} else{
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
		
		
	}


}