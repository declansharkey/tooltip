//Tooltip
//2014

+function($) {
    $.fn.tooltip = function(){
            return $(this).on("mousemove", "[data-tooltip]", function(event){
                var popup = $(event.target).next(".popup")

                
                //if popup doesn't exist, build one
                if (!popup.length) {
                    var text = $(event.target).attr("data-tooltip")
                    popup = $(event.target).after("<div class='popup' style='display: none;'>" + text+ "</div>").find(".popup")
                }

                //popup position in relation to cursor
                popup.css({
                    top: event.pageY + 5 + "px",
                    left: event.pageX + 5 + "px"
                }).show();
                
                
                }).on("mouseout", "[data-tooltip]", function(event) {
                    $(event.target).next(".popup").hide();
            });
        }
       
       
   }(jQuery);
