// classes
// button class 
class button{
	constructor(id)
	{
		this._button = document.getElementById(id);
		if(this._button==null){console.log("error cant get element id");}
		this._button.addEventListener("click",this.toCall.bind(this));
		
		// class members
		this.ID = id;
		this._pressed = false;
		this.PressCount =0;
	}
	
	Release(){
		this._pressed = false; 
		this.ResetPressCount();
	}
	
	Press(){
		this._pressed = true; 
		this.PressCount++;
	}
	
	IsPressed() {
		return this._pressed;
	}
	
	// function that is called when a button is clicked
	toCall(Event){
		this.Press(); 
		ButtonLogic(Event);
	}
	
	ResetPressCount(){
		this.PressCount=0;
	}
	
	ChangeButtonText(_text){
		this._button.innerHTML = _text;
	}

	GetButtonElem(){
		return this._button;
	}

	GetId(){
		return this.ID;
	}
}

// ButtonLogic() needs to be implemented in order to use the class