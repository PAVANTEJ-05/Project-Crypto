
window.onload = function  (){
    const username = localStorage.getItem('username')
 const  storedBalance =  localStorage.getItem(`${username}_balanceValue`);
   if( storedBalance !==null) {
document.getElementById('balance').innerText = parseFloat(storedBalance);
   }
   const storedTrans =JSON.parse(localStorage.getItem(`${username}_transactions`)) || [] ;
const storedList = document.getElementById('transactionList')
if(storedList !== null && storedTrans !== null && storedTrans !== undefined && storedList !== undefined){
    storedTrans.forEach( trans =>{
const listItem =document.createElement('li');
listItem.textContent= trans;
storedList.appendChild(listItem);
    })

}

}
function openLoginPopup() {
     document.getElementById('loginPopup').style.display = 'block';
}

function openSignupPopup() {
    document.getElementById('signupPopup').style.display = 'block';
}
function closePopup(id){
    document.getElementById(id).style.display='none';
}
function showTransferForm() {
    document.getElementById('transferForm').style.display = 'block';
      }
function showBalance(){
    document.getElementById('Balance').style.display ='block';
  }
function showTransactionHistory() {
    document.getElementById('transactionHistory').style.display = 'block';
}
  const transfer= document.getElementById('transfer'),
        balance = document.getElementById('balance'),
        transferAmount=document.getElementById('transferAmount')

  transfer.addEventListener('click', () => {
    const value = transferAmount.value;
    if (Number(value) === 0 || Number(value) < 0) {
        alert('Please! Enter valid amonut');
    } else if (Number(value) > Number(balance.innerText)) {
        alert("You don't have that much balance to withdraw");
    }  else {
        const balanceValue = Number(balance.innerText) - Number(value);
        balance.innerText = balanceValue;
        transferAmount.value = '';
        localStorage.setItem(`${username}_balanceValue`,balanceValue);
        alert(`${value}BTC succesfully transferred to the profile B. `);
        simulateTransaction(value,'debit');
    }
})  
  function simulateTransaction(amount, type) {
    const transactionList = document.getElementById('transactionList');
    const listItem = document.createElement('li');
    const transText = `${type === 'debit' ? '-' : '+'}${amount} BTC, ${new Date().toLocaleString()}`;
    const textNode = document.createTextNode(transText);
    
    listItem.appendChild(textNode);
    transactionList.appendChild(listItem);

    const storedTrans = JSON.parse(localStorage.getItem(`${username}_transactions`)) || [];
    storedTrans.push(transText);
    localStorage.setItem(`${username}_transactions`, JSON.stringify(storedTrans));
  }

  

