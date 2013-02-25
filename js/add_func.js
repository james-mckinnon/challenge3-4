$(document).ready(function(){
	$('#savebutton').click(function(){
		var save_term = $('input[name="term"]').val();

		if (save_term == ""){
			alert("You must enter a Search Term to add!");
			return false;
		}else{
			var storedData = localStorage.getItem('termsKey');
			if (storedData){
				store = JSON.parse(storedData);
				store.push(save_term);
				localStorage.setItem('termsKey', JSON.stringify(store));
			}else{
				var storing = [];
					storing[0] = save_term;
				localStorage.setItem('termsKey', JSON.stringify(storing));
			};
       	};
	});
};