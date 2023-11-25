// causes the main title to slowly type itself
const MainTitle = new TextTyping('main_title');

// menu buttons
const MainMenuTutorialButton = new button('tutorial_menu_button');

// main body as a button
const MainBodyButton = new button('main_body');

// for the main menu tutorial button
let TutorialMenuDropDown = document.getElementById('tutorial_menu');


function ButtonLogic(Event){
    if(MainMenuTutorialButton.IsPressed()){
        TutorialMenuDropDown.style.display = 'flex';
        MainMenuTutorialButton.Release();
    }
    
    // handle closing the menu when clicked outside the button
    if(MainBodyButton.IsPressed() && (MainBodyButton.PressCount % 2 == 0)){
        TutorialMenuDropDown.style.display ='none';
        MainBodyButton.Release();
    }
}

