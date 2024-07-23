const expandButtons = document.querySelectorAll('.expand');

for (const button of expandButtons) {
    button.addEventListener('click', (event) => {
        const id = button.id;
        const mainParent = button.parentElement.parentElement;
        const response = document.querySelector('#response-' + id);

        mainParent.classList.toggle('active');
        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            button.src = 'assets/images/icon-minus.svg';
        } else {
            button.src = 'assets/images/icon-plus.svg';
        }
    });
}
