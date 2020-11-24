function changeStyle (element) {
    element.classList.toggle("edited");
}



function addElement () {
    const extraInner = document.createElement('div');
    const date = new Date
    const id = date.toISOString();
    extraInner.className = "limit__inner";
    extraInner.id = id;
    const mainContainer = document.querySelector('.limit');
    mainContainer.appendChild(extraInner);
    extraInner.innerHTML = `<span class="close" onclick="deleteElement('${id}')"></span>${id}`;
}

function deleteElement(id){
    const element = document.getElementById(id);
    element.remove();
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


}
myFunction()



