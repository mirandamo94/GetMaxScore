//problem: find maximum score given an array of numbers
/*it takes an array of number as input and output an int thats the biggest value added

catch: if num[i] is selected, and num[i-1] and/or num[i+1] has the same value as num[i], 
all neighboring numbers that has a neighbor of num[i] will be deleted.

If any element is chosen to be removed and added to the sum, 
then any other element equal to one of the neighbors will be removed without being added to the score. 
In the first case, by removing 2 (index 1) it has a neighbor of 2, hence all 2s will be removed in one round.

for example, if we have 0,2,2,2,7,2,2,2. the output should be 2+7=9 as the other 2s will all be deleted*/

		function findMaxScore(array) {
		    function iter(array, sum) {
		        if (!array.length) {
		            max = Math.max(max, sum);
		            return;
		        }
		        array.forEach((v, i, nums) => 
		            iter(
		                array.filter((w, j) => w !== aums[i - 1] && w !== aums[i + 1] && i !== j),
		                sum + v
		            )
		        );
    }

    var max = 0;
    iter(
    	array.filter(v => Number.isInteger(v) && v > 0), 0
    	);
    return max;
}


		
	


console.log("result one: " + findMaxScore([0, 1, 1, 5, 1, 1]) + ", expected value 6");//1+5
console.log("result two: " + findMaxScore([1, 1, 1, 1, 1, 1, 1, 14, 1, 1]) + ", expected value 15");//1+14
console.log("result three: " + findMaxScore([-3, -7, 3, 2, 3, 4, 3, 0]) + ", expected value 9");//expected 9 3+3+3
console.log("result four: " + findMaxScore([-1, -7, -9]) + ", expected value 0");//expected 0
console.log("result five: " + findMaxScore([0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) + ", expected value 30");//expected 30 10+8+6+4+2




