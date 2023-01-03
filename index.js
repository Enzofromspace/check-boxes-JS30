// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Check Multiple Boxes with JS</h1>`;

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
  //console.log(e);
  //check for shift key
  let inBetween = false;
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      //console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }
      if(inBetween){
        checkbox.checked = true;
      }
    });
  }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

//console.log(checkboxes);