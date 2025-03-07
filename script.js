const compliments = [
    "Твоя улыбка освещает мой мир ярче, чем все звёзды на небе вместе взятые ✨",
    "Каждая минута с тобой превращает обычный день в волшебную сказку 🌟",
    "Ты как утренний кофе - делаешь мой день особенным с самого начала ☕",
    "Твои глаза - это целая вселенная, в которой я хочу потеряться навсегда 🌌",
    "С тобой даже самый обычный поход в магазин становится приключением 🛍️",
    "Ты как весенний дождь - освежаешь и даришь новую жизнь всему вокруг 🌸",
    "Твоё присутствие делает любой момент особенным, как будто время останавливается ⏳",
    "Ты как музыка - наполняешь мою жизнь гармонией и радостью 🎵",
    "С тобой я чувствую себя самым счастливым человеком на свете 💫",
    "Ты как солнечный луч - согреваешь и даришь надежду даже в самый пасмурный день ☀️"
];

const messageElement = document.getElementById('message');
const generateButton = document.getElementById('generateBtn');

function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    messageElement.textContent = compliments[randomIndex];
    
    // Добавляем анимацию появления
    messageElement.style.opacity = '0';
    setTimeout(() => {
        messageElement.style.opacity = '1';
    }, 100);
}

generateButton.addEventListener('click', generateCompliment);

// Добавляем плавное появление текста
messageElement.style.transition = 'opacity 0.3s ease-in-out'; 