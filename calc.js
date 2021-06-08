function Taylor(x, iCount=10){
    let res = sinh(x, iCount);
    return strip(res);

};

function sinh(x, iternumber) {
    var sum = 0;
    for (let i=1; i<iternumber; i++) {
        sum += (x^(2*i+1))/factorial(2*i+1);
        console.log(`sum is: ${sum}`); 
    }
    
    return sum;
};

function factorial(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
};

function strip (number, precision=3) {
    return (parseFloat(number).toPrecision(precision));
}

 
module.exports.Taylor = Taylor; 
