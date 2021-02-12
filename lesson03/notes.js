// forEach function
let breakfastFoods = ['bacon', 'eggs', 'toast', 'coffee'];

breakfastFoods.forEach(function(food) {
  console.log(food);
})

//array within arrays
const menu = [['bacon', 'eggs', 'waffles'], ['salad', 'ham sandwich']];

for (let i = 0; i < menu.length; i++) {
  for (let j = 0; j < menu[i].length; j++) {
    console.log(menu[i][j]);
  }
}

console.log(menu[0][2]);
