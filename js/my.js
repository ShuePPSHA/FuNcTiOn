function changeStyle (element) {
    element.className = 'edited'
}
function addElement () {
    const extraInner = document.createElement('div')
    extraInner.className = "limit__inner";
    const mainContainer = document.querySelector('limit')
    mainContainer.append(extraInner);
}


 function myFunction(){
    const squares = document.querySelectorAll('limit__inner')
    const button = document.querySelector('btn')
    const secondButton = document.querySelector('scndbtn')
    

    button.addEventListener('click', () => {
        const firstSquare = squares[0];
        changeStyle(firstSquare);
    })
    secondButton.addEventListener('click', () => {
        addElement ()
    })
}

myFunction()



