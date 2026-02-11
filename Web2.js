const button = document.getElementById('btn');
const title = document.getElementById('title');

button.addEventListener('click', () => {
    const bgHue = Math.random() * 360;
    const bgColor = `hsl(${bgHue}, 80%, 80%)`;

    const textHue = Math.random() * 360;
    const textColor = `hsl(${textHue}, 90%, 20%)`;

    title.style.fontSize = "60px"

    document.body.style.backgroundColor = bgColor;
    title.style.color = textColor;

    title.innerText = "色がバラバラに変わったよ！";
});
