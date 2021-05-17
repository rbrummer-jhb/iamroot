const obj = {
    firstName: 'Michael',
    lastName: 'Scott',
    age: 55 - 10,
    job: 'Regional Manager',
    friends: ['Dwight','Kevin','Oscar']
};
console.log(obj.lastName);
console.log(obj['firstName']);

const nameKey = 'Name';
console.log(obj['first' + nameKey]);
console.log(obj['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Michael? Choose between firstName, lastName, age, job, and friends');
// console.log(obj[interestedIn]);

// if (obj[interestedIn]) {
//     console.log(obj[interetedIn]);
// } else {
//     console.log('Wrong request');
// }

obj.location = 'Scranton';
console.log(obj);

// Challenge
// "Michael has 3 friends and his best friend is called Dwight."

console.log(`${obj.firstName} has ${obj.friends.length} friends and his best friend is ${obj.friends[0]}`);