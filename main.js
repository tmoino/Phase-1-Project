// document.addEventListener('DOMContentLoaded',() =>{
  const dogImage = document.getElementById("dog-image")
  const dogBtn = document.getElementById("dogButton")
  const doglist = document.getElementById("listbreeds")


  dogBtn.addEventListener("click", fetchDogImage)

  const catImage = document.getElementById("cat-image")
  const catBtn = document.getElementById("catButton")
  // const breedImg = document.getElementById("listBreeds")
  

  catBtn.addEventListener("click", fetchCatImage)

  function fetchDogImage (){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then (response => response.json())
    .then (data => 
      // console.log(data.message)
      dogImage.innerHTML = `<img src = "${data.message}">`
    );
  }

  function fetchCatImage (){
    // const randomImage = 'https://api.thecatapi.com/v1/images/search';
    fetch("https://aws.random.cat/meow")
    .then (response => response.json())
    .then (data => 
      // console.log(data.file)
      catImage.innerHTML = `<img src = "${data.file}">`
  );
    
  }








  // function fetchCatImage (){
  //   fetch("https://api.thecatapi.com/v1/images/search")
  //   .then (response => response.json)
  //   .then (data => {
  //      catImage.innerHTML = `<img src = "${data.url}"> `
      
      
  //   });
  // }

function listBreed (){
  fetch('')
  .then (reponse => reponse.jsom)
  .then(data =>{

  })
}

likeBtn = document.getElementById("likeBtn")

let count = 0;
function likes(){
  updateDisplay(++count)
}
function updateDisplay(val) {
  document.getElementById("label1").innerHTML = val;
}
let disCounter = 0;

function dislikes(){
  updateDisplapyDislikes (++disCounter)
}
function updateDisplapyDislikes(val){
  document.getElementById("label2").innerHTML= val;
}
submitBtn = document.getElementById("submit")
submitBtn.addEventListener( "click",function(){
  let data = ""
  let name = document.getElementById("userName").value
  let comment = document.getElementById("userComment").value
 
  // data = "User name :"+name+<br/> "User comment :"+comment
  data = name+ "  :"+comment
  
 
  var li = document.createElement("li");
  var text = document.createTextNode(data);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);
})
 
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.listButton');

fetch(BREEDS_URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
    // console.log(breedsArray);
  });
  async function loadBreed(){
    var selectedbreed = document.getElementById("select").value
    // console.log (selectedbreed)
    let reponse = await fetch (`https://dog.ceo/api/breed/${selectedbreed}/images`)
    const data =  await reponse.json()
    // console.log(data.message)
    createslideshow(data.message)
  }

  function createslideshow (images){
    // console.log (images)
    // doglist.innerHTML= `
    // <div class="slideshow" style="background-image: url('${images[0]}') "></div>
    // `
    let currentPosition = 0
    doglist.innerHTML = `<img class = "slide" src = "${images[0]}">`
    doglist.innerHTML = `<img class = "slide" src = "${images[1]}">`
  
    currentPosition +=2
    setInterval(nextslide, 6000)

    function nextslide(){
      doglist.insertAdjacentHTML ("beforeend", doglist.innerHTML = `<img class = "slide" src = "${images[currentPosition]}">`)
      setTimeout(function(){
        document.querySelector (".slide").remove()
      },3000)
      if (currentPosition +1 >= images.length){
        currentPosition = 0
      }else{
        currentPosition++
      }
    }
  }