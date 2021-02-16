function action() {
  let selection = prompt('Press a key to choose an action: \'B\' to view balance, \'D\' to make a deposit, \'W\' to withdraw money, or \'Q\' to quit');

  switch (selection) {
    case 'B':
      console.log('balance');
      break;
    case 'D':
      console.log('deposit');
      break;
    case 'W':
      console.log('withdraw');
    case 'Q':
      console.log('quit');
    default:
      help = 'Unknown entry value. Please select one of the listed letter options or press \'Q\' to exit';
      alert(help);
      break;
  }
}
