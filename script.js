const dratiniTeleport = document.querySelector('.dratini-teleport');
const flareonTeleport = document.querySelector('.flareon-teleport');
const dratini = document.querySelector('.dratini');
const flareon = document.querySelector('.flareon');
const dialogBox = document.querySelector('.dialog-box');
const dialogText = document.querySelector('.dialog-text');

// Генеруємо діалог
const dialog = [
    "Dratini: I'm ready for battle!",
    "Flareon: Bring it on!",
    "Dratini: Let's see what you've got!",
    "Flareon: My flames will burn you down!",
    "Dratini: I'm ready for battle!",
    "Flareon: Bring it on!",
    "Dratini: Let's see what you've got!",
    "Flareon: My flames will burn you down!",
    "Dratini: I'm ready for battle!",
    "Flareon: Bring it on!",
    "Dratini: Let's see what you've got!",
    "Flareon: My flames will burn you down!"
];

let dialogIndex = 0;

// Функція показу тексту
function showDialog() {
    if (dialogIndex < dialog.length) {
        dialogText.textContent = dialog[dialogIndex];
        dialogBox.style.opacity = 1;
        dialogIndex++;
        setTimeout(() => {
            dialogBox.style.opacity = 0;
            setTimeout(showDialog, 1000);
        }, 3000);
    }
}

// Телепорт → Покемон → Діалог
setTimeout(() => {
    dratiniTeleport.style.opacity = 0;
    flareonTeleport.style.opacity = 0;

    setTimeout(() => {
        dratini.classList.remove('hidden');
        flareon.classList.remove('hidden');

        // Добавляем класс для изменения цвета
        dratini.classList.add('unhidden');
        flareon.classList.add('unhidden');

        setTimeout(() => {
            dialogBox.classList.remove('hidden');
            showDialog();
        }, 1000);
    }, 1000);
}, 2000);

// Добавляем обработчик клика на каждого покемона
dratini.addEventListener('click', () => {
    dratini.classList.add('clicked');
    // Убираем эффект через 1 секунду
    setTimeout(() => {
        dratini.classList.remove('clicked');
    }, 1000);
});

flareon.addEventListener('click', () => {
    flareon.classList.add('clicked');
    // Убираем эффект через 1 секунду
    setTimeout(() => {
        flareon.classList.remove('clicked');
    }, 1000);
});
