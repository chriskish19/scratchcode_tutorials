// make an instance of a button 
const Mybutton = new button('b1');

// get the title html element
let title = document.getElementById('t1');

// adding the ability to resize the header
const HeaderResize = new resize('t1');

function ButtonLogic(Event){
    if(Mybutton.IsPressed()){
        title.textContent = 'Hello World';

        Mybutton.Release();
    }
}