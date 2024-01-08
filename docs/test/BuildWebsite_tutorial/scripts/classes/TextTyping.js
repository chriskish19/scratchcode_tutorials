// adds text generation similar to how chatGTP generates text on screen with the flashing moving cursor  
class TextTyping{
    constructor(title_id){
        // gets the title html element
        this.title = document.getElementById(title_id);
        
        // check if its valid id
        if(this.title==null){
            console.log("error cant get element in TextTyping class");
        }

        // get the title text in string form
        this.titleText = this.title.innerText;
        
        // set the html title text to blank string
        this.title.innerText ='';

        // creates a span html element
        this.cursor = document.createElement('span');
        
        // set the class name of the newly created span
        this.cursor.className = 'cursor';

        // adds the cursor to the title element
        this.title.appendChild(this.cursor);

        // add an image of a cursor
        // Create an image element
        this.moving_cursor = document.createElement('img');

        // Set the source of the image
        this.moving_cursor.src = 'images/cursor.png'; 

        // Optional: Set other attributes like alt, width, height, etc.
        this.moving_cursor.alt = 'moving cursor';
        this.moving_cursor.width = 50; // Set the width as needed
        this.moving_cursor.height = 50; // Set the height as needed

        // Insert the image under title node
        this.title.appendChild(this.moving_cursor);


        // add a mouse hover over listener
        // document.getElementById(container_id).addEventListener('DOMContentLoaded',this.DisplayText.bind(this));
        
        // run the function once everything is loaded on the webpage
        window.onload = this.DisplayText();
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async DisplayText(){
        for(let i =0;i<this.titleText.length;i++){
            this.title.insertBefore(document.createTextNode(this.titleText[i]), this.moving_cursor);
            await this.sleep(100); // Adjust typing speed here
        }
    }
}