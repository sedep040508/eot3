const filterModel = document.querySelector('.filter_model')
const filterMark = document.querySelector('.filter_mark')
const filterYear = document.getElementById('.year')
const cardsContainer = document.querySelector('.cards')

function addCards(el) {
  let card = `
  <div class="card">
  <div class="flip-box">
    <div class="card_img">
      <img src=${el.img} alt="">
      <span class="card_mark">${el.mark}</span>
      <p class="card_dollar">${el.priceDollar}</p>
      <div class="inner color-white"></div>
    </div>
    <div class="info"
			<h3 class="card_tit">
				
			  </h3>
			  <p class="card_info">${el.info}</p>
        <div class="inner color-white">
                                </div>
        </div>
    </div>

    <div class="card_imges flex">
    
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
<path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#1C274C" class="qwer" id="btn"
/>
</svg>
      <a href="#openModal"><img src=${el.imges_2} alt=""></a>
      <div id="openModal" class="modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title">Связаться с пользователем</h3>
                  <a href="#close" title="Close" class="close">×</a>
                </div>
                <div class="modal-body">    
                <form>
      <label for="message">Сообщение:</label><br>
      <textarea id="message" name="message" rows="4" cols="50" class="textarea"></textarea><br>
      <button type="submit" class="submit-button">Отправить</button>
    </form>
                </div>
              </div>
            </div>
          </div>
    
  </div>
    </div>
    
  `
  cardsContainer.insertAdjacentHTML('beforeend', card)
}
//
const arrFromMark = []
cards.map(el => {
  arrFromMark.push(el.mark.toUpperCase().trimEnd().trimStart())
})
const newArrFromMark = Array.from(new Set(arrFromMark))
newArrFromMark.map(el => {
  let btn = `
  <button class="btn model">${el}</button>
  `
  filterModel.insertAdjacentHTML('beforeend', btn)
})
// фильтрация по моделям
const modelBtns = document.querySelectorAll('.model')
modelBtns.forEach(el => {
  el.addEventListener('click', function () {
    document.querySelector('.model.active').classList.remove('active')
    this.classList.add('active')
    const arrFromModel = []
    cardsContainer.innerHTML = ''
    cards.map(el => {
      if (this.innerText === el.mark.toUpperCase().trimEnd().trimStart()) {
        arrFromModel.push(el.model.toUpperCase().trimEnd().trimStart())
        addCards(el)
      } else if (this.innerText === "ВСЕ") {
        addCards(el)
      }
    })
    filterMark.innerHTML = `<button class="btn mark">ВСЕ</button>`
    const newArrFromModel = Array.from(new Set(arrFromModel))
    newArrFromModel.map(el => {
      let btn = `
      <button class="btn mark">${el}</button>
      `
      filterMark.insertAdjacentHTML('beforeend', btn)
    })

    if (this.innerText != "ВСЕ") {
      document.querySelector('.filter_mark-wrap').style.display = "block"
    } else {
      document.querySelector('.filter_mark-wrap').style.display = "none"
    }
    //год


    const markBtns = document.querySelectorAll('.mark')
    markBtns.forEach(el => {
      el.addEventListener('click', function () {
        cardsContainer.innerHTML = ''
        cards.map(el => {
          if (this.innerText === el.model.toUpperCase().trimEnd().trimStart()) {
            addCards(el)
          } else if (this.innerText === "ВСЕ") {
            addCards(el)
          }
        })
      })
    })
  })
})


// const btnFilter = document.querySelector('.filter_btn')
// btnFilter.addEventListener('click', function(){
//   cardsContainer.innerHTML = ''
//   const activeBtnMark = document.querySelector('.model.active')
//   if(activeBtnMark.innerText === "ВСЕ"){
//      cards.map(el => {
//       addCards(el)
//     })
//   }else{
//     cards.map(el => {
//       if(activeBtnMark.innerText === el.mark.toUpperCase().trimEnd().trimStart()){
//         addCards(el)
//       }
//     })
//   }
// })

cards.map(el => {
  addCards(el)
})
document.querySelector('.svg.active').classList.remove('active')
this.classList.add('active')


document.addEventListener("DOMContentLoaded", function () {
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });

  // Добавляем обработчик события отправки формы
  document.querySelector('.modal form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартное действие отправки формы
    // Ваш код для отправки сообщения на сервер
    // После успешной отправки можно закрыть модальное окно
    document.querySelector('#openModal').style.display = 'none';
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});


const button = document.querySelector('.button');
button.addEventListener('click', (e) => {
  e.preventDefault;
  button.classList.add('animate');
  setTimeout(() => {
    button.classList.remove('animate');
  },600)
})

$('.open-popup').click(function(e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});


var accordeonButtons = document.getElementsByClassName("accordeon__button");

//пишем событие при клике на кнопки - вызов функции toggle
for(var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
}

//пишем функцию
function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for(var i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
        pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if(itemClass == "accordeon__button closed") {
        this.className = "accordeon__button active";
        var panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
    }

}

(function () {

  let counter = document.querySelectorAll('.counter');
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener('scroll', function () {
    if (limit == counter.length) {
      return;
    }
    

    for (let i = 0; i < counter.length; i++) {
      let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
      let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
      if (pos < win && counter[i].dataset.stop === "0") {
        counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
        let x = 0;
        limit++; // Счетчик будет запущен, увеличиваем переменную на 1
        let int = setInterval(function () {
          // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
          x = x + Math.ceil(counter[i].dataset.to / 50);
          counter[i].innerText = x;
          if (x > counter[i].dataset.to) {
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 30);
      }
    }
  })
})();
