const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');
const alignLeft = document.getElementById('alignLeft');
const alignJustify = document.getElementById('alignJustify');
const alignCenter = document.getElementById('alignCenter');
const alignRight = document.getElementById('alignRight');
const fontSize = document.getElementById('fontSize');
const capitalize = document.getElementById('capitalize');
const color = document.getElementById('color');
const inputText = document.getElementById('inputText');

// start the work
bold.addEventListener('click', function () {
    console.log('hello');
    bold.classList.toggle('selected');
    if (inputText.style.fontWeight == 'bold') {
        inputText.style.fontWeight = 'normal';
    }
    else {
        inputText.style.fontWeight = 'bold';
    }
})
// bold end
italic.addEventListener('click', function () {
    console.log('hello');
    italic.classList.toggle('selected');
    if (inputText.style.fontStyle == 'italic') {
        inputText.style.fontStyle = 'normal';
    }
    else {
        inputText.style.fontStyle = 'italic';
    }
})
// italic end
underline.addEventListener('click', function () {
    console.log('hello');
    underline.classList.toggle('selected');
    if (inputText.style.textDecoration == 'underline') {
        inputText.style.textDecoration = 'none';
    }
    else {
        inputText.style.textDecoration = 'underline';
    }
})
// underline end
const buttons = document.querySelectorAll(".hello");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove("selected");
            }
        });
        button.classList.toggle("selected");
    });
});

alignLeft.addEventListener('click', function () {
    inputText.style.textAlign = 'start';
})

alignRight.addEventListener('click', function () {
    inputText.style.textAlign = 'end';
})

alignCenter.addEventListener('click', function () {
    inputText.style.textAlign = 'center';
})

alignJustify.addEventListener('click', function () {
    inputText.style.textAlign = 'justify';
})
// align end

fontSize.addEventListener('click', function () {
    const font = parseInt(fontSize.value);
    if (font <= 9) {
        alert('you cant decrease the value');
        fontSize.value = '10'
        return;
    }
    inputText.style.fontSize = font + 'px';
})
// font end

capitalize.addEventListener('click', function () {
    console.log('hello');
    capitalize.classList.toggle('selected');
    if (inputText.style.textTransform == 'uppercase') {
        inputText.style.textTransform = 'none';
    }
    else {
        inputText.style.textTransform = 'uppercase';
    }
})
// capitalize end

color.addEventListener('input', function () {
    
    const selectedColor = color.value;
    inputText.style.color = selectedColor;
});