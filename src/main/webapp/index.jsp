<!doctype html>

<html>
<head>
  <meta charset="utf-8">
  <title>e-Village Nakrekal</title>

  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  

<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>

<link href="//netdna.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet">
<link href="http://heroku.github.com/template-app-bootstrap/heroku.css" rel="stylesheet">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/prettyPhoto.css" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/flexslider.css" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/custom-styles.css">
  
<!-- Favicons
================================================== -->
<link rel="shortcut icon" href="img/favicon.ico">
<link rel="apple-touch-icon" href="img/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png">

<!-- JS
================================================== -->
<script src="${pageContext.request.contextPath}/js/jquery-1.10.1.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery-ui.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.prettyPhoto.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.flexslider.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.custom.js"></script>

<script type="text/javascript">
$(document).ready(function () {

    $("#btn-blog-next").click(function () {
      $('#blogCarousel').carousel('next');
    });
     $("#btn-blog-prev").click(function () {
      $('#blogCarousel').carousel('prev');
    });

     $("#btn-client-next").click(function () {
      $('#clientCarousel').carousel('next');
    });
     $("#btn-client-prev").click(function () {
      $('#clientCarousel').carousel('prev');
    });
    
});

 $(window).load(function(){

    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });  
});

</script>
</head>

<body onload="prettyPrint();">
<div class="navbar navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <a href="/" class="brand">Welcome to Nakrekal</a>
     </div>
  </div>
</div>

<div class="container" id="getting-started">
<br/><br/><br/><br/>
<div class="row headline"><!-- Begin Headline -->
    
     	<!-- Slider Carousel
        ================================================== -->
        <div class="span8">
            <div class="flexslider">
              <ul class="slides">
                <li><a href="#"><img src="${pageContext.request.contextPath}/img/direction.jpg" alt="slider" /></a></li>
                <li><a href="#"><img src="${pageContext.request.contextPath}/img/villa.jpg" alt="slider" /></a></li>
                <li><a href="#"><img src="${pageContext.request.contextPath}/img/village.jpg" alt="slider" /></a></li>
                <li><a href="#"><img src="${pageContext.request.contextPath}/img/agri.jpg" alt="slider" /></a></li>
                <li><a href="#"><img src="${pageContext.request.contextPath}/img/ins.jpg" alt="slider" /></a></li>
              </ul>
            </div>
        </div>
        
        <!-- Headline Text
        ================================================== -->
        <div class="span4">
        	<h3>Welcome to Chandampally<br/> e-Village<br/>
            A Big Theme in a Small Village.</h3>
            <p class="lead">Chandampally is part of Nakrekal Town and is located just 2km from NH9 Highway.</p>
            <p>The Chandampally Village is both a physical space and a concept, in that its a place where we will mentor and help entrepreneurs and student entrepreneurs with a number of resources and events in and around the eVillage. The eVillage is designed for intense 24/7 entrepreneurship</p>
             
        </div>
    </div><!-- End Headline -->





<div class="row">
<div class="span8 offset2">
<h1 class="alert alert-success">Thank you for visiting application!</h1>

<div class="page-header">
  <h1>Big Theme, In a Small Village</h1>
</div>

<div class="hero-unit">
    <h1>Well Done!</h1>

    <p>You've just visited application ! Please register your details.</p>
    <a href="online/" class="btn btn-primary btn-large">Registration</a>

</div>
<div class="hero-unit">
    <h1>Sign up with facebook !</h1>

    <p>Do you have facebook logins</p>
    <a href="online/facebook/signin/" class="btn btn-primary btn-large">Click here</a>

</div>
</div>
</div>




<div class="row"><!-- Begin Bottom Section -->
    
    	<!-- Blog Preview
        ================================================== -->
    	<div class="span6">

            <h5 class="title-bg">From the Blog 
                <small>All the latest news</small>
                <button id="btn-blog-next" class="btn btn-inverse btn-mini" type="button">&raquo;</button>
                <button id="btn-blog-prev" class="btn btn-inverse btn-mini" type="button">&laquo;</button>
            </h5>

        <div id="blogCarousel" class="carousel slide ">

            <!-- Carousel items -->
            <div class="carousel-inner">

                 <!-- Blog Item 1 -->
                <div class="active item">
                    <a href="blog-single.htm"><img src="img/blog-med-img-1.jpg" alt="" class="align-left blog-thumb-preview" /></a>
                    <div class="post-info clearfix">
                        <h4><a href="blog-single.htm">A subject that is beautiful in itself</a></h4>
                        <ul class="blog-details-preview">
                            <li><i class="icon-calendar"></i><strong>Posted on:</strong> Aug 8, 2014<li>
                            <li><i class="icon-user"></i><strong>Posted by:</strong>Admin<li>
                            
                        </ul>
                    </div>
                    <p class="blog-summary">“Live life so well that, even if you die, the empty seats behind you will tell the story that, "yea, this soul did what God sent him/her to do". Give life and hope into your family, village, community, country, continent and the world at large. You can do it!” <p>
                </div>

                <!-- Blog Item 2 -->
                 <div class="item">
                    <a href="blog-single.htm"><img src="/img/blog-med-img-1.jpg" alt="" class="align-left blog-thumb-preview" /></a>
                    <div class="post-info clearfix">
                        <h4><a href="blog-single.htm">A great artist is always before his time</a></h4>
                        <ul class="blog-details-preview">
                            <li><i class="icon-calendar"></i><strong>Posted on:</strong> Aug 8, 2014<li>
                            <li><i class="icon-user"></i><strong>Posted by:</strong>Admin<li></ul>
                    </div>
                    <p class="blog-summary">“There you will find the place I love most in the world. The place where I grew thin from dreaming. My village, rising from the plain.. You will see why a person would want to live there forever. Dawn, morning, mid-day, night: all the same, except for the changes in the air....the pure murmuring of life.” <p>
                </div>

                 <!-- Blog Item 3 -->
                 <div class="item">
                    <a href="blog-single.htm"><img src="/img/blog-med-img-1.jpg" alt="" class="align-left blog-thumb-preview" /></a>
                    <div class="post-info clearfix">
                        <h4><a href="blog-single.htm">Is art everything to anybody?</a></h4>
                        <ul class="blog-details-preview">
                            <li><i class="icon-calendar"></i><strong>Posted on:</strong> May 16, 2014<li>
                            <li><i class="icon-user"></i><strong>Posted by:</strong>Admin<li></ul>
                    </div>
                    <p class="blog-summary">“I did a research assignment on life in the Middle Ages only last year. I found the era fascinating, all that chivalry and court romance. But I never pictured anything as poor as this village. This is the pits. There is no romance here, definitely no chivary. And it stinks--of sweat and smoke and sewage.” <p>
                </div>
                
            </div>
            </div> 	
        </div>
        
        <!-- Client Area
        ================================================== -->
        <div class="span6">

            <h5 class="title-bg">Highlights in
                <small>Chandampally</small>
                <button id="btn-client-next" class="btn btn-inverse btn-mini" type="button">&raquo;</button>
                <button id="btn-client-prev" class="btn btn-inverse btn-mini" type="button">&laquo;</button>
            </h5>

            <!-- Client Testimonial Slider-->
            <div id="clientCarousel" class="carousel slide no-margin">
            <!-- Carousel items -->
            <div class="carousel-inner">

                <div class="active item">
                    <p class="quote-text">"Highly rich with farmers and in producing Lemon, Rice and other crops. Milk production is very high in this village. Famous for fertile lands."<cite>--eVillage SRGroup</cite></p>
                </div>

                <div class="item">
                    <p class="quote-text">"The population is around 500.The nearest villages are Peraka Bavi Gudem(1 km), Golla Gudem(1.5 km), Nellibanda(1.5 km), Bollaram(2 km)."<cite>--eVillage SRGroup</cite></p>
                </div>

                <div class="item">
                    <p class="quote-text">"Chandampally lies on Northern side of Nakrekal.The National Highway No. 09 is leading to Vijayawada is passing throughout the village"<cite>--eVillage SRGroup</cite></p>
                </div>
                
            </div>
            </div>

        </div>
        
    </div><!-- End Bottom Section -->



</div><!-- End of container -->




<!-- Footer Area
        ================================================== -->

	<div class="footer-container"><!-- Begin Footer -->
    	<div class="container">
        	<div class="row footer-row">
                <div class="span3 footer-col">
                    <h5>About Village</h5>
                   <img src="img/piccolo-footer-logo.png" alt="Piccolo" /><br /><br />
                    <address>
                        <strong>e-Village</strong><br />
                        Chandampally<br />
                        Nakrekal,<br />
						Nalgonda- 508211<br />
						Greater Telangana Region<br />
                    </address>
                    <ul class="social-icons">
                        <li><a href="#" class="social-icon facebook"></a></li>
                        <li><a href="#" class="social-icon twitter"></a></li>
                        <li><a href="#" class="social-icon dribble"></a></li>
                        <li><a href="#" class="social-icon rss"></a></li>
                        <li><a href="#" class="social-icon forrst"></a></li>
                    </ul>
                </div>
                <div class="span3 footer-col">
                    <h5>Latest Tweets</h5>
                    <ul>
                        <li><a href="#">@ village</a>Village life is plain,simple and purest form of happiness</li>
                        <li><a href="#">@ village</a>Village life is the happiest compromise between the natural and the artificial.</li>
                        <li><a href="#">@ village</a>The village is panorama of the charming scenes of nature</li>
                    </ul>
                </div>
                <div class="span3 footer-col">
                    <h5>Latest Posts</h5>
                     <ul class="post-list">
                        <li><a href="#"></a></li>
                        <li><a href="#">If you want to hear beautiful replies, speak beautiful words.</a></li>
                        <li><a href="#">You can be beautiful in your imperfections if you work hard to be good.</a></li>
                        <li><a href="#">Do not shrink your Beautiful light, to make someone else feel more comfortable</a></li>
                        <li><a href="#">Every day is a reason to live, because GOD made life indeed BEAUTIFUL!!</a></li>
                    </ul>
                </div>
                
            </div>

            <div class="row"><!-- Begin Sub Footer -->
                <div class="span12 footer-col footer-sub">
                    <div class="row no-margin">
                        <div class="span6"><span class="left">Copyright 2014 Chandampally Village. All rights reserved.</span></div>
                        
                    </div>
                </div>
            </div><!-- End Sub Footer -->

        </div>
    </div><!-- End Footer -->




</body>
</html>
