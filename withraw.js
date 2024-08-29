// step-1 get the eventlistener
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2 withdraw field event handle add
    const withdrawField=document.getElementById('withdraw-field')
    const newWithdrawAmountString=withdrawField.value ;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString)

    // clear input field  
withdrawField.value='';

if(isNaN(newWithdrawAmount)){
    alert('Please provide a number')
    return
}

    // step-3 withdraw  text event handle add
    const WithdrawTextElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=WithdrawTextElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);



    if(newWithdrawAmount>previousWithdrawTotal){
        alert(' sorry...tmr balance a eto tk nai ')
        return;
    }

     // step-6 calculate withdraw amount
     const currentWithdraw =previousWithdrawTotal+newWithdrawAmount;

     // step-5 set the deposit total 
    WithdrawTextElement.innerText=currentWithdraw;

    // step-7 get the balance 
    const balanceTotalElement=document.getElementById('total-balance')
    const previousBalanceString=balanceTotalElement.innerText;
    const previousBalance=parseFloat(previousBalanceString);

// step-8 calculate balance 
const currentBalance = previousBalance -newWithdrawAmount;

// step-9 set the balance
balanceTotalElement.innerText=currentBalance;


    
})