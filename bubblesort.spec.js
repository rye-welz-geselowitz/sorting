describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an empty array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an empty array', function(){
    expect( bubbleSort([1,6,3,4566,34,2,0,-2]) ).toEqual([-2,0,1,2,3,6,34,4566]);
  });
});
