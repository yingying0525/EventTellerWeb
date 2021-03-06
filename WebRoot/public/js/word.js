


$(function() {
    $( "#slider" ).slider({
    	stop: function( event, ui ) {timeVector(event,ui);}    	
    });
    
    $('.pc').hide();
    $('#info').hide();
    
  });

function timeVector(event,ui){
	//post name + ui.value
	//get persongraph
	$('#personGraph').html("");
	$('#tprlodingimg').show();
	var word = $('#SPersonQuery').val();
	//try to get data from server
	$.post(
			'getPersonTimeRelation',
			{
				name:word,
				persent:ui.value
			},
			function(data){
				$('#tprlodingimg').hide();
				constructGraph(data.personGraph,"personGraph",700,1024,-300,150);
				$('#personGraph').show();
				$('#personGraph').fadeIn(500);
			}
		);	
	
}


$('#SBTPersonSearch').click(function(e){
	$('.pc').hide();
	$('#info').hide();
	relatedEmpty();
	$("#namelodingimg").show();
	var name = $('#SPersonQuery').val();
	if(name != null && name.length > 0){
		getWord(name);
		$('#tab1').siblings("li").removeClass('active');
		$('#tab1').addClass('active');
		$('#ptab1').show();			
	}else{
		$("#namelodingimg").hide();
		$('#info').html("<h5>Pls input something!</h5>").fadeIn(500);
	}
});


function relatedEmpty(){
	$('#DayStart').val("");
	$('#DayEnd').val("");
	$('#RelatedPersons').empty();
	$('#RelatedPositions').empty();
	$('#RelatedVerbs').empty();
	$('#EventsByWord').empty();
}



$("#wordTab.nav li").click(function(e){
	$(this).siblings("li").removeClass('active');
	$(this).addClass('active');
	e.preventDefault();
	$(".pc").hide();
	$("#"+$(this).data("tag")).show();
});



/**
 * input word.name
 * output how many words in db
 */
function getWord(word){
	$.post(
			'getWordTime',
			{
				name:word
			},
			function(data){
				loadChart(word,data);
				constructGraph(data.personGraph,"personGraph",700,1024,-300,100);
				showTopicRelatedWords(data.topicRelatedWords);
			}
		);
}


function loadChart(input,results){
	$("#namelodingimg").hide();
	if(results.timeline == null){
		$('#info').html("<h5>Can't Found This Word, Sorry!</h5>").fadeIn(500);
		$('.pc').hide();
	}else{
		generateWordTime(results.timeline);
	}
}


function generateWordTime(data){
	var chartData = [];
	var lastDay = null;
	var lastCount = null;
	var days = data.split(" ");
	var interval = 1;
	interval = days.length /55;
	for(var i = 0 ; i < days.length; ++i){
		var number = days[i].split(",");
		if(number.length != 2){
			continue;
		}
		if(number[0].indexOf("-") == 0){
			continue;
		}
		var today = parseInt(number[0]);
		var count = parseInt(number[1]);
		if(lastDay == null){
			lastDay = today;
			lastCount = count;
		}else{
			if(today - lastDay >= interval){
				var point = [];
				point.push(lastDay);
				point.push(lastCount);
				chartData.push(point);
				lastDay = today;
				lastCount = count;
			}else{
				lastCount += count;
			}
		}
	}
	var point = [];
	point.push(lastDay);
	point.push(lastCount);
	chartData.push(point);

	$('#WordTimeChart').highcharts({
		title: {
			text: '词语关注度曲线'
		},
		chart:{
			type:'line'
		},
		series:[{
			name:"热度",
			data:[]
		}]
	});
	
	var chart = $('#WordTimeChart').highcharts();	
    chart.series[0].setData(chartData);
   
}


$('#BTShowRelatedWord').click(function(e){
	var start = $('#DayStart').val();
	var end = $('#DayEnd').val();
	var input = $('#SPersonQuery').val();
	if(start == null || end == null || input == null){
		return;
	}
	$('#relatedlodingimg').show();
	getRelatedWord(input,start,end);
});

function getRelatedWord(input,start,end){
	$.post(
			'getRelatedWord',
			{
				name:input,
				startDay:start,
				endDay:end
			},
			function(data){
				$('#relatedlodingimg').hide();
				genRWordHtml(data);
			}
		);
}


function genRWordHtml(data){
	if(data.status == "404"){
		alert("can't find this word");
	}else{
		var phtml = "";
		for(var i = 0 ; i < data.relatedPersons.length; ++i){
			var subs = data.relatedPersons[i].split(",");
			if(subs.length == 2){
				phtml += "<a href=\"javascript:;\"  onclick=\"showEvents(this)\"><h4>" + subs[0] + "</h4>";
				phtml += "<p style=\"display:none\">" + subs[1] + "</p></a>";
			}
		}
		if(phtml.length == 0){
			$('#RelatedPersons').html("no words");
		}else{
			$('#RelatedPersons').html(phtml);
		}
		//for positions
		var pohtml = "";
		for(var i = 0 ; i < data.relatedPositions.length; ++i){
			var subs = data.relatedPositions[i].split(",");
			if(subs.length == 2){
				pohtml += "<a href=\"javascript:;\" onclick=\"showEvents(this)\"><h4>" + subs[0] + "</h4>";
				pohtml += "<p style=\"display:none\">" + subs[1] + "</p></a>";
			}
		}
		if(pohtml.length == 0){
			$('#RelatedPositions').html("no words");
		}else{
			$('#RelatedPositions').html(pohtml);
		}
		//for verbs
		var vhtml = "";
		for(var i = 0 ; i < data.relatedVerbs.length; ++i){
			var subs = data.relatedVerbs[i].split(",");
			if(subs.length == 2){
				vhtml += "<a href=\"javascript:;\" onclick=\"showEvents(this)\"><h4>" + subs[0] + "</h4>";
				vhtml += "<p style=\"display:none\">" + subs[1] + "</p></a>";
			}
		}
		if(vhtml.length == 0){
			$('#RelatedVerbs').html("no words");
		}else{
			$('#RelatedVerbs').html(vhtml);
		}
		
	}
}

function showEvents(obj){
	var ids = $(obj).find("p").html();
	$('#eventslodingimg').show();
	$.post(
			'getEventsByIds',
			{
				ids:ids
			},
			function(data){
				var html ;
				html = showResults(data.events);
				 $('#EventsByWord').html(html);
	        	 $("#eventslodingimg").hide();
	        	 $("#EventsByWord").fadeIn(500);
			}
	);
}

function showResults(events){
	
	var html = "";
	if(events == null || events.length == 0 ){
		html += "<div class=\"col-md-6\"><div class=\"alert alert-danger\"><strong>Sorry!</strong> No Results found..</div></div>";
		return html;
	}
	html +=  "<div class=\"col-md-12\">";
	for(var i = 0 ;i < events.length;i++){
    	html += "<a href=\"show_events?eid=" + events[i].id + "\" target=\"_blank\">";
    	html += "<h4>" + events[i].title + "</a>";
    	html += "<span class=\"label label-warning pull-right\">" + events[i].number +"</span></h4>";
    	html += "<h5><small>" + events[i].pubTime.replace("T"," ") + "</small></h5>";
    	html += "<p>" + events[i].content.substring(0,Math.min(251,events[i].content.length)).replace("!##!","\n") + "</p>";
    	html += "<hr class=\"soften\">";
	}			
	html += "</div>";	
	return html;       	
}

function constructGraph(jsonStr,HtmlId,height,width,charge,distance){
	//clear tag contents
	$("#" + HtmlId).html("");
	
	var json = $.parseJSON(jsonStr);
	var colors = d3.scale.category20();

var force = d3.layout.force()
    .charge(charge)
    .linkDistance(distance)
    .size([width, height]);

var svg = d3.select("#" + HtmlId).append("svg")
    .attr("width", width)
    .attr("height", height);


  force
      .nodes(json.nodes)
      .links(json.links)
      .on("tick", tick)
      .start();

  var link = svg.selectAll(".link")
      .data(json.links)
      .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
      .data(json.nodes)
      .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  node.append("circle")
      .attr("r", function(d) { return d.size ; })
      .style("fill", function(d) { return colors(d.group); });

 
  node.append("title")
      .text(function(d) { return d.title;});
 	
  node.append("text")
    .attr("x", 12)
    .attr("dy", ".35em")
    .text(function(d) { return d.name; });
      

  function tick() {
	  link
	      .attr("x1", function(d) { return d.source.x; })
	      .attr("y1", function(d) { return d.source.y; })
	      .attr("x2", function(d) { return d.target.x; })
	      .attr("y2", function(d) { return d.target.y; });
	
	  node
	      .attr("transform", function(d) { 
	              return "translate(" + d.x + "," + d.y + ")"; 
	      });
  }
}


function showTopicRelatedWords(data){
	var vhtml = "";
	for(var i = 0 ; i < data.length; ++i){
		var subs = data[i].split("\t");
		if(subs.length == 3){
			vhtml += "<a href=\"javascript:;\" onclick=\"showWordRelatedTopics(this)\"><h4>" + subs[0] + "</h4>";
			vhtml += "<p style=\"display:none\">" + subs[1] + "</p>";
			vhtml += "<div style=\"display:none\">" + subs[2] + "</div></a>";
		}
	}
	if(vhtml.length == 0){
		$('#topicRelatedWords').html("no words");
	}else{
		$('#topicRelatedWords').html(vhtml);
	}
}

function showWordRelatedTopics(obj){
	var ids = $(obj).find("p").html();
	var eventRelations = $(obj).find("div").html();
	$('#wordsRelatedTopics').html("");
	$('#wordTopiclodingimg').show();
	$.post(
			'getTopicsByIds',
			{
				ids:ids,
				eventRelations:eventRelations
			},
			function(data){
				var html ;
				html = generateWordTopicResults(data.tps);
				$('#wordsRelatedTopics').html(html);
	        	$("#wordTopiclodingimg").hide();
	        	$("#wordsRelatedTopics").fadeIn(500);
	        	constructGraph(data.eventsGraph,"EventsGraph",700,1024,-100,50);
			}
	);
}

function generateWordTopicResults(topics){
	var html = "";
	if(topics == null || topics.length == 0){
		html = "<div class=\"col-md-12\"><div class=\"alert alert-danger\"><strong>Sorry!</strong> No Topics to show.</div></div>";
		return html;
	}
	for(var i = 0 ;i < topics.length;i++){
    	html +=  "<div class=\"col-md-12\">";
    	html += "<a href=\"show_topic?tid=" + topics[i].id + "\" target=\"_blank\">";
    	html += "<h4>" + topics[i].keyWords + "</a>";
    	html += "<span class=\"badge badge-warning pull-right\">" + topics[i].number +"</span></h4>";
    	html += "<br>";
    	html += "<h5><span class=\"label label-primary\">From</span><small> " + topics[i].startTime.replace("T"," ") + "</small>";
    	html += " <span class=\"label label-success\">To</span><small> " + topics[i].endTime.replace("T"," ") +"</small>";
    	html += "</h5>";
    	html += "<hr class=\"soften\">";
    	html += "</div>";	
	}			
	return html;
}






