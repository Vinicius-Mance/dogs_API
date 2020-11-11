const url = "https://dog.ceo/api/breeds/image/random";
const manyDogs = () => {
  fetch(url)
    .then(dogData => {
      if (!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`);
      }
      return dogData.json();
  }).then(({message}) => {
    showDog(message);
  })
    .catch(error =>{
      console.log(error.message);
  });
}
let dogsToSee = 1;
for (var i = 0; i < dogsToSee; i++) {
  manyDogs();
}

const src = "css/img.jpeg";
const showDog = photo => {
  let dogImage = document.createElement('img');
  dogImage.src = photo;
  let body = document.querySelector('body');
  body.appendChild(dogImage);
  let icon = document.getElementById('icon');
  icon.href = photo;
}
