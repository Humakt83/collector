'use strict'

angular.module('collector').factory('Collections', function() {
	
	var imagePath = 'res/pics/'

	var mapToFullImagePaths = function(images) {
		return images.map(function(img) { return imagePath + img});
	}
	
	var collections = [
		{
			title: 'Sid Meier`s Civilization',
			images: mapToFullImagePaths(['civ1.png', 'civ2.jpg', 'civ3.jpg', 'civ4.jpg', 'civ5.jpg', 'civ6.jpg']),
			body: "Civilization series has been one of my all-time favourites since Civilization 2 which I got into late 90`s. Generally the series progression has been good and even though initial release of Civilization 5 was a disappointment, couple good expansions later it has easily become my favourite game in series and one that I consider possibly the best video game of all time. I`ve spent more than 900+ hours playing Civilization 5 which, at the moment, is over four times more played game than my next most played game in Steam library."
		},{
			title: 'Mass Effect',
			images: mapToFullImagePaths(['masseffect.jpg']),
			body: "My favourite scifi trilogy of choice with epic scenes, choices and consequences, good voice acting and trilogy-spanning plot of control versus freedom."
		},{
			title: 'Witcher',
			images: mapToFullImagePaths(['witcher.jpg']),
			body: "Fantastic atmospheric games with rich lore, fascinating setting, great characters, and good branching storylines. This series seems to be getting better and better with each new incarnation."
		},{
			title: 'Dragon Age',
			images: mapToFullImagePaths(['dragonage.jpg']),
			body: "There is just something magical in many Bioware titles that make you spend hundreds of hours playing them. Even Dragon Age 2's disappointing aspects and lack of polish did not stop me spending more hours than healthy exploring the world, getting invested in the story, honing your tactics and having fun moments with interesting companions. Like getting Aveline romanced to her inferior with Isabella mocking along as they go."
		}, {
			title: "Assassin's Creed",
			images: mapToFullImagePaths(['assass.jpg']),
			body: "Game series with fascinating historical events and lore with often wonderful architecture and scenery of tourist attractions. My favourites are Brotherhood and Black Flag."
		}, {
			title: 'Infinity Engine',
			images: mapToFullImagePaths(['infinity.jpg']),
			body: "Two of my favourite roleplaying games have been made using Infinity Engine, namely Baldur's Gate 2 (though whole trilogy is a must have) and Planescape: Torment."
		}, {
			title: 'Might & Magic',
			images: mapToFullImagePaths(['homm.jpg']),
			body: "Heroes of Might & Magic games have been my longtime favourites, especially its third and fourth incarnation. I've made plenty of maps for these games as well, which you can check <a href='http://www.celestialheavens.com/thundermaps/'>here.</a>"
		}, {
			title: 'Bioshock',
			images: mapToFullImagePaths(['bioshock.jpg']),
			body: 'Bioshock series have always been very atmospheric first-person shooters with horror elements, fascinating story and interesting characters. Lamented Bioshock 2 is actually my favourite of the series due to improved gameplay, neutral ending of that particular title was very emotianal and memorable. Not that the other games in the series lacked great endings.'
		}, {
			title: 'The Elder Scrolls',
			images: mapToFullImagePaths(['tes.jpg']),
			body: 'Acclaimed sandbox rpg-series, with fascinating and well-built worlds but often lackluster stories. I believe you can guess from the picture which game of the series was my favourite.'
		}, {
			title: 'Crysis',
			images: mapToFullImagePaths(['crysis.jpg']),
			body: 'Crysis series usually have pushed the limits of what you can do with graphics one way or another and they are actually solid first-person shooters as well with powers provided by nanosuit. The backpack in the picture contains my gaming laptop.'
		}, {
			title: 'Blizzard',
			images: mapToFullImagePaths(['blizzard.jpg']),
			body: 'Mix of Blizzard`s games I`ve collected over the years. I am not particularly fond of any series by Blizzard but they do make quality collector edition`s and polish their games often religiously.'
		}
	]
	
	return {
		getCollections: function() {
			return collections
		}
	}
});