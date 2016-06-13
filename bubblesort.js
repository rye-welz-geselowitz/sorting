function bubbleSort(array){
	var copy;
	//var swapped;
	var counter;
	while(true){
		//swapped=false;
		counter=0;
		for(var i=0;i<array.length-1;i++){
			if(array[i]>array[i+1]){
				copy=array[i];
				array[i]=array[i+1];
				array[i+1]=copy;
				//swapped=true;
				counter++;
			}	
		}
		//console.log(array);
		//if(swapped===false){
		if(counter<=1){
			return array;
		}
	}
}


