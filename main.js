// nav list

const navBurger = document.querySelector(".nav__burger")
const headerMenu = document.querySelector(".header__menu")
const item = document.querySelector(".item")
const click = document.querySelector(".click")

navBurger.addEventListener("click", function () {
    headerMenu.classList.toggle("active")
    navBurger.classList.toggle("active")
})

item.addEventListener("click", function () {
    click.classList.toggle("active")
})

// nav list

// company

const company = document.querySelector(".company")

function com(entries) {
    // console.log(entries);
    if (entries[0].isIntersecting) {
        company.classList.add("active")
    } else {
        company.classList.remove("active")
    }
}

const server = new IntersectionObserver(com)
server.observe(company)

// company

// header__content

const imageLeft = document.querySelector(".image-left")
const imageBottom = document.querySelector(".image-bottom")
const imageTop = document.querySelector(".image-top")
const header = document.querySelector(".header")
const headerContentImg = document.querySelector(".header__content-img")

const speed = imageLeft.getAttribute("data-speed")

header.addEventListener("mousemove", (e) => {
    const X = e.pageX / 10 
    const Y = e.pageY / 10 

    imageLeft.style.transform = `translate(${X * speed}px, ${Y}px)`
    imageBottom.style.transform = `translate(${Y}px)`
    imageTop.style.transform = `translate(${X}px)`
})

// header__content


// benefits__cards

const cards = document.querySelector(".benefits__cards")
const card = document.querySelectorAll(".benefits__card")

function entries(entries) {
    // console.log(card);
    for (let i = 0; i < card.length; i++) {
        const x = card[i].getAttribute('data-speed')
        if (entries[0].isIntersecting) {
            cards.classList.add("active")
            cards.style.transform = x
        } else {
            cards.classList.remove("active")
        }
    }


}

const observer = new IntersectionObserver(entries)
observer.observe(cards)

// card

// marketingCards

const marketingCards = document.querySelector(".marketing__cards")

function marketing(entries) {
    if (entries[0].isIntersecting) {
        marketingCards.classList.add("active")
    } else {
        marketingCards.classList.remove("active")
    }
}

const marketings  = new IntersectionObserver(marketing)
marketings.observe(marketingCards)

// marketingCards

// count

const number = document.querySelectorAll(".number")
const countCards = document.querySelector(".count__cards")


function runNumber() {
    for (let i = 0; i < number.length; i++) {
        const num = number[i].innerHTML;
        client(number[i], num)
    }
}

let stopRunNumber = true

function client(e, num, i = 0) {
    i++
    e.innerHTML = i
    const stop = setTimeout(() => {
        client(e, num, i)
    }, 50);
    
    if (i == num) {
        clearTimeout(stop)
    }
}

function timerEntries(entry) {
    // console.log(entry);
    if (stopRunNumber && entry[0].isIntersecting) {
        runNumber()
        stopRunNumber = false
    }

}

const timerObserver = new IntersectionObserver(timerEntries, { threshold: 0.5 })
timerObserver.observe(countCards)

// clients

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // spaceBeetwen: 30,
    slidesPerView: 2,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});