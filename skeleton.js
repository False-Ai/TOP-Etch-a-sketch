let body = document.querySelector('body');
let container = document.createElement('div');
container.className="container";
body.appendChild(container);
let len=0;
let sizer = document.querySelector('.sizer');

sizer.addEventListener('click',()=>{
  len = prompt('enter the length.')

  for(i=0;i<len;i++){
  let div = document.createElement('div');
  div.className="depth";
  container.appendChild(div);
  console.log("outer rim");
  for(j=0;j<len;j++){
    let divee = document.createElement('div');
    divee.className="diver";
    div.appendChild(divee);
    console.log("inner rim");
  }
}
});



