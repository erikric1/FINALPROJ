(function($) {
        var $reviewlist = $("#reviewlist");
        var $review_form = $("#reviewform");
        var $name = $("a");
        var $email = $("href");
        var $review = $("p");
    	
    	//get a reference to the submit buttons
      	var $submitreview = $('#submitreview');
    
    	var $reviewlist = $('#reviewlist');
    	
    	//function that will create the reviews
    	var submitreview = function() {
    		var $li = $('<li>');
    		var $p = $('<p>');
    		var $a = $('<a>');
    
    		//set the value
    		$p.text($('#review').val());
    		$a.text($('#name').val());
    		$a.attr('href', $('#email').val());
    		
    		$li.append($p);
    		$li.append($a);
    		
    		$reviewlist.append($li);
    	};
    	
    	// add an event listener on the click event of the submit button
      	$('#submitreview').on('click', function(e) {
    		e.preventDefault();
    		
    		submitreview();
    	});
    })(window.jQuery);