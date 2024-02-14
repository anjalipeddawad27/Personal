//header

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


//typing efftect
let typed = new typed('.auto-input', {
    string: ['Front-End Developer!', 'UI Designer!', 'freelanceer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,

})

//active links
let navLinks = document.querySelectorAll('nav ul li a')

let section = document.querySelectorAll('section')
window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 20
    section.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            })
        }
    })
})
