$(document).ready(function() {
	$('form').submit(function(e) {
		e.preventDefault();

		if ($('.iteminput').val() === '') {
			console.log('empty item');

		} else { 
			addItem()

		}

	});	

	function addItem() {
		var newItem = $('.iteminput').val();
		var newItemNode = '<li><span class="item">' + newItem + '</span><img class="trash" src="images/trash.png"></li>';
		$('ul').append(newItemNode);
	}
	$('ul').on('click', '.trash', function() {
		console.log('click trash');
	})
$('.iteminput').click(function() {
	$("item").remove('iteminput')
});

	//$('typekit').load() 	
});