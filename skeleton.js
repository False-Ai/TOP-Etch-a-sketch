let body = document.querySelector('body');
let len=0;
let sizer = document.querySelector('.sizer');
let container = document.createElement('div');

sizer.addEventListener('click', () => {
  len = prompt('enter the length.')
  if (len <= 0 || len > 100 || isNaN(len)) {
    len = 20;
    alert("Invalid length, setting to default 20.");
  }

  //Delete the container
  if (container.parentNode) {
    container.remove();
  }
  //Create a new container
  container = document.createElement('div');
  container.className="container";
  body.appendChild(container);

  for (let i = 0; i < len; i++) {
    let row = document.createElement('div');
    row.className = "depth";
    container.appendChild(row);

    for (let j = 0; j < len; j++) {
      let cell = document.createElement('div');
      cell.className = "diver";
      cell.dataset.darkness = '0';

      cell.addEventListener('mouseenter', () => {
        let darkLevel = parseInt(cell.dataset.darkness);

        if (darkLevel < 10) {
          darkLevel++;
          cell.dataset.darkness = darkLevel.toString();


        // cell.style.backgroundColor = `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${darkLevel/10})`;

        cell.style.backgroundColor = `rgba(0,0,0,${darkLevel/10})`
        }
      });

      row.appendChild(cell);
    }
  }
});




