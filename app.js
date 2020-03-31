const button = document.getElementById('toss-button');
const dogImage = document.getElementById('dog-image');
const energyStatus = document.getElementById('energy-level');
const throwsSpan = document.getElementById('current-throws');

let numberOfThrows = 0;

button.addEventListener('click', () => {
    numberOfThrows++;
    throwsSpan.textContent = numberOfThrows;
    if(numberOfThrows>5) {
        energyStatus.textContent = 'Slowing down';
        dogImage.src = "https://mydogsdayinn.net/wp-content/uploads/2016/08/8915975033_e7129952e5_b.jpg";
    }
});

