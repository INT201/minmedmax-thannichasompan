const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
let result;
if (n1>n2) {
    if(n2>n3){
        result = { min: n3, mid: n2, max: n1 }
    }
    else if(n3>n1){
        result = { min: n2, mid: n1, max: n3 }
    }
    else{
        result = { min: n2, mid: n3, max: n1 }
    }
    return result;

} else if(n2>n1){
    if(n1>n3){
        result = { min: n3, mid: n1, max: n2 }
    }
    else if(n3>n2){
        result = { min: n1, mid: n2, max: n3 }
    }
    else{
        result = { min: n1, mid: n3, max: n2 }
    }
    return result;
}
else{
    if(n1==n2 && n2==n3){
        result = { min: n1, mid: n2, max: n3 }
    }
    return result;
}

module.exports = minMedMax
