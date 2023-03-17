  // login button event handler 
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})  

// deposit button event handler  
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
  const depositNumber = getInputNumber('depositAmount');


updateSpanTaxt('currentDeposit', depositNumber )
updateSpanTaxt('currentBalance', depositNumber);
  
  document.getElementById('depositAmount').value = "";

})

//  withdraw button handler 

  const withdrawButton = document.getElementById('addWithdraw');
  withdrawButton.addEventListener('click', function(){
  const withdrawNumber = getInputNumber('withdrawAmount');
    console.log(withdrawNumber);
  })

  function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(withdrawAmount);
    return amountNumber;
  }

  function updateSpanTaxt(id, depositNumber){
    
    const current =  document.getElementById(id).innerText;
const currentNumber = parseFloat(current);
const totalAmount  = depositNumber + currentNumber;
document.getElementById(id).innerText = totalAmount;

  }