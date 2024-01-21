
window.onload = function  (){
 const  storedBalance =  localStorage.getItem('balanceValue');
   if( storedBalance !==null) {
document.getElementById('balance').innerText = parseFloat(storedBalance);
   }
   const storedTrans =JSON.parse(localStorage.getItem('transactions')) || [] ;
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
       // const transferValue = Number(transfer.innerText) + Number(value);
       // transfer.innerText = transferValue;
        balance.innerText = balanceValue;
        transferAmount.value = '';
        localStorage.setItem('balanceValue',balanceValue);
        alert(`$${value} succesfully transferred to the profile B. `);
        simulateTransaction(value,'debit');
    }
})  


// function simulateTransaction(amount, type) {
//     const transactionList = document.getElementById('transactionList');
//     const listItem = document.createElement('li');
// const transText = `${type === 'debit' ? '-' : '+'}$${amount}, ${new Date().toLocaleString()}`;
//      listItem.textContent=transText;
//    transactionList.appendChild(listItem);
// const storedTrans=JSON.parse( localStorage.getItem('transactions')) || [];
// storedTrans.push(transText);
//     localStorage.setItem('transactions',JSON.stringify(storedTrans));
//   }
  function simulateTransaction(amount, type) {
    const transactionList = document.getElementById('transactionList');
    const listItem = document.createElement('li');
    const transText = `${type === 'debit' ? '-' : '+'}$${amount}, ${new Date().toLocaleString()}`;
    
  
    const textNode = document.createTextNode(transText);
    listItem.appendChild(textNode);
    
    transactionList.appendChild(listItem);

    const storedTrans = JSON.parse(localStorage.getItem('transactions')) || [];
    storedTrans.push(transText);
    localStorage.setItem('transactions', JSON.stringify(storedTrans));
  }

  

