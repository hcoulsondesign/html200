const instructions = '\'B\' to view balance, \'D\' to make a deposit, \'W\' to withdraw money, or \'Q\' to quit';
let balance = 5000;

function action() {
  let selection = prompt(`Press a key to choose an action: ${instructions}`);

  switch (selection) {
    case 'B':
      alert(`Your balance is $${balance.toFixed(2)}.`);
      action();
    case 'D':
      deposit = prompt('How much would you like to deposit?');
      if (deposit > 0) {
      } else {
        deposit = prompt('Please enter a positive dollar amount using numbers only (without the dollar sign).');
      }
      balance += Number(deposit);
      alert(`Your new balance is $${balance.toFixed(2)}`);
      action();
    case 'W':
      withdrawal = prompt('How much would you like to withdraw?');
      balance -= Number(withdrawal);
      alert(`Your remaining balance is $${balance.toFixed(2)}`);
      action();
    case 'Q':
      break;
    default:
      help = 'Unknown entry value. Please select one of the listed letter options or press \'Q\' to exit';
      alert(help);
      //action();
  }
}
