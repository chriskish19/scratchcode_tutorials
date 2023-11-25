// causes the main title to slowly type itself
const MainTitle = new TextTyping('main_title');

// menu buttons
const MainMenuTutorialButton = new button('tutorial_menu_button');
const ArrowButton = new button('arrow_button');

// main body as a button
const MainBodyButton = new button('main_body');

// for the main menu tutorial button
let TutorialMenuDropDown = document.getElementById('tutorial_menu');
let SideBarMenu = document.getElementById('side-bar-menu');

// for the tutorial
const MyButton = new button('b1');
let title = document.getElementById('t1');

function ButtonLogic(Event){
    if(ArrowButton.IsPressed()){
        SideBarMenu.style.display = 'block';
        ArrowButton.Release();
    }

    if(MainMenuTutorialButton.IsPressed()){
        TutorialMenuDropDown.style.display = 'flex';
        MainMenuTutorialButton.Release();
    }

    if(MainBodyButton.IsPressed() && (MainBodyButton.PressCount % 2 == 0)){
        SideBarMenu.style.display = 'none';
        TutorialMenuDropDown.style.display ='none';
        MainBodyButton.Release();
    }

    if(MyButton.IsPressed()){
        title.textContent = 'Hello World';
        MyButton.Release();
    }
}


