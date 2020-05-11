window.onload=function(){
	//swiper插件
	var mySwiper = new Swiper ('.swiper-container', {
	    // direction: 'vertical', // 垂直切换选项
	    // loop: true, // 循环模式选项
	    speed:1000,
	    navigation: {//箭头
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
	    effect : 'fade',//切换效果
	    autoplay: {	//轮播模式和时间
		    delay: 500000000000,
		    stopOnLastSlide: false,
		    disableOnInteraction:false,
		},

	   //  mousewheel: {	//Swiper释放鼠标滚轮事件，鼠标可以控制页面滚动。
	   //  	releaseOnEdges: true,
	  	// },
	  	 on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      } 
    }
	});

	//导航开关
    $('.btn-nav').on('click tap', function () {
        $('.nav-content').toggleClass('showNav hideNav').removeClass('hidden');
        $(this).toggleClass('animated');
    });

    //下按钮
    //下拉一个屏幕的高度
  	function screen(){
	    var btnHeight=document.body.clientHeight;
		console.log(btnHeight)
		
	    $("#screenBtn").click(function(){
	    	$("html").scrollTop(btnHeight);
	    	console.log(btnHeight*2)
	    })
	    
    }
    screen()

  
}