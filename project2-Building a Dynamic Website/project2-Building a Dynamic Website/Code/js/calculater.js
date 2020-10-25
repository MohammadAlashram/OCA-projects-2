const buttons = document.querySelectorAll('.row button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');
// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
// calculate function
function calculate (event){
  // current clicked buttons value
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  }
   else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}
// function factorial(n)
factorial = (n) =>{
    var n = document.getElementById('display1').value;
    let answer = 1;
        if (n === 0)
       {
          return 1;
       }
       else{
         for(let i = 1; i<=n;i++){
            answer = answer * i;
         }
         display.value = answer;
        // return answer;        
    }   
      } 
      // function absolute(n)
      absolute = (n) => {
        var n = document.getElementById('display1').value;
        display.value = Math.abs(n);
      }
  