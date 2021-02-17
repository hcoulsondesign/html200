//Set variables
const instructions = '\'B\' to view balance, \'D\' to make a deposit, \'W\' to withdraw money, or \'Q\' to quit';
let balance = 5000;

//Helpful internal functions set below:

//Asks user for deposit input
function deposit() {
  depositAmt = prompt('How much would you like to deposit?');
}

//Assesses user's input for validity and a series of conditions
function checkDeposit() {
  if (isNaN(depositAmt)) {
    console.log('the value entered was not a number');
    alert('Please enter a positive dollar amount using numbers only (without the dollar sign).');
    deposit();
    checkDeposit();
  } else if (Number(depositAmt) > 50000) {
    console.log('the user tried to deposit >$50k');
    alert('Your deposit limit is $50,000 in a single transaction. Please enter a smaller deposit amount.');
    deposit();
    checkDeposit();
  } else {
    console.log('the user entered an appropriate value and deposit amt');
    balance += Number(depositAmt);
    alert(`Your new balance is $${balance.toFixed(2)}`);
  }
}

//Asks user for withdrawal input
function withdraw() {
  withdrawal = prompt('How much would you like to withdraw?');
}

//Assesses user's input for validity and a series of conditions
function checkWithdraw() {
  if (isNaN(withdrawal)) {
    console.log('the value entered was not a number');
    alert('Please enter a positive dollar amount using numbers only (without the dollar sign).');
    withdraw();
    checkWithdraw();
  } else if (Number(withdrawal) > balance) {
    console.log('the user tried to withdraw more than they had in their acct');
    alert(`You have $${balance} in your account. Please select an amount less than that to withdraw.`);
    withdraw();
    checkWithdraw();
  } else if (balance-Number(withdrawal) < 300) {
    console.log('the user\'s request will reduce the balance <$300');
    potentialBal = balance - Number(withdrawal);
    check = prompt(`This transaction reduces your balance below $300 to a new balance of $${potentialBal.toFixed(2)}. If you would like to continue, enter \'Y\' to accept, or press any other key to enter a different amount.`);
    if (check == 'Y') {
      console.log('the user accepted a balance <$300');
      balance = potentialBal;
      alert(`Your remaining balance is $${balance.toFixed(2)}`);
    }
    else {
      console.log('the user did NOT accept a balance <$300');
      withdraw();
      checkWithdraw();
    }
  } else {
    console.log('the user entered an appropriate value and withdrawal amt');
    balance -= Number(withdrawal);
    alert(`Your remaining balance is $${balance.toFixed(2)}`);
  }
}

//Banking App: The Main Deal
function action() {
  //console.log('the action() function has just been called');
  let selection = prompt(`Press a key to choose an action: ${instructions}`);

  switch (selection) {
    case 'B':
      alert(`Your balance is $${balance.toFixed(2)}.`);
      console.log('action() called at end of case B switch');
      action();
      break;

    case 'D':
      console.log('the user chose the deposit option');
      deposit();
      checkDeposit();
      console.log('action() called at end of case D switch');
      action();
      break;

    case 'W':
      console.log('the user chose the withdraw option');
      withdraw();
      checkWithdraw();
      console.log('action() called at end of case W switch');
      action ();
      break;

    case 'Q':
      console.log('the user chose to quit');
      break;

    default:
      help = 'Unknown entry value. Please select one of the listed letter options or press \'Q\' to exit';
      alert(help);
      console.log('action() called after default case triggered');
      action();
  }
}
