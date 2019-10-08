/*
Theme Name: HUGE
Description: Creative Coming Soon Template
Author: SquirrelLabs
Author URI: https://themeforest.net/user/squirrellabs/portfolio?ref=SquirrelLab
Version: 1.0
License: https://themeforest.net/licenses/standard
*/

var makeWinHeight = function(){
	var vh = $(window).height();
	var projects = vh/2 + vh/4;
	var main = projects * 1;
	$('#scene, .layer.gradient, #canvas-basic').height(vh);
	$('#scene .col a, #scene .col').height(projects);
	$('.layer.main').height(main);
}
$(document).ready(function(){
	makeWinHeight();
});
$(window).resize(function(){
	makeWinHeight();
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var app = angular.module('huge', ['ngSanitize']);

app.controller('cardsController', function(){
    this.cards = cardlist;
});

var cardlist = [
    
    {
        image: 'images/portfolio/MK2.jpg',
        title: 'React - Mortal Kombat Memory Game',
        url: 'https://github.com/wmcclung/ReactMemorizationGame',
    },

    {
        image: 'images/portfolio/img1.jpg',
        title: 'Firebase - Soul Train Schedular',
        url: 'https://github.com/wmcclung/Train-Scheduler',
    },

    {
        image: 'images/portfolio/Kobe gif.gif',
        title: 'APIs - NBA Gif Generator',
        url: 'https://github.com/wmcclung/gif-excerise',
    },
    {
        image: 'images/portfolio/skateboard-professor-meme-final.jpg',
        title: 'Mongo DB - r/skateboarding Scraper',
        url: 'https://github.com/wmcclung/MongoScraper',
    },


    //{
        image: 'images/portfolio/img3.jpg',
        title: 'Bulls Beats Battlestar Galatica.com',
        url: 'https://bullsbeatsbattlestargalactica.com/',
    }
   
    
];

