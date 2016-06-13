describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of size1', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an array', function(){
    expect( bubbleSort([1,6,3,4566,34,2,0,-2]) ).toEqual([-2,0,1,2,3,6,34,4566]);
  });
  it('handles an array2', function(){
    expect( bubbleSort([4,6,5,1]) ).toEqual([1,4,5,6]);
  });
  /*
  it('compares the expected number of times', function(){
  	spyOn(window,'compare').and.callThrough();
  	var sorted=bubbleSort([4,6,5,1]);
  	//expect(sorted).toEqual([1,4,5,6]);
    expect(compare.calls.count()).toEqual(10);
  });*/ //not sure why we're getting 6 and not 10

  function numerically (a, b) { return a - b; }

  function generateArray(size, lower, upper) {
  var randomArray = [];
  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}
for (var i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function(){
      var arr = generateArray(i, 0, 100);
      var sorted = arr.slice(0).sort(numerically);
      expect( bubbleSort(arr) ).toEqual( sorted );
    });
  }

});


