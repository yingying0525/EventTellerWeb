<%@ page language="java" import="java.util.*" pageEncoding="utf-8" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>EventTeller - Home</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="public/css/bootstrap.min.css">
	<link rel="stylesheet" href="public/css/style.css">
  </head>
  
  <body>
    
	<jsp:include page="header.jsp"/>
	
	<div class="wrap-all" style="margin-top:-20px">
		<div class="inner">
			<div id="index-wrap">
				<div class="index-banner">
					<div class="index-banner-wrap">
						<div class="index-banner-inner">
							<h1>EventTeller</h1>
							<p style="margin-bottom:30px">EventTeller is a project which aims to detect Chinese News Event and Topic Tracking.</p>
							<div class="index-banner-action">
								<a class="btn btn-lg btn-success" href="https://github.com/mblankgit/EventTeller" target ="_blank" role="button">View on GitHub</a>
							</div>
							<div class="index-banner-carousel">
								
							</div>
						</div>
					</div>
				</div>
				<div class="index-body">
					<h3 class="index-feature-title">
						<span>系统特色</span>
					</h3>
					<ul class="index-feature">
						<li>
							<i class="i1 glyphicon glyphicon-briefcase"></i>
							<br>
							<h4>事件聚类</h4>
							还在为肆意转发的“假”新闻头疼吗<br >我们给您提供最纯正的新闻事件
						</li>
						<li>
							<i class="i2 glyphicon glyphicon-facetime-video"></i>
							<br>
							<h4>话题追踪</h4>
							想知道某个热门话题的事件走向<br >我们帮您追踪其热度浮沉
						</li>
						<li>
							<i class="i3 glyphicon glyphicon-camera"></i>
							<br>
							<h4>历史回顾</h4>
							突然想回顾过去一年的热门事件<br >
							热门事件盘点给您想要的2013
						</li>
						<li>
							<i class="i4 glyphicon glyphicon-search"></i>
							<br>
							<h4>精确定位</h4>
							互联网搜索出的结果太繁杂了<br >
							我们只做新闻，每个新闻源都有迹可循
						</li>
					</ul>
					<div class="index-say" style="padding:40px;">
						<div class="container">
						<div class="row">
							<div id="wordcloud2" class="col-md-12" style="height:400px;">
								<span data-weight="9">quisqu</span><span data-weight="27">egesta</span><span data-weight="38">puru</span><span data-weight="43">risu</span><span data-weight="20">ultrici</span><span data-weight="19">sodal</span><span data-weight="26">matti</span><span data-weight="31">ornar</span><span data-weight="16">dignissim</span><span data-weight="27">lacu</span><span data-weight="18">ultric</span><span data-weight="16">elementum</span><span data-weight="31">lacinia</span><span data-weight="65">amet</span><span data-weight="37">nisl</span><span data-weight="35">tincidunt</span><span data-weight="30">magna</span><span data-weight="40">lorem</span><span data-weight="29">auctor</span><span data-weight="20">viverra</span><span data-weight="19">fermentum</span><span data-weight="55">nulla</span><span data-weight="36">enim</span><span data-weight="12">conval</span><span data-weight="25">tempu</span><span data-weight="29">justo</span><span data-weight="35">feli</span><span data-weight="25">faucibu</span><span data-weight="33">cursu</span><span data-weight="48">mauri</span><span data-weight="23">luctu</span><span data-weight="26">posuer</span><span data-weight="30">malesuada</span><span data-weight="35">diam</span><span data-weight="37">vestibulum</span><span data-weight="36">ipsum</span><span data-weight="4">primi</span><span data-weight="25">orci</span><span data-weight="4">cubilia</span><span data-weight="4">cura</span><span data-weight="22">proin</span><span data-weight="25">scelerisqu</span><span data-weight="34">velit</span><span data-weight="25">pretium</span><span data-weight="33">quam</span><span data-weight="23">consectetur</span><span data-weight="25">semper</span><span data-weight="39">turpi</span><span data-weight="30">nisi</span><span data-weight="63">vita</span><span data-weight="18">suscipit</span><span data-weight="32">nequ</span><span data-weight="19">morbi</span><span data-weight="22">lectu</span><span data-weight="19">molesti</span><span data-weight="19">nullam</span><span data-weight="18">consequat</span><span data-weight="14">bibendum</span><span data-weight="19">rutrum</span><span data-weight="12">venenati</span><span data-weight="38">dolor</span><span data-weight="27">pulvinar</span><span data-weight="55">aliquam</span><span data-weight="38">erat</span><span data-weight="28">volutpat</span><span data-weight="35">nibh</span><span data-weight="23">eleifend</span><span data-weight="23">fringilla</span><span data-weight="22">aenean</span><span data-weight="23">tortor</span><span data-weight="22">hendrerit</span><span data-weight="47">pellentesqu</span><span data-weight="35">ligula</span><span data-weight="51">nunc</span><span data-weight="26">ullamcorp</span><span data-weight="19">sollicitudin</span><span data-weight="23">placerat</span><span data-weight="16">blandit</span><span data-weight="35">odio</span><span data-weight="21">euismod</span><span data-weight="30">adipisc</span><span data-weight="46">elit</span><span data-weight="21">suspendiss</span><span data-weight="19">sagitti</span><span data-weight="26">vehicula</span><span data-weight="38">augu</span><span data-weight="59">eget</span><span data-weight="21">molli</span><span data-weight="18">iaculi</span><span data-weight="24">tempor</span><span data-weight="21">integer</span><span data-weight="32">facilisi</span><span data-weight="15">vivamu</span><span data-weight="6">habit</span><span data-weight="24">tristiqu</span><span data-weight="6">senectu</span><span data-weight="6">netu</span><span data-weight="6">fame</span><span data-weight="38">urna</span><span data-weight="21">imperdiet</span><span data-weight="22">tellu</span><span data-weight="19">gravida</span><span data-weight="21">condimentum</span><span data-weight="54">donec</span><span data-weight="19">loborti</span><span data-weight="28">sapien</span><span data-weight="19">porta</span><span data-weight="21">dapibu</span><span data-weight="16">dictum</span><span data-weight="18">pharetra</span><span data-weight="43">arcu</span><span data-weight="16">phasellu</span><span data-weight="17">vulput</span><span data-weight="7">habitass</span><span data-weight="7">platea</span><span data-weight="7">dictumst</span><span data-weight="22">libero</span><span data-weight="22">curabitur</span><span data-weight="24">aliquet</span><span data-weight="26">congu</span><span data-weight="16">maecena</span><span data-weight="3">class</span><span data-weight="3">aptent</span><span data-weight="3">taciti</span><span data-weight="3">sociosqu</span><span data-weight="3">litora</span><span data-weight="3">torquent</span><span data-weight="3">conubia</span><span data-weight="3">nostra</span><span data-weight="3">incepto</span><span data-weight="3">himenaeo</span><span data-weight="21">porttitor</span><span data-weight="21">laoreet</span><span data-weight="26">feugiat</span><span data-weight="23">massa</span><span data-weight="27">metu</span><span data-weight="13">etiam</span><span data-weight="3">potenti</span><span data-weight="16">fusc</span><span data-weight="25">interdum</span><span data-weight="19">praesent</span><span data-weight="26">accumsan</span><span data-weight="15">rhoncu</span><span data-weight="16">commodo</span><span data-weight="16">variu</span><span data-weight="5">socii</span><span data-weight="5">natoqu</span><span data-weight="5">penatibu</span><span data-weight="5">magni</span><span data-weight="5">parturi</span><span data-weight="5">mont</span><span data-weight="5">nascetur</span><span data-weight="25">ridiculu</span>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    
    <jsp:include page="footer.html"/>
    
    <script src="public/js/jquery.js"></script>
    <script src="public/js/jquery-ui.js"></script>
    <script src="public/js/awesomeCloud.min.js"></script>
   	<script src="public/js/bootstrap.min.js"></script>
   	<script src="public/js/index.js"></script>
   	<script src="public/js/search.js"></script> 
  </body>
</html>
