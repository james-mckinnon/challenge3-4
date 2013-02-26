$(document).ready(function(){
	$('#savebutton').click(function(){
		var save_term = $('input[name="term"]').val();
		var success = $('#success');

		if (save_term == ""){
			alert("You must enter a Search Term to add!");
			return false;
		}else{
			var storedData = localStorage.getItem('termsKey');
			if (storedData){
				store = JSON.parse(storedData);
				store.push(save_term);
				localStorage.setItem('termsKey', JSON.stringify(store));
				success.append('The Search Term has been added.');
			}else{
				var storing = [];
					storing[0] = save_term;
				localStorage.setItem('termsKey', JSON.stringify(storing));
				success.append('The Search Term has been added.');
			};
       	};
	});
});