// ------------------------------------------------------------
const heroLuke = 'https://vignette.wikia.nocookie.net/starwars/images/9/9e/Luke_Skywalker_TLJ.png/revision/latest?cb=20180110030236';
const heroC3po = 'https://imgix.ranker.com/user_node_img/50066/1001308627/original/borrowing-his-red-arm-from-a-fallen-friend-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces';
const heroR2 = 'https://pbs.twimg.com/profile_images/1356552508/r2.jpg';
const heroVader = 'https://i1.sndcdn.com/artworks-000141641500-nly690-t500x500.jpg';
const heroOwen = 'https://vignette.wikia.nocookie.net/starwars/images/9/91/OwenLarsHS-SWE.jpg/revision/latest?cb=20120428164235';
const heroLeia ='http://www.fundepot.co.uk/image/cache/data/new%20product%20images/Event%20Props/Cardboard%20Cutout/470_sc_LEIA_ORGANA-500x500.jpg';
const heroBeru ='https://clonecorridor.files.wordpress.com/2015/09/beru-lars-6.jpg';
const heroBiggs ='https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406';
const heroObi ='https://www.sideshowtoy.com/wp-content/uploads/2018/03/star-wars-obi-wan-kenobi-sixth-scale-figure-hot-toys-feature-903476.jpg';
const heroR5 = 'https://img1.cgtrader.com/items/675504/d68485d064/large/r5-d4-droid-star-wars-3d-model-max-obj-fbx-mtl.jpg';
// ------------------------------------------------------------



const btn = document.getElementById("btn");
const list = document.getElementById("list");
const li = document.querySelector(".name-item");
const showName = document.querySelector(".show-name");
const showImg = document.querySelector('.show-img');
const switchGender = document.getElementById('switch-gender')


// Display our data
const displayEyeData = document.getElementById('display-eye-data');
const displayGenderData = document.getElementById('display-gender-data');
const displayYearData = document.getElementById('display-year-data');
const displayMassData = document.getElementById('display-mass-data');
// icon place for
const displayGenderIcon = document.getElementById('display-gender-icon');
const displayEyeIcon = document.getElementById('eye-color');




// buttons next & prev
const btnPrev  = document.querySelector('.prev').addEventListener("click", prevHero);;
const btnNext  = document.querySelector('.next').addEventListener("click", nextHero);
let heroCount = 1;




// checkout numberCount
function checkMax(){
  if(heroCount >= 11){
    heroCount = 0;
  }if(heroCount <= 1){
    heroCount = 1;
  }
}
// prev Hero
function prevHero(){
  heroCount--;  
  checkMax();
  updateHero();
}
// next Hero
function nextHero(){
  heroCount++;  
  checkMax();
  updateHero();
}
// check Gender output

function checkGender(){
  if(displayGenderData === "n/a"){   
    displayGenderIcon.className = "fas fas-robot";
  }
}

(function display(){
fetch('https://swapi.dev/api/people/' + 1)
.then(function(res){
  if(res.status === 200 ){
//     console.log(res.status)
    return res.json();


  }else{
    console.log(res.status)
  }

})
.then(function(data){
  const nameVal = JSON.stringify(data.name);
  let nameValClean = nameVal.substring(1, nameVal.length-1);
  showName.innerText =  nameValClean ;

})
  })();


function updateHero(){
    fetch('https://swapi.dev/api/people/' + heroCount)
  .then(function(res){
 return res.json();
})
  .then(function(data){
  // console.log(JSON.stringify(data.name));
  // get name from Json data
  const nameVal = JSON.stringify(data.name);
  let nameValClean = nameVal.substring(1, nameVal.length-1);
  // get gender data from json
  const genderVal = JSON.stringify(data.gender);
  let genderValClean = genderVal.substring(1, genderVal.length-1);
  // get eye data from JSON
  const eyeVal = JSON.stringify(data.eye_color)
  // display eye dataf from Json
  displayEyeIcon.style.color =  data.eye_color;
  // display eye dataf from Json
  displayEyeData.innerText = eyeVal;
  let eyeValClean = eyeVal.substring(1, eyeVal.length-1);
  displayEyeData.innerText = eyeValClean;
  // Display Data year From JSON
  let yearVal = JSON.stringify(data.birth_year);
  let yearValClean = yearVal.substring(1, yearVal.length-1);

// Display Data From Json
  let massVal = JSON.stringify(data.mass);
  let massValClean = massVal.substring(1, massVal.length -1);

  console.log(massValClean)

// -----------------------------
  if(genderValClean === "n/a"){
   
  displayGenderIcon.className = "fas fa-transgender-alt ico-custom-color ico-size";
}else if(genderValClean === "male"){
  displayGenderIcon.className = "fas fa-transgender-alt ico-custom-color ico-size";
}else{
  displayGenderIcon.className = "fas fa-transgender-alt ico-custom-color ico-size";
}
// display all Data into DOM
  showName.innerText =  nameValClean ;
  displayGenderData.innerText = genderValClean;
  displayYearData.innerText = yearValClean;
  displayMassData.innerText = massValClean + ' kg';

switch (heroCount){
  case 2:
  showImg.src = heroC3po;
  break;
  case 3:
  showImg.src = heroR2;
  break;
  case 4:
  showImg.src = heroVader;
  break;
  case 5:
  showImg.src = heroLeia;
  break;
  case 6:
  showImg.src = heroOwen;
  break;
  case 7:
  showImg.src = heroBeru;
  break;
  case 8:
  showImg.src = heroR5;
  break;
  case 9:
  showImg.src = heroBiggs;
  break;
  case 10:
  showImg.src = heroObi;
  break;
  default:
  showImg.src = heroLuke;


}


})
};
