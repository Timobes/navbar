const link = document.getElementById('link')
const pop = document.getElementById('pop')

link.addEventListener('click', function () {
    console.log('status')
    pop.classList.toggle('visible')
})

document.getElementById('burger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    const buttons = document.getElementById('buttons');

    // Переключаем класс active для навигации и кнопок
    nav.classList.toggle('active');
    buttons.classList.toggle('active');
});

