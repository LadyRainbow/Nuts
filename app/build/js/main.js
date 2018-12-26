$(document).ready(function () {
    var $body = $('body');
    var $desctopApp = $('.desctop');

    var firstBlockHeight = $('.first-screen').height();
    var $header = $('.header-fixed');
    var firstBlockHeightMob = $('.first-screen-mob').height();
    var $headerMob = $('.header-mob-fixed');

    var $menu = $('.desctop .menu');
    var $menuBurger = $('.desctop .menu-burger');
    var $menuCloseBtn = $('.desctop .menu-close');

    var $menuMob = $('.menu-mob');
    var $menuBurgerMob = $('.header-mob .menu-burger');
    var $menuCloseBtnMob = $('.menu-mob .menu-close');


    // SIDEBAR accordion init
    $("div.accordian").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false,
    });
    // SIDEBAR accordion end

    // price range  ------------------
    jQuery("#slider-price").slider({
    	min: 0,
    	max: 5000,
    	values: [0,5000],
    	range: true,
    	stop: function(event, ui) {
    		jQuery("input#minCost").val(jQuery("#slider-price").slider("values",0));
    		jQuery("input#maxCost").val(jQuery("#slider-price").slider("values",1));
        },
        slide: function(event, ui){
    		jQuery("input#minCost").val(jQuery("#slider-price").slider("values",0));
    		jQuery("input#maxCost").val(jQuery("#slider-price").slider("values",1));
        }
    });

    $("input#minCost").change(function(){
     var value1=$("input#minCost").val();
     var value2=$("input#maxCost").val();

        if(parseInt(value1) > parseInt(value2)){
         value1 = value2;
         $("input#minCost").val(value1);
     }
     $("#slider-price").slider("values",0,value1);
    });

    $("input#maxCost").change(function(){
     var value1=$("input#minCost").val();
     var value2=$("input#maxCost").val();

     if (value2 > 5000) { value2 = 5000; $("input#maxCost").val(5000)}

     if(parseInt(value1) > parseInt(value2)){
         value2 = value1;
         $("input#maxCost").val(value2);
     }
     $("#slider-price").slider("values",1,value2);
    });

    // input field validation
	jQuery('.input-price').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;

		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);

		if(!/\d/.test(keyChar))	return false;

	});


    // price range end  --------------------------------------------

    // BANNERS SLIDER
    $('.bunner-slider').slick({
        arrows: true,
        arrows: true,
        prevArrow: $('.bunner-prev'),
        nextArrow: $('.bunner-next'),
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // INIT CUSTOM SCROLL
     $(".scroll-wrp").mCustomScrollbar();

    // POLICY double click
    var $policyLink = $('.nav-item a');
    var countClicks = 0;
    $policyLink.click(function (){
        countClicks = countClicks + 1;
        if (countClicks === 1) {
            $(this).click();
        } else {
            return;
        }
    });

    // POLICY MOBILE TABS
    var $btnToggle = $('.btn-toggle');
    var $policyText = $('.policy-text-mob');

    $btnToggle.click(function () {
        $btnToggle.removeClass('active');
        $policyText.removeClass('active');
        $(this).addClass('active');
        var attrValue = $(this).attr("data-nav");
        var $activeText = ($('[data-content = ' + attrValue + ']'));
        $activeText.addClass('active');
        $(window).scrollTop(0);
    });

   // masked inputs
   $(".form-input-phone").mask("+7 (999) 999-99-99");
   $(".form-input-time").mask("99:99");

    // initialize the vh-check
    (function () {
      var isNeeded = vhCheck('browser-address-bar');
    }());



   // -----------FORM VALIDATION---------------
   $("form").submit(function(e) {
       e.preventDefault();
       var form = $(this);
       var error = 0;

       $(this).find( "input" ).each(function() {
           inp = $(this);
           if($(this).attr('name') == 'user-name'){
               var regex = new RegExp(/^[а-яёa-z\s]+$/iu);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
           if($(this).attr('name') == 'user-email'){
               var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
           if($(this).attr('name') == 'user-time'){
               var regex = new RegExp(/^(2[0-4]|[01]?[0-9]):[0-5][0-9]$/);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
           if($(this).attr('name') == 'user-number'){
               var regex = new RegExp(/^\d+$/);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
           if($(inp).attr('name') == 'user-phone'){
               var regex = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,20}(\s*)?$/);
               if(regex.test($(inp).val()) == false) {
                   $(this).css('border-color', 'red');
                   error = 1;
               }
               else{
                   $(this).css('border-color', 'transparent');
               }
           }
       });
       if(error) return 1;
   });


});
