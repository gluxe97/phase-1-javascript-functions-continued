// code your solution here
function saturdayFun(par='roller-skate') {
        return `This Saturday, I want to ${par}!`;
    }
function mondayWork(par="go to the office"){
    return `This Monday, I will ${par}.`
}
function wrapAdjective(par1="*"){
    const inner=function(par2="special"){
        return `You are ${par1}${par2}${par1}!`;
    }
    return inner;
}