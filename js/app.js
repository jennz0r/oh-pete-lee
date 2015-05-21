$(document).foundation();

var dataIndex = {
	music_url: 'music',
	commercial_url: 'commercial',
	narrative_url: 'narrative',
	edible_url: 'edible',
	professional_url: 'photography/professional',
	personal_url: 'photography/personal'
};

var htmlFunction = JST['handlebars/videography.hbs'];
var html = htmlFunction(dataIndex);
$('body').prepend(html);