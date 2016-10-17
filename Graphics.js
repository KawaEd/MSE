$(document).ready(function()
{
	//First we need to create our Graph
	createGraph(/*some args here*/);

	/*Now we declare the function itself*/
	/*
	*@param data, the data to be used
	*@param container, where it is to be placed
	*/
	function createGraph(data, container)
	{
		//local variables (note: un-initialized)
		var points = [];//we use an array for ease of access
		var figureContainer = $();//inside the parenthesis, we use dividers with unique ids
		var graphContainer = $();//then we can style them using CSS
		var pointContainer =$();	
		var data = $(data);
		var container = $(container);
		var chartData;
		var chartMaxY;
		var pointGroups;

		//Timers for variables(mainly points)
		var pointTimer;
		var graphTimer;

		//declare object to hold the data
		var tableData = {/*Something...*/
			//get data from where it is stored
			chartData:function(){
				//Do- something
			}
			
		}

		//Build the graph

		//Set the individual radii of each point on graph
		function showGraph(points)
		{
			//we work with our shennanigans here
			
			
		}

		function reset()
		{
			//This function loops through each point on the graph(if any)
			//And resets it's radii to 0
			$.each(points, function(i){
				$(points[i]point).stop().css('height',0);//change height to radii later
				
			});

			//Clear timers
			clearTimeout(pointTimer);
			clearTimeout(graphTimer);

			//Restart Timer
			graphTimer = setTimeout(function(){
				showGraph(points,0);
				
			},200);
		}
	}
	/*May require it's own file*/
	function loadData(table, elements)
	{
		/*We load the data from wherever it is stored*/
	}

});
