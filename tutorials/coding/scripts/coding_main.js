// copy buttons
const btn_cpp_helloworld = new button("cpp_helloworld_cpybtn");
const btn_cs_helloworld = new button("csharp_helloworld_cpybtn");
const btn_cpp_ifelse = new button("cpp_ifelse_cpybtn");
const btn_cpp_variables = new button("cpp_variables_cpybtn");
const btn_cpp_functions = new button("cpp_functions_cpybtn");
const btn_js_helloworld = new button("js_helloworld_cpybtn");
const btn_java_helloworld = new button("java_helloworld_cpybtn");
const btn_java_ifelse = new button("java_ifelse_cpybtn");
const btn_cs_variables = new button("cs_variables_cpybtn");
const btn_java_functions = new button("java_functions_cpybtn");
const btn_cpp_types = new button("cpp_types_cpybtn");
const btn_cpp_whileloop = new button("cpp_whileloop_cpybtn");
const btn_cpp_forloop = new button('cpp_forloop_cpybtn');
const btn_cpp_dowhile = new button('cpp_dowhile_cpybtn');
const btn_cpp_arrays = new button('cpp_arrays_cpybtn');
const btn_asm_helloworld = new button('asm_helloworld_cpybtn');
const btn_js_array = new button('js_array_cpybtn');

// Main title TextTyping
const MainTitle = new TextTyping('main_title');

// menu buttons
const MainMenuTutorialButton = new button('tutorial_menu_button');
const ArrowButton = new button('arrow_button');

// main body as a button
const MainBodyButton = new button('main_body');

// for the main menu tutorial button
let TutorialMenuDropDown = document.getElementById('tutorial_menu');
let SideBarMenu = document.getElementById('side-bar-menu');



function ButtonLogic(Event){
    CopyButtonPressed(btn_cpp_helloworld,'cpp_helloworld');
    CopyButtonPressed(btn_cs_helloworld,'csharp_helloworld');
    CopyButtonPressed(btn_cpp_ifelse,'cpp_ifelse');
    CopyButtonPressed(btn_cpp_variables,'cpp_variables');
    CopyButtonPressed(btn_cpp_functions,'cpp_functions');
    CopyButtonPressed(btn_js_helloworld,'js_helloworld');
    CopyButtonPressed(btn_java_helloworld,'java_helloworld');
    CopyButtonPressed(btn_java_ifelse,'java_ifelse');
    CopyButtonPressed(btn_cs_variables,'cs_variables');
    CopyButtonPressed(btn_java_functions,'java_functions');
    CopyButtonPressed(btn_cpp_types,'cpp_types');
    CopyButtonPressed(btn_cpp_whileloop,'cpp_whileloop_code');
    CopyButtonPressed(btn_cpp_forloop,'cpp_forloop_code');
    CopyButtonPressed(btn_cpp_dowhile,'cpp_dowhile_code');
    CopyButtonPressed(btn_cpp_arrays,'cpp_array_code');
    CopyButtonPressed(btn_asm_helloworld,'asm_helloworld');
    CopyButtonPressed(btn_js_array,'js_array');

    if(MainMenuTutorialButton.IsPressed()){
        TutorialMenuDropDown.style.display = 'flex';
        MainMenuTutorialButton.Release();
    }
    
    // handle closing the menu when clicked outside the button
    if(MainBodyButton.IsPressed() && (MainBodyButton.PressCount % 2 == 0)){
        TutorialMenuDropDown.style.display ='none';
        SideBarMenu.style.display = 'none';
        MainBodyButton.Release();
    }

    if(ArrowButton.IsPressed()){
        SideBarMenu.style.display = 'block';
        ArrowButton.Release();
    }
}

function CopyCode(id){
    const codeBlock = document.getElementById(id);
    const textToCopy = codeBlock.textContent;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy).then(function() {
        // Successfully copied
        alert('Code copied to clipboard!');
    }).catch(function(err) {
        // There was an error
        console.error('Could not copy text: ', err);
    });
}

// button: the button variable name
// id: the code element id
function CopyButtonPressed(Button,id){
    if(Button.IsPressed()){
        // copy the code to the clipboard
        CopyCode(id);

        // release button
        Button.Release();
    }
}

