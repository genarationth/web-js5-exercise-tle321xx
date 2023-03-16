//Ex1
let queue = ['Sofia', 'David', 'Juan'];
queue.push('Sara', 'Augustin');
queue.shift();

queue.splice(2, 0, 'Renata');
queue.push('Elena');

console.log(queue);

//Ex2
for (let i = 0; i <= 5; i++) {
    let temp = ''
    for (let j = 0; j <= i; j++) {
      temp += '*'
    }
    console.log(temp)
  }

//Ex3

let y = 0;
while (y < 100)
{
    y *= 1;
    if (y % 2 != 0) {
        console.log(y);
    }
}

let sum = 0;






