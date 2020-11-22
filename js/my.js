function changeStyle (element) {
    element.classList.toggle("edited");
}

function addElement () {
    const extraInner = document.createElement('div');
    extraInner.className = "limit__inner";
    extraInner.id = "extInner";
    const mainContainer = document.querySelector('.limit');
    mainContainer.append(extraInner);
    extraInner.innerHTML = '<span class="close"></span>';
}

 function myFunction(){
    const firstButton = document.querySelector('.btn');
    const secondButton = document.querySelector('.scndbtn');

    secondButton.addEventListener('click', () => {
        addElement()
    })

    firstButton.addEventListener('click', () => {
        const squares = document.querySelectorAll('.limit__inner');

        squares.forEach(square => {
            changeStyle(square);
        });
    })

    const close = document.querySelector('.close')

    close.addEventListener('click', () => {
        
        extInner.removeChild(this);
    })
}
myFunction()



