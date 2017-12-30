$(document).ready(function(){

$('a:nth-child(1)').css('background-color','white');

$('#circle1').click(function(){

$("#slider").animate({'left':'0%'},650);

$('#data1').fadeIn(900);
$('#data2,#data12,#data3,#data4,#data5,#data6,#data7,#data8,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '45%'},900);
$('a:nth-child(1)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(12),a:nth-child(4),a:nth-child(5),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');

});

$('#circle2').click(function(){

$("#slider").animate({'left':'-50%'},700);

$('#data2').fadeIn(900);
$('#data12,#data1,#data3,#data4,#data5,#data6,#data7,#data8,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '19%'},900);
$('a:nth-child(2)').css('background-color','white');
$('a:nth-child(3),a:nth-child(12),a:nth-child(1),a:nth-child(4),a:nth-child(5),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');

});


$('#circle3').click(function(){

$("#slider").animate({'left':'-190%'},700);

$('#data3').fadeIn(900);
$('#data2,#data1,#data12,#data4,#data5,#data6,#data7,#data8,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '55%'},900);
$('a:nth-child(3)').css('background-color','white');
$('a:nth-child(4),a:nth-child(2),a:nth-child(1),a:nth-child(5),a:nth-child(12),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');

});



$('#circle4').click(function(){

$("#slider").animate({'left':'-240%'},700);

$('#data4').fadeIn(900);
$('#data2,#data1,#data3,#data12,#data5,#data6,#data7,#data8,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '90%'},900);
$('a:nth-child(4)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(12),a:nth-child(5),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');

});


$('#circle5').click(function(){

$("#slider").animate({'left':'-330%'},700);

$('#data5').fadeIn(900);
$('#data2,#data1,#data3,#data4,#data12,#data6,#data7,#data8,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '58%'},900);
$('a:nth-child(5)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(4),a:nth-child(12),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');

});




$('#circle6').click(function(){

$("#slider").animate({'left':'-440%'},700);

$('#data6').fadeIn(900);
$('#data2,#data1,#data3,#data4,#data5,#data12,#data7,#data8,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '25%'},900);
$('a:nth-child(6)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(4),a:nth-child(5),a:nth-child(12),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');
});



$('#circle7').click(function(){

$("#slider").animate({'left':'-530%'},700);

$('#data7').fadeIn(900);
$('#data2,#data1,#data3,#data4,#data5,#data6,#data12,#data12,#data8,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '55%'},900);
$('a:nth-child(7)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(4),a:nth-child(5),a:nth-child(6),a:nth-child(12),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');
});

$('#circle8').click(function(){

$("#slider").animate({'left':'-620%'},700);

$('#data8').fadeIn(900);
$('#data2,#data1,#data3,#data4,#data5,#data6,#data7,#data12,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '25%'},900);
$('a:nth-child(8)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(4),a:nth-child(5),a:nth-child(6),a:nth-child(7),a:nth-child(12),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');
});

$('#circle9').click(function(){

$("#slider").animate({'left':'-710%'},700);

$('#data9').fadeIn(900);
$('#data2,#data1,#data3,#data4,#data5,#data6,#data7,#data8,#data12,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '92%'},900);
$('a:nth-child(9)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(4),a:nth-child(5),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(12),a:nth-child(10),a:nth-child(11)').css('background-color','black');
});

$('#circle10').click(function(){

$("#slider").animate({'left':'-800%'},700);

$('#data10').fadeIn(900);
$('#data2,#data1,#data3,#data4,#data5,#data6,#data7,#data8,#data9,#data12,#data11').fadeOut(700);
$('.line').animate({'left' : '24%'},900);
$('a:nth-child(10)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(4),a:nth-child(5),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(12),a:nth-child(11)').css('background-color','black');
});

$('#circle11').click(function(){

$("#slider").animate({'left':'-890%'},700);

$('#data11').fadeIn(900);
$('#data2,#data1,#data3,#data4,#data5,#data6,#data7,#data8,#data9,#data10,#data12').fadeOut(700);
$('.line').animate({'left' : '58%'},900);
$('a:nth-child(11)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(4),a:nth-child(5),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(12)').css('background-color','black');
});

$('#circle12').click(function(){

$("#slider").animate({'left':'-980%'},700);

$('#data12').fadeIn(900);
$('#data2,#data1,#data3,#data4,#data5,#data6,#data7,#data8,#data9,#data10,#data11').fadeOut(700);
$('.line').animate({'left' : '92%'},900);
$('a:nth-child(12)').css('background-color','white');
$('a:nth-child(3),a:nth-child(2),a:nth-child(1),a:nth-child(4),a:nth-child(5),a:nth-child(6),a:nth-child(7),a:nth-child(8),a:nth-child(9),a:nth-child(10),a:nth-child(11)').css('background-color','black');
});


});



