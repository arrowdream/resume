$(window).scroll(function() {
	if($(this).scrollTop() > 50){
		$("#top").fadeIn(500);
	}else{
		$('#top').fadeOut(1000);
	}
});

$("#top").click(function() {
	 $( 'html, body' ).animate({scrollTop:0}, 'slow' );
});

$('.nav a').on('click',function(){
	if($(".navbar-toggle").is(':visible')){
	    $('.navbar-toggle').click();
    }
});


var $moreItem = $('.item-3 .more');
var $moreItemOl = $moreItem.find('ol');
$moreItem .click(function() {
	if (!$moreItemOl.is(':animated')) {
        $moreItemOl.slideToggle(500);
	}	
});
