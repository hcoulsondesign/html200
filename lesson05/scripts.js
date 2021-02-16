//Set variables
const instructions = '\'B\' to view balance, \'D\' to make a deposit, \'W\' to withdraw money, or \'Q\' to quit';
let balance = 5000;

//Set helpful internal functions
function deposit() {
  depositAmt = prompt('How much would you like to deposit?');
}

function checkDeposit() {
  try {
    if (Number(depositAmt) > 50000) {
      alert('Your deposit limit is $50,000 in a single transaction. Please enter a smaller deposit amount.');
      deposit();
      checkDeposit();
    } else {
      balance += Number(depositAmt);
    }
    alert(`Your new balance is $${balance.toFixed(2)}`);
  } catch (error) {
    alert('Please enter a positive dollar amount using numbers only (without the dollar sign).');
  } finally {
    action();
  }
}

function withdraw() {
  withdrawal = prompt('How much would you like to withdraw?');
}

function checkWithdraw() {
  try {
    if (Number(withdrawal) > balance) {
      alert(`You have $${balance} in your account. Please select an amount less than that to withdraw.`);
      withdraw();
      checkWithdraw();
    } else if (balance-Number(withdrawal) < 300) {
        check = prompt(`This transaction reduces your balance below $300 to a new balance of $${balance-Number(withdrawal)}. If you would like to continue, enter \'Y\' to accept.`);
        if (check == 'Y') {
          balance -= Number(withdrawal);
        }
        else {
          return;
        }
    } else {
      balance -= Number(withdrawal);
    }
    alert(`Your remaining balance is $${balance.toFixed(2)}`);
  } catch (error) {
    alert('Please enter a positive dollar amount using numbers only (without the dollar sign).');
  } finally {
    action();
  }
}

//The main deal
function action() {
  let selection = prompt(`Press a key to choose an action: ${instructions}`);

  switch (selection) {
    case 'B':
      alert(`Your balance is $${balance.toFixed(2)}.`);
      action();

    case 'D':
      deposit();
      checkDeposit();

    case 'W':
      withdraw();
      checkWithdraw();

    case 'Q':
      break;

    default:
      help = 'Unknown entry value. Please select one of the listed letter options or press \'Q\' to exit';
      alert(help);
      action();
  }
}
