document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // console.log(typeof PreviousDepositTotal );

const newDepositAmount =parseFloat(newDepositAmountString);
    // console.log('depositAmount');

    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

// console.log(typeof PreviousDepositTotal );

const currentDepositTotal = PreviousDepositTotal + newDepositAmount;

    depositTotalElement.innerText =  currentDepositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString );

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    depositField.value = '';
})