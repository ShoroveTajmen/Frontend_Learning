 var numberrs = [78, 45, 98, 45];
 //we push to add element to an array at the last
 numberrs.push(100);
 console.log(numberrs);

 var friends = ['balam', 'kalam', 'salam'];
 friends.push('gelam');
 friends.push('pailam');
 //add element at the begining of the array
 friends.unshift('shorove');
 friends.unshift('tajmen');
 //remove element at the begining of the array
 friends.shift();
 console.log(friends);

 //use pop to get rid off last element of the array
 console.log(numberrs);
 numberrs.pop();
 console.log(numberrs);
 var element = numberrs.pop();
 console.log(element);