;(function(){

    fn = {
        awmMasonry: function(selector, item){
            return $(selector).masonry({
                percentPosition: true,
                itemSelector: item,
                columnWidth: '.col-md-4'
            });
        },
        navTransformOnScroll: function(navbar) {
            
			return $(window).scroll(function () {
				var top = $(document).scrollTop(),
                    logo = '/resources/img/appworkmatrix-logo.svg',
                    logoInverse = '/resources/img/appworkmatrix-logo-inverse.svg';
                    
				if(top > 0) {
                    $(".awm-logo").attr('src', logo);
				    $(navbar).addClass('navbar-awm-inverse');
                } else {
                    $(".awm-logo").attr('src', logoInverse);
				    $(navbar).removeClass('navbar-awm-inverse');
                }
			});
        },
        scrollSpy: function(e) {
            return $('body').scrollspy({ target: e });
        }
    };

//    fn.awmMasonry(".grid", ".portfolio-grid-item");
    fn.navTransformOnScroll(".navbar-awm");
//    fn.scrollSpy("#awm-navbar");

}(jQuery, window, document))