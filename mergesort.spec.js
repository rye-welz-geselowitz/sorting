describe('merge', function() {
	it('merges two sorted arrays', function() {
		expect( merge([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
	});
	it('merges two sorted arrays', function() {
		expect( merge([1,5,7],[2,3,4,6,])).toEqual([1,2,3,4,5,6,7]);
	});
	it('merges two empty arrays', function() {
		expect( merge([], [])).toEqual([]);
	});
	it('merges a sorted array with an empty array', function() {
		expect( merge([1,2,3], [])).toEqual([1,2,3]);
	})
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles an empty array', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });
  it('handles an empty array', function(){
    expect( mergeSort([1,6,3,4566,34,2,0,-2]) ).toEqual([-2,0,1,2,3,6,34,4566]);
  });
});


