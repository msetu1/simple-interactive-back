// step-1 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2 
const depositField =document.getElementById('deposit-field');
const newDepositAmountString =depositField.value;
const newDepositAmount=parseFloat(newDepositAmountString);

// step-3 
const depositTotalElement=document.getElementById('deposit-total');
const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);

// step-4 
const currentDepositTotal=previousDepositTotal+newDepositAmount;
// set the deposit total 
depositTotalElement.innerText=currentDepositTotal;

// step-5 get balance total 
const balanceTotalElement = document.getElementById('total-balance');

const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

// step-6  calculate balance total
const currentBalanceTotal =previousBalanceTotal+newDepositAmount;

// set the balance total 
balanceTotalElement.innerText=currentBalanceTotal;


// step- clear the bdeposit field
depositField.value='';


})