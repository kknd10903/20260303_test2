$(".m_nav").hide();
$(".m_btn").on("click", function(){
 $(".m_nav").slideToggle(300);

});

/*토글 기능 :
 slideToggle() : slideUp() - slideDown();
 fadeToggle() : fadeI() - fadeOut();
 Toggle : show(); - hide();
 toggleClass('클래스') : addClass('클래스') - removeClass('클래스') 기능
*/