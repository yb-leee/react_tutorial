console.log("hello world")
var season = ["봄", "여름", "가을", "겨울"]
console.log(season)

var i;
var sum = 0;

for(i = 1; i < 6; i++) {
    sum+= i;
    console.log(sum)
}

function addNum(a, b = 1) {
    var sum = a + b;
    return sum;
}

console.log(addNum(10, 50))

//while
var i = 1;
var sum = 0;

while(i < 10) {
  sum += i;
  i++;
}

//do while
var i = 1;
var sum = 0;

do {
  sum += i;
  i++;
} while(i <= 9)
