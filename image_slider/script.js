const linkAdmiral = document.getElementById('link_r_admiral');
const linkSochi = document.getElementById('link_sochi');
const linkPatriotic = document.getElementById('link_r_patriotic');
const image = document.querySelector('.design_example_img');
const aLeft = document.querySelector('.arrow_left');
const aRight = document.querySelector('.arrow_right');
const cFirst = document.getElementById('circle1');
const cSecond = document.getElementById('circle2');
const cThird = document.getElementById('circle3');
const city = document.getElementById('span_city');
const area = document.getElementById('span_area');
const time = document.getElementById('span_time');
const cost = document.getElementById('span_cost');


const objImages = [
    { path: "images/image 2.jpg",
      city: "Rostov-on-Don <br>LCD admiral",
      area: "81 m2",
      time: "3.5 months",
      cost: "Upon request"

    },

    {
      path: "images/image 2_2.jpg",
      city: "Sochi <br>Thieves",
      area: "105 m2",
      time: "4 months",
      cost: "Upon request"
    },

    {
        path: "images/image 2_3.jpg",
        city: "Rostov-on-Don <br>Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request"
      }
 ]

let currentIndex = 0

const setImage = (index) => {
    image.src = objImages[index].path
    city.innerHTML = objImages[index].city
    area.innerHTML = objImages[index].area
    time.innerHTML = objImages[index].time
    cost.innerHTML = objImages[index].cost

 }

 const changeLinkColor = () => {
    if(currentIndex===0) {
        linkAdmiral.className = "projects_bar_active";
        
        linkSochi.className = "projects_bar_off";
        linkPatriotic.className = "projects_bar_off";
    }

    else if (currentIndex===1) {
        linkSochi.className =  "projects_bar_active";

        linkAdmiral.className = "projects_bar_off";
        linkPatriotic.className = "projects_bar_off";
    }

    else {
        linkPatriotic.className =  "projects_bar_active";
        
        linkSochi.className = "projects_bar_off";
        linkAdmiral.className = "projects_bar_off";

    }
 } 



 const setCircle = () => {
    if(currentIndex===0) {
        cFirst.src='svgfiles/circleActive.svg';
        cSecond.src='svgfiles/circle.svg';
        cThird.src='svgfiles/circle.svg';
        
    }

    else if (currentIndex===1) {
        cFirst.src='svgfiles/circle.svg';
        cSecond.src='svgfiles/circleActive.svg';    
        cThird.src='svgfiles/circle.svg';
    }

    else {
        cFirst.src='svgfiles/circle.svg';
        cSecond.src='svgfiles/circle.svg';
        cThird.src='svgfiles/circleActive.svg';
    }
 }



 cFirst.addEventListener('click', () => {
    currentIndex=0;
    setImage(currentIndex);
    setCircle();
    changeLinkColor();
})

cSecond.addEventListener('click', () => {
    currentIndex=1;
    setImage(currentIndex);
    setCircle();
    changeLinkColor();
})

cThird.addEventListener('click', () => {
    currentIndex=2;
    setImage(currentIndex);
    setCircle();
    changeLinkColor();
})



linkAdmiral.addEventListener('click', () => {
    currentIndex=0;
    setImage(currentIndex);
    setCircle();
    changeLinkColor();
})

linkSochi.addEventListener('click', () => {
    currentIndex=1;
    setImage(currentIndex);
    setCircle();
    changeLinkColor();
})

linkPatriotic.addEventListener('click', () => {
    currentIndex=2;
    setImage(currentIndex);
    setCircle();
    changeLinkColor();
})

aLeft.addEventListener('click', () => {
    if (currentIndex===0){
        currentIndex=objImages.length-1;
    } else  {
        currentIndex=currentIndex-1; 
    }
        setImage(currentIndex);
        setCircle();
        changeLinkColor();
})

aRight.addEventListener('click', () => {
    if (currentIndex===objImages.length-1) {
        currentIndex=0;
    } else {
        currentIndex=currentIndex+1;  
    }
    setImage(currentIndex);
    setCircle();
    changeLinkColor();
})