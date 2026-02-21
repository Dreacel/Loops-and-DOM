const animals = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Goat","Monkey","Rooster","Dog","Pig"];

const text = document.querySelector(".title")
const changeColor = document.querySelector(".newColor")

changeColor.addEventListener('click', function () {
    text.classList.toggle('change');
});

for (animal of animals) {
    console.log("your animal is a " + animal);
}

let loading = 0;

while(loading < 100){
    console.log("website is loading");

    loading++;
}

