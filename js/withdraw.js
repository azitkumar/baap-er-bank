document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField =document.getElementById('Withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount =parseFloat( newWithdrawAmountString);

    // console.log('newWithdrawAmount')


    const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString =withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// console.log('previousWithdrawTotal');

const currentWithdrawTotal = newWithdrawAmount+previousWithdrawTotal;

 withdrawTotalElement.innerText = currentWithdrawTotal;


 const balanceTotalElement = document.getElementById('balance-total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousBalanceTotal = parseFloat(previousBalanceTotalString);

 const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;




 withdrawField.value='';

})