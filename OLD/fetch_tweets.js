$(document).ready(function(){
	//Declaring Variables
	var savedString = localStorage.getItem('termsKey');	
	var api_url = 'http://search.twitter.com/search.json';
	var search_term = JSON.parse(savedString);
	var results_num = '&rpp=6';
	var entities = '&include_entities=true';
	var recent = '&result_type=recent';
	var lang = '&lang=en';
	var callback = '&callback=?';

	//console.log(search_term);
	if(savedString != null){
	$.each(search_term, function(i, term){
		//Send JSON Request
		$.getJSON(api_url + '?q=' + term + results_num + entities + recent + lang + callback, 
			function(data){

			//Building the Table
			var table_html = '<table class="tweets" border="1">';
				table_html += '<tr><th>' + term + '</th></tr>';

			console.log(data.results);
			$.each(data.results, function(i, tweet){
				if(tweet.text == undefined){
					$('#errors').append('<p>ERROR PROCESSING SEARCH, TRY ANOTHER TERM</p>');

				}else{

					//Formatting the Date/Time
					var date_tweet = new Date(tweet.created_at).toLocaleString();
					var date_day = date_tweet.substr(-18,2);
					var date_month = date_tweet.substr(-15,1);
					var date_year = date_tweet.substr(-11,2);
					var date_hour = date_tweet.substr(-8,2);
					var date_min = date_tweet.substr(-5,2);
					var ampm = date_hour<12 ? 'AM' : ' PM';
					if (date_hour>12) date_hour -= 12;
					if (date_hour==0) date_hour = 12;
					if (date_month.length == 1) date_month = '0' + date_month;
					//console.log(date_month);

					//Building the HTML String
					table_html += '<tr><td>' + '<a href="https://twitter.com/';
					table_html += tweet.from_user + '/status/' + tweet.id_str + '">';
					table_html += tweet.text + '</a></td>';
					table_html += '<td>' + date_day + '/' + date_month + '/' + date_year + ' @ ' + date_hour + ':' + date_min + ampm + '</td></tr>';
				}
			});
			table_html += '</table>';
			$('#display').append(table_html);
		});
	});
};
});

