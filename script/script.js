// ФИКСИРОВАННОЕ МЕНЮ, ДЛЯ СВЯЗИ СО МНОЙ
let counterMenu = 0;
let arr = document.getElementsByClassName('menu-btn');
let arrmenuBlock__menu = document.getElementsByClassName('menuBlock__menu');

arr[0].addEventListener("click", function(){
    
    for (let index = 0; index < 1; index++) {
        if(counterMenu == 0){
            this.classList.add('activeting');
            counterMenu++;
            arrmenuBlock__menu[0].classList.add('activate');

        }else{
            this.classList.remove('activeting');
            arrmenuBlock__menu[0].classList.remove('activate');
            counterMenu--;
        }   
    }
        
});



// ГЕНЕРАЦИЯ ПРОЕКТОВ

let projects = {
    'project1' : {
        title: 'Training Project',
        discription: 'Описание Project 1, Описание Project 1, Описание Project 1',
        img: './img/projects/Training-project. Faststart.jpg',
        link: 'https://relaxtmeee.github.io/training-project/'
    },
    'project2' : {
        title: 'Заголовок Project 2',
        discription: 'Описание Project 1, Описание Project 1, Описание Project 1',
        img: './img/projects/Training-project. Faststart.jpg',
        link: 'https://relaxtmeee.github.io/training-project/'
    },
    'project3' : {
        title: 'Заголовок Project 3',
        discription: 'Описание Project 1, Описание Project 1, Описание Project 1',
        img: './img/projects/Training-project. Faststart.jpg',
        link: 'https://relaxtmeee.github.io/training-project/'
    }
}

let counter = 0;
const template = function(tmp){
    
    if(counter%2 == 0){
        return `
        <section class="project1">
            <div class="project1__demo anim-items">
                <a href="${tmp.link}" target="_blank">
                    <img src="`+ tmp.img +`">
                </a>
            </div>
            <div class="project__discription">
                <div class="project1__title anim-items">
                    `+ tmp.title +`
                </div>
                <div class="project1__discriptionDiscription anim-items">
                    `+ tmp.discription +`
                </div>
            </div>
        </section>

    `;
    }else{
        return `
        <section class="project2">
            <div class="project2__discription">
                <div class="project2__title anim-items">
                    `+ tmp.title +`
                </div>
                <div class="project2__discriptionDiscription anim-items">
                    `+ tmp.discription +`
                </div>
            </div>
            <div class="project2__demo anim-items">
                <a href="${tmp.link}" target="_blank">
                    <img src="`+ tmp.img +`">
                </a>
            </div>
        </section>

    `;
    }
    
};

for(project in projects){
    document.querySelector('article').innerHTML += template(projects[project]);
    counter++;
}


// АНИМАЦИЯ ПРИ СКРОЛЛЕ

const animItems = document.querySelectorAll('.anim-items');
// console.log(document.querySelectorAll('.anim-items'));
if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for(let index = 0; index < animItems.length; index ++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active');
            // }else{
            //     if(!animItem.classList.contains('anim-no-hide')){
            //         animItem.classList.remove('active');
            //     }
                
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}

    }

    setTimeout(() => {
        animOnScroll();
    }, 400)
    
}


// Анимация заголовков проектов при наведении на сам проект

const projectsAnim = document.querySelectorAll('.project1__demo');
const projectsTitle = document.querySelectorAll('.project1__title');

for (let index = 0; index < projectsAnim.length; index++) {
    const projectAnim = projectsAnim[index];
    const projectTitle = projectsTitle[index];

    projectAnim.addEventListener('mouseover', funcover);
    function funcover(){
        projectTitle.setAttribute("style", "color:rgb(83, 124, 92); font-size: 40px");
    }
    projectAnim.addEventListener('mouseout', funcout);
    function funcout(){
        projectTitle.setAttribute("style", "color:rgb(113, 169, 158); font-size: 30px");
    }
}

const projects2Anim = document.querySelectorAll('.project2__demo');
const projects2Title = document.querySelectorAll('.project2__title');

for (let index = 0; index < projects2Anim.length; index++) {
    const project2Anim = projects2Anim[index];
    const project2Title = projects2Title[index];

    project2Anim.addEventListener('mouseover', funcover);
    function funcover(){
        project2Title.setAttribute("style", "color:rgb(83, 124, 92); font-size: 40px");
    }
    project2Anim.addEventListener('mouseout', funcout);
    function funcout(){
        project2Title.setAttribute("style", "color:rgb(113, 169, 158); font-size: 30px");
    }
}