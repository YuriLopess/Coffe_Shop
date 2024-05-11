const about = document.querySelector('.about')

const myObserver = new IntersectionObserver((entries) => {
    console.log(entries)
})

myObserver.observe(about)