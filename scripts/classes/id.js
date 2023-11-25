class id
{
	constructor(_id)
	{
		// get the element
		this.elem = document.getElementById(_id);
		if(this.elem==null){console.log(_id + " element is null");}
		
		// show value meaning false for no show and true for show the element
		this.show = false;
	}
	
	ChangeState()
	{
		if(this.show==false)
			this.show=true;
		else
			this.show = false;
	}
	
	Reset()
	{
		this.show = false;
		this.elem.className = "hidden";
	}
	
	ChangeStyle()
	{
		if(this.show)
			this.elem.style.display = "block";
		else
			this.elem.style.display="none";
	}
	
	ChangeClass(class_name)
	{
		this.elem.className = class_name;
	}
}