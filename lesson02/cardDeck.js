var suit = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
var cardNum = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
for (i=0; i<=3; i++) {
  for (j=0; j<=12; j++) {
    console.log (`${cardNum[j]} of ${suit[i]}`);
  }
}
