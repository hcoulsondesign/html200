const instructions = '\'B\' to view balance, \'D\' to make a deposit, \'W\' to withdraw money, or \'Q\' to quit';
let balance = 5000;

function action() {
  let selection = prompt(`Press a key to choose an action: ${instructions}`);

  switch (selection) {
    case 'B':
      alert(`Your balance is $${balance}.`);
      let selection = prompt(`Would you like to do something else? Press ${instructions}`);
      break;
    case 'D':
      console.log('deposit');
      break;
    case 'W':
      console.log('withdraw');
    case 'Q':
      return;
    default:
      help = 'Unknown entry value. Please select one of the listed letter options or press \'Q\' to exit';
      alert(help);
      break;
  }
}
