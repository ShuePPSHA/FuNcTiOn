function changeStyle (element) {
    element.classList.toggle("edited");
}

var i = 2;

function addElement () {
    const extraInner = document.createElement('div');
    extraInner.className = "limit__inner";
    extraInner.id = "extInner";
    const mainContainer = document.querySelector('.limit');
    mainContainer.append(extraInner);
}


 function myFunction(){
    const square = document.querySelectorAll('.limit__inner');

    const firstButton = document.querySelector('.btn');
    const secondButton = document.querySelector('.scndbtn');
    
    const frstSquare = square[0] 
    const scndSquare = square[1] 
    const thrdSquare = square[2]
    const frthSquare = square[3]
    
   
    

    firstButton.addEventListener('click', () => {
        changeStyle(frstSquare);
        changeStyle(scndSquare);
        changeStyle(thrdSquare);
        changeStyle(frthSquare);
    })
    secondButton.addEventListener('click', () => {
        if ( i % 2 == 0 ){
            addElement()
        }
        else{
            
            extInner.remove()
        }
        i++;
    })
}

myFunction()



