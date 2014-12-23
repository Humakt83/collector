'use strict'

angular.module('collector').factory('Collections', function() {
	
	var imagePath = 'res/pics/'
	
	var collections = [
		{
			title: 'Sid Meier`s Civilization',
			image: imagePath + 'civilization.jpg',
			body: "Civilization series has been one of my all-time favourites since Civilization 2 which I got into late 90`s. Generally the series progression has been good and even though initial release of Civilization 5 was a disappointment, couple good expansions later it has easily become my favourite game in series and one that I consider possibly the best video game of all time. I`ve spent more than 900+ hours playing Civilization 5 which, at the moment, is over four times more played game than my next most played game in Steam library."
		},{
			title: 'Mass Effect',
			image: imagePath + 'masseffect.jpg',
			body: "My favourite scifi trilogy of choice with epic scenes, choices and consequences, good voice acting and trilogy-spanning plot of control versus freedom."
		},{
			title: 'Dragon Age',
			image: imagePath + 'dragonage.jpg',
			body: "There is just something magical in many Bioware titles that make you spend hundreds of hours playing them. Even Dragon Age 2's disappointing aspects and lack of polish did not stop me spending more hours than healthy exploring the world, getting invested in the story, honing your tactics and having fun moments with interesting companions. Like getting Aveline romanced to her inferior with Isabella mocking along as they go."
		}, {
			title: "Assassin's Creed",
			image: imagePath + 'assass.jpg',
			body: "Game series with fascinating historical events and lore with often wonderful architecture and scenery of tourist attractions. My favourites are Brotherhood and Black Flag."
		}, {
			title: 'Infinity Engine',
			image: imagePath + 'infinity.jpg',
			body: "Two of my favourite roleplaying games have been made using Infinity Engine, namely Baldur's Gate 2 (though whole trilogy is a must have) and Planescape: Torment."
		}, {
			title: 'Might & Magic',
			image: imagePath + 'homm.jpg',
			body: "Heroes of Might & Magic games have been my longtime favourites, especially its third and fourth incarnation. I've made plenty of maps for these games as well, which you can check <a href='http://www.celestialheavens.com/thundermaps/'>here.</a>"
		}
	]
	
	return {
		getCollections: function() {
			return collections
		}
	}
});