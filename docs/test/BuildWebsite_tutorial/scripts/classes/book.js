class book
{
	constructor(totalPages)
	{
		// class members
		this.TotalPages = totalPages-1; // using book in an array so minus 1
		this.CurrentPage = 0;
		
	}
	
	FowardPage()
	{
		if(this.CurrentPage < this.TotalPages)
			this.CurrentPage++;
	}
	
	BackPage()
	{
		if(this.CurrentPage > 0)
			this.CurrentPage--;
		
	}
	
	SetCurrentPage(newPage)
	{
		// within bounds of 0 to TotalPages
		if(newPage>-1 && newPage<=this.TotalPages)
			this.CurrentPage = newPage;
		else
			console.log("error page out of bounds");
	}
	
}