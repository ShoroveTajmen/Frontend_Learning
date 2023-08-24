const products = [
  { id: 1, name: "lenovo", price: 650000 },
  { id: 2, name: "dcl", price: 50000 },
  { id: 3, name: "mac", price: 560000 },
  { id: 4, name: "walton", price: 60000 },
  { id: 5, name: "accer", price: 80000 },
];

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture(subject){
    console.log(`Sir is teaching ${subject}`);
  }
}

const tapon = new Teacher('tapon', 'physics');
tapon.lecture('physics');
console.log(tapon);
