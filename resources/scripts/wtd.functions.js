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
        },
        formSendEmail: function(form) {
            $(form).submit(function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                var $_form = $(this);
                
                $.ajax({
                    url: "https://formspree.io/appworkmatrix@gmail.com",
                    type: "POST",
                    data: $_form.serializeArray(),
                    dataType: 'json',
                    success: function(o) {
                        window.location.replace(o.next);
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            });
        }
    };

//    fn.awmMasonry(".grid", ".portfolio-grid-item");
//    fn.scrollSpy("#awm-navbar");
    fn.navTransformOnScroll(".navbar-awm");
    fn.formSendEmail("form#contact-awm");

}(jQuery, window, document))