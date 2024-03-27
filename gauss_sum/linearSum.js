// create a function that will take an argument that stands for the maximum integar you want to count to

function linearSum(n) {
    //initialize the starting value for the total sum
    let sum = 0

    //run a for loop that starts at the first number 
    //and counts up to the maximum 
    for ( let i = 1; i <= n; i++) {
        //sum the numbers in the loop
         sum += i;
    }
    //return the total sum
     return sum;
}

//log the final output
console.log(linearSum(100));