!function(){fn={awmMasonry:function(o,r){return $(o).masonry({percentPosition:!0,itemSelector:r,columnWidth:".col-md-4"})},navTransformOnScroll:function(o){return $(window).scroll(function(){$(document).scrollTop()>0?($(".awm-logo").attr("src","/resources/img/appworkmatrix-logo.svg"),$(o).addClass("navbar-awm-inverse")):($(".awm-logo").attr("src","/resources/img/appworkmatrix-logo-inverse.svg"),$(o).removeClass("navbar-awm-inverse"))})},scrollSpy:function(o){return $("body").scrollspy({target:o})},formSendEmail:function(o){$(o).submit(function(o){o.preventDefault(),o.stopPropagation();var r=$(this);$.ajax({url:"https://formspree.io/appworkmatrix@gmail.com",type:"POST",data:r.serializeArray(),dataType:"json",success:function(o){window.location.replace(o.next)},error:function(o){console.log(o)}})})}},fn.navTransformOnScroll(".navbar-awm"),fn.formSendEmail("form#contact-awm")}(jQuery,window,document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd0ZC5mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiZm4iLCJhd21NYXNvbnJ5Iiwic2VsZWN0b3IiLCJpdGVtIiwiJCIsIm1hc29ucnkiLCJwZXJjZW50UG9zaXRpb24iLCJpdGVtU2VsZWN0b3IiLCJjb2x1bW5XaWR0aCIsIm5hdlRyYW5zZm9ybU9uU2Nyb2xsIiwibmF2YmFyIiwid2luZG93Iiwic2Nyb2xsIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJhdHRyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNjcm9sbFNweSIsImUiLCJzY3JvbGxzcHkiLCJ0YXJnZXQiLCJmb3JtU2VuZEVtYWlsIiwiZm9ybSIsInN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJF9mb3JtIiwidGhpcyIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsInNlcmlhbGl6ZUFycmF5IiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwibyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm5leHQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJDQUFFLFdBRUVBLElBQ0lDLFdBQVksU0FBU0MsRUFBVUMsR0FDM0IsTUFBT0MsR0FBRUYsR0FBVUcsU0FDZkMsaUJBQWlCLEVBQ2pCQyxhQUFjSixFQUNkSyxZQUFhLGVBR3JCQyxxQkFBc0IsU0FBU0MsR0FFcEMsTUFBT04sR0FBRU8sUUFBUUMsT0FBTyxXQUNiUixFQUFFUyxVQUFVQyxZQUliLEdBQ09WLEVBQUUsYUFBYVcsS0FBSyxNQUpiLHlDQUtuQlgsRUFBRU0sR0FBUU0sU0FBUyx3QkFFUFosRUFBRSxhQUFhVyxLQUFLLE1BTk4saURBTzFCWCxFQUFFTSxHQUFRTyxZQUFZLDBCQUl0QkMsVUFBVyxTQUFTQyxHQUNoQixNQUFPZixHQUFFLFFBQVFnQixXQUFZQyxPQUFRRixLQUV6Q0csY0FBZSxTQUFTQyxHQUNwQm5CLEVBQUVtQixHQUFNQyxPQUFPLFNBQVNMLEdBQ3BCQSxFQUFFTSxpQkFDRk4sRUFBRU8saUJBRUYsSUFBSUMsR0FBU3ZCLEVBQUV3QixLQUVmeEIsR0FBRXlCLE1BQ0VDLElBQUssK0NBQ0xDLEtBQU0sT0FDTkMsS0FBTUwsRUFBT00saUJBQ2JDLFNBQVUsT0FDVkMsUUFBUyxTQUFTQyxHQUNkekIsT0FBTzBCLFNBQVNDLFFBQVFGLEVBQUVHLE9BRTlCQyxNQUFPLFNBQVNyQixHQUNac0IsUUFBUUMsSUFBSXZCLFVBU2hDbkIsR0FBR1MscUJBQXFCLGVBQ3hCVCxHQUFHc0IsY0FBYyxxQkFFbkJxQixPQUFRaEMsT0FBUUUiLCJmaWxlIjoid3RkLmZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBmbiA9IHtcclxuICAgICAgICBhd21NYXNvbnJ5OiBmdW5jdGlvbihzZWxlY3RvciwgaXRlbSl7XHJcbiAgICAgICAgICAgIHJldHVybiAkKHNlbGVjdG9yKS5tYXNvbnJ5KHtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogaXRlbSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAnLmNvbC1tZC00J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hdlRyYW5zZm9ybU9uU2Nyb2xsOiBmdW5jdGlvbihuYXZiYXIpIHtcclxuICAgICAgICAgICAgXHJcblx0XHRcdHJldHVybiAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgdG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nbyA9ICcvcmVzb3VyY2VzL2ltZy9hcHB3b3JrbWF0cml4LWxvZ28uc3ZnJyxcclxuICAgICAgICAgICAgICAgICAgICBsb2dvSW52ZXJzZSA9ICcvcmVzb3VyY2VzL2ltZy9hcHB3b3JrbWF0cml4LWxvZ28taW52ZXJzZS5zdmcnO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHRcdGlmKHRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmF3bS1sb2dvXCIpLmF0dHIoJ3NyYycsIGxvZ28pO1xyXG5cdFx0XHRcdCAgICAkKG5hdmJhcikuYWRkQ2xhc3MoJ25hdmJhci1hd20taW52ZXJzZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLmF3bS1sb2dvXCIpLmF0dHIoJ3NyYycsIGxvZ29JbnZlcnNlKTtcclxuXHRcdFx0XHQgICAgJChuYXZiYXIpLnJlbW92ZUNsYXNzKCduYXZiYXItYXdtLWludmVyc2UnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGxTcHk6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICQoJ2JvZHknKS5zY3JvbGxzcHkoeyB0YXJnZXQ6IGUgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtU2VuZEVtYWlsOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuc3VibWl0KGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciAkX2Zvcm0gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2Zvcm1zcHJlZS5pby9hcHB3b3JrbWF0cml4QGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6ICRfZm9ybS5zZXJpYWxpemVBcnJheSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24obykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShvLm5leHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4vLyAgICBmbi5hd21NYXNvbnJ5KFwiLmdyaWRcIiwgXCIucG9ydGZvbGlvLWdyaWQtaXRlbVwiKTtcclxuLy8gICAgZm4uc2Nyb2xsU3B5KFwiI2F3bS1uYXZiYXJcIik7XHJcbiAgICBmbi5uYXZUcmFuc2Zvcm1PblNjcm9sbChcIi5uYXZiYXItYXdtXCIpO1xyXG4gICAgZm4uZm9ybVNlbmRFbWFpbChcImZvcm0jY29udGFjdC1hd21cIik7XHJcblxyXG59KGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCkpIl19
