$(document).ready(function(){
	if (window.matchMedia('(max-width: 1023px)').matches)
		{
			//alert("privet");
			//brandrepair
			$(".brandrepair_item").slice(15,).css("display", "none");
			//$(".brandrepair_item").slice(0,10).addClass("collapse");
			//brandrepair END
		}
		else if (window.matchMedia('(max-width: 767px)').matches) {
			$(".brandrepair_item").slice(12,).css("display", "none");
			$(".menusecond").addClass("collapse");
		}

	//slick slider pricelist
	$(".price_slider-item").slick({
		slidesToShow: 3,
  	slidesToScroll: 5,
		centerMode: true,
		responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				centerMode: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
	//slick slider pricelist END
	//advantage_slider
		$().fancybox({
			selector : '[data-fancybox="images"]',
			thumbs   : false,
			hash     : false,
		});
		$(".advantage_slider").slick({
				slidesToShow   : 5,
				slidesToScroll : 3,
				infinite   : true,
				dots       : false,
				arrows     : true,
				responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: false
				}
			}]
		});
	//advantage_slider END
	//whathappen srollspy
	$(".nano").nanoScroller();
	//whathappen srollspy END


});
	
	
	
	
	/*
	$(".menusecond_link").hover(function() {
		$(this).addClass("activedlink");
	})*/
/*
	if (window.matchMedia('(max-width: 767px)').matches)
	{
		//alert("privet");
		$(".menusecond").addClass("collapse");
	}

	/* resize
	$(window).resize(function(){

		if (window.matchMedia('(max-width: 767px)').matches) {  
			//alert("privet");
			$(".menusecond").addClass("collapse");
		}     

	});
	*/

	//search
	/*
	$('.brand_name-tablet').hideseek({
		hidden_mode: true, 
		nodata: 'результат не надйен'
	});
	*/
	//brandrepair
	//$(".brandrepair_item").slice(10,).css("display", "none");
	//brandrepair END
	//alert("privet");




/*
		//подсветка
		highlight: true,
		//результат не надйен
		nodata: 'результат не надйен',
		//скрытие начальных результатов*/
