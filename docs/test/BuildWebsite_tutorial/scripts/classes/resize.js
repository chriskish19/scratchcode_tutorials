// keeps track of mouse states
class state
{
	constructor()
	{
		// member variables(states)
		this.MouseDown = false;
		this.MouseMove = false;
		this.MouseUp = false;
	}
	
	MouseDownPress(){this.MouseDown = true;}
	MouseMovePress(){this.MouseMove = true;}
	MouseUpPress(){this.MouseUp = true;}
	
	MouseDownIsPressed(){return this.MouseDown;}
	MouseMoveIsPressed(){return this.MouseMove;}
	MouseUpIsPressed(){return this.MouseUp;}
	
	Release()
	{
		this.MouseDown = false;
		this.MouseMove = false;
		this.MouseUp = false;
	}
}

// creates a structure for holding information about a rectangle
class rectangle
{
	constructor(_width,_height,_xPos,_yPos)
	{
		// class members
		this.width = _width;
		this.height = _height;
		this.xPos = _xPos;
		this.yPos = _yPos;
		this.right = this.width + this.xPos;
		this.bottom = this.height + this.yPos;
	}
}



// adds an invisible bounding border to an element used for clicking and dragging the element
class border
{
	// size: border thickness to add a border inside an element
	// elem: the html element
	constructor(size,elem)
	{
		// class members
		this.elem_rect = elem.getBoundingClientRect(); // returns the size of an element and its position relative to the viewport.
		
		// border rect properties
		let width = this.elem_rect.width - (size * 2);
		let height = this.elem_rect.height - (size * 2);
		let x = this.elem_rect.x + size;
		let y = this.elem_rect.y + size;
		
		// make a rect
		this.BorderRect = new rectangle(width,height,x,y);
	}
	
	// returns true if mouse position inside border and false if not
	// e: events Object
	MouseInsideBorder(e)
	{
		// get mouse position
		let mouse_x = e.clientX; 
		let mouse_y = e.clientY; 
		
		// handles left side of the border
		if(mouse_x > this.elem_rect.x && mouse_x < this.BorderRect.xPos && mouse_y > this.elem_rect.y && mouse_y < this.BorderRect.bottom)
			return true;
		// handles right side of the border
		if(mouse_x > this.BorderRect.right && mouse_x < this.elem_rect.right && mouse_y > this.elem_rect.y && mouse_y < this.elem_rect.bottom)
			return true;
		// handles top side of the border
		if(mouse_x > this.elem_rect.x && mouse_x < this.elem_rect.right && mouse_y > this.elem_rect.y && mouse_y < this.BorderRect.yPos)
			return true;	
		// handles bottom of the border
		if(mouse_x > this.elem_rect.x && mouse_x < this.elem_rect.right && mouse_y > this.BorderRect.bottom && mouse_y < this.elem_rect.bottom)
			return true;
		
		return false;
	}
	
}

// resize class to handle resizing elements
class resize{
	constructor(id)
	{
		// state
		this.MouseState = new state();
		
		// resizable element
		this.elem = document.getElementById(id);
		if(this.elem==null){console.log("id is null");}
		
		// function reference members
		this.ResizeFunc = this.Resize.bind(this); 
		this.MouseUpFunc = this.MouseUp.bind(this);
		this.MouseMoveFunc = this.MouseMove.bind(this);
		this.ChangeCursorFunc = this.ChangeCursor.bind(this);
		
		// event listeners
		this.elem.addEventListener("mousedown", this.ResizeFunc );
		this.elem.addEventListener("mouseup",this.MouseUpFunc );
		this.elem.addEventListener("mousemove",this.ChangeCursorFunc);
		
		// member variables
		// initialize them
		this.mouse_x = 0;
		this.mouse_y = 0;
		this.elem_width = 0;
		this.elem_height = 0; 
		
		// this is the area that will be able to move the element when clicked in
		this.elem_border_size = 10; // set the click border to 10px
	}
	
	Resize(e)
	{
		// make a draggable border inside the element
		let Border = new border(this.elem_border_size,this.elem);
		
		if(Border.MouseInsideBorder(e,this.elem))
		{
			this.mouse_x = e.clientX;
			this.mouse_y = e.clientY;
			
			// Calculate the dimension of element
			const styles = window.getComputedStyle(this.elem);
			this.elem_width = parseInt(styles.width, 10); // element width
			this.elem_height = parseInt(styles.height, 10); // element height
			
			// Attach the listeners
			this.elem.addEventListener('mousemove', this.MouseMoveFunc );
		}
	}
	
	MouseMove(e)
	{
		// How far the mouse has been moved
		const dx = e.clientX - this.mouse_x;
		const dy = e.clientY - this.mouse_y;
		
		 // Adjust the dimension of element
		this.elem.style.width = `${this.elem_width + dx}px`;
		this.elem.style.height = `${this.elem_height + dy}px`;
	}
	
	MouseUp()
	{
		this.elem.removeEventListener("mousemove",this.MouseMoveFunc);
	}
	
	// changes cursor to a crosshair when over the border
	ChangeCursor(e)
	{
		let Border = new border(this.elem_border_size,this.elem);
		
		if(Border.MouseInsideBorder(e,this.elem))
			this.elem.style.cursor = "move";
		else
			this.elem.style.cursor = "auto";
		
	}
}

