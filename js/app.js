var dataIndex = {
  home_url: '',
	music_url: 'music',
	commercial_url: 'commercial',
	narrative_url: 'narrative',
	edible_url: 'edible',
	professional_url: 'photography/professional',
	personal_url: 'photography/personal'
};

var dataMusic = {
  home_url: '../',
  music_url: '',
  commercial_url: '../commercial',
  narrative_url: '../narrative',
  edible_url: '../edible',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal'
};

var dataCommercial = {
  home_url: '../',
  music_url: '../music',
  commercial_url: '',
  narrative_url: '../narrative',
  edible_url: '../edible',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal'
};

var dataNarrative = {
  home_url: '../',
  music_url: '../music',
  commercial_url: '../commercial',
  narrative_url: '',
  edible_url: '../edible',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal'
};

var dataEdible = {
  home_url: '../',
  music_url: '../music',
  commercial_url: '../commercial',
  narrative_url: '../narrative',
  edible_url: '',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal'
};

var dataProfessional = {
  home_url: '../../',
  music_url: '../../music',
  commercial_url: '../../commercial',
  narrative_url: '../../narrative',
  edible_url: '../../edible',
  professional_url: '',
  personal_url: '../personal'
};

var dataPersonal = {
  home_url: '../../',
  music_url: '../../music',
  commercial_url: '../../commercial',
  narrative_url: '../../narrative',
  edible_url: '../../edible',
  professional_url: '../professional',
  personal_url: ''
};

var htmlFunction, html;

// Change cases to live URL before launch
switch(location.href) {
  case "file:///Users/Jenn/Projects/old-pete-lee/index.html":
    htmlFunction = JST['handlebars/index.hbs'];
    html = htmlFunction(dataIndex);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/music/index.html":
    htmlFunction = JST['handlebars/videography.hbs'];
    html = htmlFunction(dataMusic);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/commercial/index.html":
    htmlFunction = JST['handlebars/videography.hbs'];
    html = htmlFunction(dataCommercial);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/narrative/index.html":
    htmlFunction = JST['handlebars/videography.hbs'];
    html = htmlFunction(dataNarrative);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/edible/index.html":
    htmlFunction = JST['handlebars/videography.hbs'];
    html = htmlFunction(dataEdible);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/photography/professional/index.html":
    htmlFunction = JST['handlebars/photography.hbs'];
    html = htmlFunction(dataProfessional);
    break;
  case "file:///Users/Jenn/Projects/old-pete-lee/photography/personal/index.html":
    htmlFunction = JST['handlebars/photography.hbs'];
    html = htmlFunction(dataPersonal);
    break;
}

$('body').prepend(html);

$(document).foundation();




