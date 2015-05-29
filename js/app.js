var dataIndex = {
  home_url: '',
	music_url: 'music',
	branded_url: 'branded',
	narrative_url: 'narrative',
	professional_url: 'photography/professional',
	personal_url: 'photography/personal'
};

var dataMusic = {
  home_url: '../',
  music_url: '',
  branded_url: '../branded',
  narrative_url: '../narrative',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal',
  videos: [{
    id: '120522773',
    title: 'Meklit Hadero feat. Samuel Yirga - Kemekem',
    thumbnailUrl: 'http://i.vimeocdn.com/video/515502687_640.webp'
  }, {
    id: '91651414',
    title: 'Atmosphere - Kanye West (Official Music Video)',
    thumbnailUrl: 'http://i.vimeocdn.com/video/471389381_640.webp'
  }, {
    id: '79086655',
    title: 'Extranjero',
    thumbnailUrl: 'http://i.vimeocdn.com/video/454684232_640.webp'
  }, {
    id: '67242039',
    title: 'Patton Oswalt does the Magic Clap',
    thumbnailUrl: 'http://i.vimeocdn.com/video/439190405_640.webp'
  }, {
    id: '62309914',
    title: 'The Uncluded - Delicate Cycle',
    thumbnailUrl: 'http://i.vimeocdn.com/video/432151595_640.webp'
  }, {
    id: '54213282',
    title: 'Wolf Larsen - If I Be Wrong',
    thumbnailUrl: 'http://i.vimeocdn.com/video/462728100_640.webp'
  }, {
    id: '49484881',
    title: 'Aesop Rock - ZZZ Top',
    thumbnailUrl: 'http://i.vimeocdn.com/video/341462416_640.webp'
  }, {
    id: '79146873',
    title: 'Megan Keely - Just Enough Time',
    thumbnailUrl: 'http://i.vimeocdn.com/video/457106933_640.webp'
  }, {
    id: '49483012',
    title: "The Coup's Magic Clap",
    thumbnailUrl: 'http://i.vimeocdn.com/video/341457679_640.webp'
  }, {
    id: '30934752',
    title: 'Behind the Eyelids Presents: John Heart Jackie',
    thumbnailUrl: 'http://i.vimeocdn.com/video/208087020_640.webp'
  }, {
    id: '49484882',
    title: 'Aesop Rock - Cycles to Gehenna',
    thumbnailUrl: 'http://i.vimeocdn.com/video/455321873_640.webp'
  }]
};

var dataBranded = {
  home_url: '../',
  music_url: '../music',
  branded_url: '',
  narrative_url: '../narrative',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal',
  videos: [{
    id: '125626176',
    title: '100 OpenTables: Brand Video',
    thumbnailUrl: 'http://i.vimeocdn.com/video/515793661_640.webp'
  }, {
    id: '124724818',
    title: 'Sols - Live Your Life',
    thumbnailUrl: 'http://i.vimeocdn.com/video/514560403_640.webp'
  }, {
    id: '108527682',
    title: 'Basis Peak by Intel: Brand Video',
    thumbnailUrl: 'http://i.vimeocdn.com/video/494060524_640.webp'
  }, {
    id: '92594646',
    title: 'Cirq - Russia River Valley',
    thumbnailUrl: 'http://i.vimeocdn.com/video/472364799_640.webp'
  }, {
    id: '92575084',
    title: 'Craft - by Cost Plus World Market',
    thumbnailUrl: 'http://i.vimeocdn.com/video/472337519_640.webp'
  }, {
    id: '128915836',
    title: 'Calphalon YOURSET Heirloom Tomato Sauce Recipe',
    thumbnailUrl: 'http://i.vimeocdn.com/video/520214113_640.webp'
  }, {
    id: '73995049',
    title: "Robert Mondavi's Coastal Crush (extended cut)",
    thumbnailUrl: 'http://i.vimeocdn.com/video/455321339_640.webp'
  }]
};

var dataNarrative = {
  home_url: '../',
  music_url: '../music',
  branded_url: '../branded',
  narrative_url: '',
  professional_url: '../photography/professional',
  personal_url: '../photography/personal',
  videos: [{
    id: '79282772',
    title: 'Rope a Dope',
    thumbnailUrl: 'http://i.vimeocdn.com/video/455321927_640.webp'
  }, {
    id: '116523821',
    title: 'Rope A Dope 2',
    thumbnailUrl: 'http://i.vimeocdn.com/video/503032964_640.webp'
  }, {
    id: '91651414',
    title: 'Atmosphere - Kanye West (Official Music Video)',
    thumbnailUrl: 'http://i.vimeocdn.com/video/471389381_640.webp'
  }, {
    id: '49484881',
    title: 'Aesop Rock - ZZZ Top',
    thumbnailUrl: 'http://i.vimeocdn.com/video/341462416_640.webp'
  }]
};

var dataProfessional = {
  home_url: '../../',
  music_url: '../../music',
  branded_url: '../../branded',
  narrative_url: '../../narrative',
  professional_url: '',
  personal_url: '../personal'
};

var dataPersonal = {
  home_url: '../../',
  music_url: '../../music',
  branded_url: '../../branded',
  narrative_url: '../../narrative',
  professional_url: '../professional',
  personal_url: ''
};

var htmlFunction, html;

$(document).ready(function(){
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
    case "file:///Users/Jenn/Projects/old-pete-lee/branded/index.html":
      htmlFunction = JST['handlebars/videography.hbs'];
      html = htmlFunction(dataBranded);
      break;
    case "file:///Users/Jenn/Projects/old-pete-lee/narrative/index.html":
      htmlFunction = JST['handlebars/videography.hbs'];
      html = htmlFunction(dataNarrative);
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

  // Prepend the template to the body
  $('body').prepend(html);

  // Use fit vids to make videos responsive
  $(".video__outer").fitVids();

  var homePhotoURLs = [
    'https://farm8.staticflickr.com/7246/8155561235_ac9e5b2cde_o.jpg',
    'https://farm8.staticflickr.com/7153/6675594551_11a1ce9c28_o.jpg',
    'https://farm8.staticflickr.com/7350/12799015685_6aa3122f86_o.jpg',
  ];

  var randomImgURL;
  randomImgURL = homePhotoURLs[Math.floor(Math.random() * homePhotoURLs.length)];
  $('body').css('background-image', 'url(' + randomImgURL + ')');

  $(document).foundation();
});

// Add shadow only after asset load
$(window).load(function() {
  $('.video__outer').css('box-shadow', '0 0 5px 0 #222');

  if (location.href !== 'file:///Users/Jenn/Projects/old-pete-lee/index.html') {
    var docHeight = $(document).height();
    $('body').append('<div class="overlay"></div>');
    $('.overlay')
      .height(docHeight)
      .css({
         'opacity' : 0.75,
         'position': 'absolute',
         'top': 0,
         'left': 0,
         'background-color': 'white',
         'width': '100%',
      });
  }
});




