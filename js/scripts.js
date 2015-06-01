$(document).ready(function() {
	$('form').submit(function(e) {
		e.preventDefault();

		if ($('.iteminput').val() === '') {
			console.log('empty item');

		} else { 
			addItem();
			$('.iteminput').val('');
			$('.checkboxes input').removeAttr('checked');
		}

	});	

	function addItem() {
		var newItem = $('.iteminput').val();
		var itemCategory = $('.checkboxes input:checked').closest('label').text().toLowerCase();
		var newItemNode = '<li class="' + itemCategory + '"><span class="item">' + newItem + '</span><img class="trash" src="images/trash.png"></li>';
		

		$('ul').append(newItemNode);
	}
	$('ul').on('click', '.trash', function() {
		console.log('click trash');

		$(this).parent().remove();
	});


	$('ul').on('click', '.item', function() {
		 console.log('click item');

		$(this).parent().addClass('checked');
	});

	$('.removeitems').click(function() {
		console.log('remove all');

		$('.checked').remove();
		
		$('.meat').append

	$('input[type=radio]').each(function(){
		this.click();
		console.log('radio', this.checked);
	});
	$('input[type=radio]').each(function(){
    this.click();
    console.log('Should be false', this.checked);
});

	});

});

