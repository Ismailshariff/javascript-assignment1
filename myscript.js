//percentage of total marks
var totalmarks=600;
function percentage(Bio,Chem,Phy,Mat,Eng,Hin){
    var sum=Bio+Chem+Phy+Mat+Eng+Hin;
    return sum;
}
var result=percentage(65,80,65,89,76,98);
var percentage=(result*100/totalmarks);
console.log(percentage);


//to print whether the given number is even or odd

function  oddoreven(num){
    if(num%2==0){
        return "even number";
    }
    else{
        return "odd number";
    }
}
var result = oddoreven(1);
console.log(result);

//write function to reverse a string
function reversestring(str){
    return str
    .split('')
    .reverse('')
    .join('')
}
var result=reversestring('Web development')
console.log(result)