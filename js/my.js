function changeStyle (element) {
    element.classList.toggle("edited");
}



function addElement () {
    const extraInner = document.createElement('div');
    extraInner.className = "limit__inner";
    extraInner.id = "extInner";
    const mainContainer = document.querySelector('.limit');
    mainContainer.append(extraInner);
}

 function myFunction(){
    const squares = document.querySelectorAll('.limit__inner');

    const firstButton = document.querySelector('.btn');
    const secondButton = document.querySelector('.scndbtn');

    firstButton.addEventListener('click', () => {
        
        squares.forEach(square => {
            changeStyle (square);

        });
    })
    secondButton.addEventListener('click', () => {
      
            addElement()
       
    })
}

myFunction()



