// const panels = document.querySelectorAll('.panel');

// function toggleOpen() {
//   this.classList.toggle('open');
// }

// function toggleActive(e) {
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//   } 
// }

// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


function fizzBuzz(n) {
  // Write your code here
  
  for(let i = 1; i<=n;i++){
      if(i%5 === 0 && i%3 === 0){
            console.log('FizzBuzz');
      }else if(i%5 !== 0 && i%3 === 0){
            console.log('Fizz');
      }else if(i%5 === 0 && i%3 !== 0){
            console.log('Buzz');
      }else{
            console.log(i);
      }
  }

}
fizzBuzz(15) 