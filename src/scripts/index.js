// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

let myPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(modal);
  }, 60000);
});

myPromise.then((result) => {
  result.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});
