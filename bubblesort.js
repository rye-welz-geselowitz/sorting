function bubbleSort(array){
	var copy;
	var counter;
	var end=array.length-1;
	while(true){
		counter=0;
		for(var i=0;i<end;i++){
			if(compare(i,i+1,array)){
				copy=array[i];
				array[i]=array[i+1];
				array[i+1]=copy;
				counter++;
			}
			//console.log('counter',counter);
		}
		end--;
		//console.log(array);
		if(counter===0){
			return array;
		}
	}
}

function compare(a,b,array){
	return array[a]>array[b];
}




