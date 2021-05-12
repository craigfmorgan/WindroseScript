console.log("loading Windrose Script latest Git push");

var traces = [
	{
  		r: [77.5, 0, 72.5, 0, 70.0, 0, 45.0, 0, 22.5, 0, 42.5, 0, 40.0, 0, 62.5, 0],
			//r: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  		t: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
  		name: '>= 11 mph',
  		marker: {color: 'rgba(006,81,163,0.75)'},
  		type: 'barpolar'
  	},{
  		r: [57.5, 0, 50.0, 0, 45.0, 0, 35.0, 0, 20.0, 0, 22.5, 0, 37.5, 0, 55.0, 0],
			//r: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  		t: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
  		name: '8-11 mph',
  		marker: {color: 'rgba(058,154,200,0.75)'},
  		type: 'barpolar'
  	},{
  		r: [40.0, 0, 30.0, 0, 30.0, 0, 35.0, 0, 7.5, 0, 7.5, 0, 32.5, 0, 40.0, 0],
			//r: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  		t: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
  		name: '5-8 mph',
  		marker: {color: 'rgba(103,201,226,0.75)'},
  		type: 'barpolar'
  	},{
  		r: [20.0, 0, 7.5, 0, 15.0, 0, 22.5, 0, 2.5, 0, 2.5, 0, 12.5, 0, 22.5, 0],
			//r: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  		t: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
  		name: '< 5 mph',
  		marker: {color: 'rgba(142,240,247,0.75)'},
  		type: 'barpolar'
  	}
];

var metricSettings = {
	'WS': {
		'>= 11 mph': {
			bnds: [11, 100000],
			color: 'rgba(5, 43, 81,0.75)'
		},
		'8-11 mph': {
			bnds: [8, 11],
			color: 'rgba(10, 80, 161,0.75)'
		},
		'5-8 mph': {
			bnds: [5, 8],
			color: 'rgba(31, 120, 193,0.75)'
		},
		'< 5 mph': {
			bnds: [-1000, 5],
			color: 'rgba(110, 208, 224,0.75)'
		}
	},
	'CO':{
		'>= 525 ppb': {
			bnds: [525, 100000],
			color: 'rgba(30, 66, 20,0.75)'
		},
		'350-525 ppb': {
			bnds: [350, 525],
			color: 'rgba(30, 66, 20,0.75)'
		},
		'200-350 ppb': {
			bnds: [200, 350],
			color: 'rgba(80, 134, 66,0.75)'
		},
		'< 200 ppb': {
			bnds: [-1000, 200],
			color: 'rgba(126, 178, 109,0.75)'
		}
	},
	'NO':{
		'>= 20 ppb': {
			bnds: [20, 100000],
			color: 'rgba(63, 43, 91,0.75)'
		},
		'15-20 ppb': {
			bnds: [15, 20],
			color: 'rgba(88, 68, 119,0.75)'
		},
		'10-15 ppb': {
			bnds: [10, 15],
			color: 'rgba(104, 79, 142,0.75)'
		},
		'< 10 ppb': {
			bnds: [-1000, 10],
			color: 'rgba(112, 93, 160,0.75)'
		}
	},
	'O3':{
		'>= 20 ppb': {
			bnds: [20, 100000],
			color: 'rgba(81, 23, 73,0.75)'
		},
		'15-20 ppb': {
			bnds: [15, 20],
			color: 'rgba(109, 31, 98,0.75)'
		},
		'10-15 ppb': {
			bnds: [10, 15],
			color: 'rgba(150, 45, 130,0.75)'
		},
		'< 10 ppb': {
			bnds: [-1000, 10],
			color: 'rgba(186, 67, 169,0.75)'
		}
	},
	'PM2.5': {
		'>= 55 ug/m3': {
			bnds: [55, 100000],
			color: 'rgba(88, 20, 12,0.75)'
		},
		'40-55 ug/m3': {
			bnds: [40, 55],
			color: 'rgba(122, 28, 17,0.75)'
		},
		'25-40 ug/m3': {
			bnds: [25, 40],
			color: 'rgba(192, 27, 0,0.75)'
		},
		'< 25 ug/m3': {
			bnds: [-1000, 25],
			color: 'rgba(255, 66, 35,0.75)'
		}
	},
	'TVOC': {
		'>= 400 mV': {
			bnds: [400, 100000],
			color: 'rgba(204,163,0,0.75)'
		},
		'250-400 mV': {
			bnds: [250, 400],
			color: 'rgba(229,172,14,0.75)'
		},
		'150-250 mV': {
			bnds: [150, 250],
			color: 'rgba(234,184,57,0.75)'
		},
		'< 150 mV': {
			bnds: [-1000, 150],
			color: 'rgba(242,201,109,0.75)'
		}
	},
	'H2S': {
		'>= 4 ppb': {
			bnds: [4, 100000],
			color: 'rgba(88, 20, 12,0.75)'
		},
		'3-4 ppb': {
			bnds: [3, 4],
			color: 'rgba(122, 28, 17,0.75)'
		},
		'2-3 ppb': {
			bnds: [2, 3],
			color: 'rgba(192, 27, 0,0.75)'
		},
		'< 2 ppb': {
			bnds: [-1000, 2],
			color: 'rgba(255, 66, 35,0.75)'
		}
	},
	'HC': {
		'>= 50 %LEL': {
			bnds: [50, 100000],
			color: 'rgba(88, 20, 12,0.75)'
		},
		'25-50 %LEL': {
			bnds: [25, 50],
			color: 'rgba(122, 28, 17,0.75)'
		},
		'12.5-25 %LEL': {
			bnds: [12.5, 25],
			color: 'rgba(192, 27, 0,0.75)'
		},
		'< 12.5 %LEL': {
			bnds: [-1000, 12.5],
			color: 'rgba(255, 66, 35,0.75)'
		}
	}
};

var layout = {
	autosize: true,
	//width: 700,
	//height: 500,
	/*margin: {
		l: 30,
		r: 280,
		b: 25,
		t: 25,
		pad: 2,
		autoexpand: true
	},
	*/
	legend: {
		tracegroupgap: 0,
		font: {
			size: 14,
			color: 'white'
		},
		orientation:'h',
		xanchor: 'center',
		yanchor: 'bottom',
	},
	polar: {
		radialaxis: {
			showline: false,
			ticks: '',
			showticklabels: false,
			gridcolor: 'white'
		},
		angularaxis: {
			direction: 'clockwise',
			rotation: 90,
			tickmode: 'array',
			tickvals: [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.7, 270, 292.5, 315, 337.5],
			ticktext: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'],
			color: 'white',
			gridcolor: 'white'
		},
		bgcolor: 'rgba(0,0,0,0)'
	},
	paper_bgcolor: 'rgba(0,0,0,0)',
	plot_bgcolor: 'rgba(0, 0,0,0)'
};

var currentMetric;
var database;
var table;
var collapsed = false;
var center;
var layers = [];
//var windroseOverlay;

function refreshWindrose(windrose_div, database, table, metric, avg, timeFrom, timeTo){

    $.ajax({
  	   	type: 'GET',
   		 	url: 'https://0532syxbj9.execute-api.us-east-1.amazonaws.com/ImpactIQ/windroseapi?DATABASE_NAME=' +database + '&TABLE_NAME=' + table + '&metric=' + metric + '&windDirection=WD&timeFrom='+timeFrom + '&timeTo=' + timeTo + '&timeAvg=' + avg,
    		crossDomain: true,
    		success: function(APIdata){

				console.log(APIdata);
        try{
        	var data = JSON.stringify(APIdata);
          console.log(data);
        }
        catch (e){
        	console.log(e);
        }
				updateData(APIdata, metric);
			
			if(typeof currentMetric === 'undefined'){
				createWindrose(windrose_div, layout);
				currentMetric = metric;
			}else{
				//windroseOverlay.setPosition(center);
				
				if(currentMetric === metric){
					//view.animate({center: center, duration: 400});
					//view.animate({zoom: zoom, duration: 400});
				}
				currentMetric = metric;
			}
			
			Plotly.react(windrose_div, traces, layout,{displayModeBar: false},{responsive: true});
  	  }
      
    });
}

function createWindrose(wr_div, layout){
	console.log("createWindrose Function Called");
  drawRose();
}

function drawRose(){
	console.log("Plotly drawRose Trying");
    Plotly.newPlot(windrose_div, traces, layout,{displayModeBar: false}),{responsive: true};
	console.log("Plotly newplot success");
}

function updateData(data, metric){
	console.log("updateData Function Called");
  console.log("traces = " + traces); 
  console.log("traces variable type = " + typeof(traces));
  
	var bins = binData(data, metric);
	var binKeys = Object.keys(bins);
	
  
	for(var i=0; i<traces.length; i++){
		traces[i].name = binKeys[i];
		traces[i].r = bins[traces[i].name];
		
		if(metric === 'NO2' || metric === 'NOx'){
			metric = 'NO';
		}else if(metric === 'PM1.0' || metric === 'PM10'){
			metric = 'PM2.5';
		}
		traces[i].marker.color = metricSettings[metric][traces[i].name].color;
	}
	
}

function binData(data, metric){
	console.log("binData Function Called");
	console.log("metric = " + metric)
  var bnds;
  if(metric === 'NO2' || metric === 'NOx'){
    bnds = metricSettings['NO'];
  }else if(metric === 'PM1.0' || metric === 'PM10'){
    bnds = metricSettings['PM2.5'];
  }
  else{
  
    bnds = metricSettings[metric];
    
  }
  var traceKeys = Object.keys(bnds);
	console.log("traceKeys in bnds object = " + traceKeys)
  
  var bins = {};
  for(var k=0; k<traceKeys.length; k++){
    bins[traceKeys[k]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
	
  //console.log("WD Data = " + data.WD);
	var dataPoints = Object.keys(data["WD"]);
  //console.log("dataPoint count = " + dataPoints);

  for(var i=0; i<data.WD.length; i++){
    var direction = data.WD[i][1];
    var otherMetric = data[metric][i][1];
    if(otherMetric === null || direction === null){
      continue;
    }

    var trace = '';
    for(var j=0; j<traceKeys.length; j++){
      if(otherMetric >= bnds[traceKeys[j]].bnds[0] && otherMetric < bnds[traceKeys[j]].bnds[1]){
        trace = traceKeys[j];
      }
    }
    if(trace === '') continue;

    if(direction < 11.25 || direction >= 348.75){
      bins[trace][0]++;
    }else{
      var idx = Math.round((direction*32 / 360)/2); 
      bins[trace][idx]++;
    }
  }

  return bins;
}

function getDashboardTimeRange(){
  /*
  var offset = (new Date().getTimezoneOffset()*60);
	var timeRange = angular.element('grafana-app').injector().get('timeSrv').timeRange();
	var timeFrom = ~~(timeRange.from/1000);
	var timeTo = ~~(timeRange.to/1000);	
	*/
  var timeFrom = 1619468564239
  var timeTo = 1619490164239
  return [timeFrom, timeTo];
}

function getAPIVar(variableKey){
	/*
  var templateSrv = angular.element('grafana-app').injector().get('templateSrv');
	for(var i=0; i<templateSrv.variables.length; i++){
		var varName = templateSrv.variables[i].name;
		if(varName === variableKey){
			return templateSrv.variables[i].current.value;
		}
    */
}


