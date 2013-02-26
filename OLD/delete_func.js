$(document).ready(function(){

    // build your table
	var lists = localStorage.getItem('termsKey');
	var list = JSON.parse(lists);
	var display_html = '<table><tr><th>Search Term</th></tr>';

	for (i=0; i<list.length; i++){
		display_html += '<tr><td>' + list[i] + '</td>';
		display_html += '<td><input type="submit" name="' + list[i] + '" value="Delete" /></td>';
	}
		
	display_html += '</table>';
    // add to the page
	$('#list_container').append(display_html);

    // listen in for when a user clicks on a delete button
    $('input[value="Delete"]').click(function(){
    	var delete_data = $(this).attr('name');
        var storedData = localStorage.getItem('termsKey');
        store = JSON.parse(storedData);
        deleting = store.indexOf(delete_data);
        store.splice(deleting, 1);
        localStorage.setItem('termsKey', JSON.stringify(store));
        location.reload();
    });
        
});

