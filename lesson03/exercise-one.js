let ausStates = ['Queensland', 'New South Wales', 'Victoria', 'South Australia', 'Northern Territory', 'Western Australia'];

console.log(ausStates);

ausStates.push('Tasmania');

console.log(ausStates);

ausStates.splice(2,1);

console.log(ausStates);

const statesList = ausStates.join(',');

console.log(statesList);
