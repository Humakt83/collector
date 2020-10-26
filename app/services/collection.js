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
			body: "Civilization series has been one of my all-time favourites since Civilization 2 which I got into late 90`s. Generally the series progression has been good and even though initial release of Civilization 5 was a disappointment, couple good expansions later it has easily become my favourite game in series and one that I consider possibly the best video game of all time. Lately Civilization 6 has been improving but AI still has some difficulties to pose a proper challenge while the gameplay and design is a lot of fun."
		}, {
			title: 'Heroes of Might & Magic',
			images: mapToFullImagePaths(['homm1.jpg', 'homm2.jpg', 'homm3.jpg', 'homm4.jpg', 'homm5.jpg', 'homm6.png', 'homm7.jpg']),
			body: "Heroes of Might & Magic games have been my longtime favourites, especially its third and fourth incarnation. I've made plenty of maps for these games as well, which you can check <a href='http://www.celestialheavens.com/thundermaps/'>here.</a>"
		}, {
			title: 'Mass Effect',
			images: mapToFullImagePaths(['masseffect.jpg']),
			body: "My favourite scifi trilogy of choice with epic scenes, choices and consequences, good voice acting and trilogy-spanning plot of control versus freedom."
		},{
			title: 'Witcher',
			images: mapToFullImagePaths(['witcher1.jpg', 'witcher2.jpg', 'witcher3.jpg', 'witcher4.jpg', 'witcher5.jpg', 'witcher6.jpg', 'witcher7.jpg']),
			body: "Fantastic atmospheric games with rich lore, fascinating setting, great characters, and good branching storylines. This series seems to be getting better and better with each new incarnation."
		}, {
			title: 'Street Fighter',
			images: mapToFullImagePaths(['street1.jpg', 'street2.jpg']),
			body: 'Street Fighter is the only game series where I actively follow esports scene. Street Fighter 4 was a great introduction to series but the latest iteration of Street Fighter 5 is the best fighting game.'
		}, {
			title: 'Doom',
			images: mapToFullImagePaths(['doom1.jpg', 'doom2.jpg']),
			body: 'My all-time favourite series of FPS games. I have played original Doom and Doom 2 countless times, I do not mind the approach in Doom 3 and reboots are also great games.'
		}, {
			title: 'Infinity Engine',
			images: mapToFullImagePaths(['infinity.jpg']),
			body: "Two of my favourite roleplaying games have been made using Infinity Engine, namely Baldur's Gate 2 (though whole trilogy is a must have) and Planescape: Torment."
		},{
			title: 'Dragon Age',
			images: mapToFullImagePaths(['dragonage.jpg']),
			body: "There is just something magical in many Bioware titles that make you spend hundreds of hours playing them. Even Dragon Age 2's disappointing aspects and lack of polish did not stop me spending more hours than healthy exploring the world, getting invested in the story, honing your tactics and having fun moments with interesting companions. Like getting Aveline romanced to her inferior with Isabella mocking along as they go."
		}, {
			title: "Assassin's Creed",
			images: mapToFullImagePaths(['ass1.png', 'ass2.png', 'ass3.jpg', 'ass4.jpg', 'ass5.jpg', 'ass6.jpg', 'ass7.jpg']),
			body: "Game series with fascinating historical events and lore with often wonderful architecture and scenery of tourist attractions. My favourites are Origins, Brotherhood and Black Flag."
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
		}, {
			title: 'Divinity',
			images: mapToFullImagePaths(['divinity1.jpg', 'divinity2.jpg', 'divinity3.jpg']),
			body: 'While I`ve yet to play the older games in the series Divinity Original Sin was a great tactical rpg and its sequel is nothing short of a masterpiece, hitting all the nails predecessor missed.'			
		}, {
			title: 'Borderlands',
			images: mapToFullImagePaths(['border.jpg']),
			body: 'I am not a big fan of loot games, but Borderlands 2 was fun in cooperative mode'
		}, {
			title: 'Command & Conquer',
			images: mapToFullImagePaths(['cnc1.jpg']),
			body: 'Classical RTS genre. Original Red Alert was my favourite of the series. Mammoth thanks for the win.'
		}, {
			title: 'Dark Souls',
			images: mapToFullImagePaths(['darksouls.jpg', 'darksouls2.jpg']),
			body: 'Even though Souls games are widely regarded as game-changing masterpieces, I`ve yet to give them a serious try. Some day.',
		}, {
			title: 'Dead Space',
			images: mapToFullImagePaths(['dead.jpg']),
			body: 'Horror and gore in the space.'
		}, {
			title: 'Deus Ex',
			images: mapToFullImagePaths(['deus4.jpg', 'deus1.jpg', 'deus2.jpg', 'deus3.jpg', 'deus5.jpg']),
			body: 'Great scifi-rpg series which allows for sneaky pacifist playthroughs.'
		}, {
			title: 'Dishonored',
			images: mapToFullImagePaths(['dishonored1.png', 'dishonored2.jpg']),
			body: 'Excellent games that allow player to approach obstacles in multiple ways.'
		}, {
			title: 'Duke Nukem',
			images: mapToFullImagePaths(['duke.png']),
			body: 'Hail to the king baby! Original Duke Nukem 3D was lots of fun but Duke Nukem Forever took an eternity to come out and was rather poor game to say the least. Still it had nice compact collector`s edition which I nowadays prefer over ones containing large statues.',
		}, {
			title: 'Fallout',
			images: mapToFullImagePaths(['fallout1.jpg', 'fallout2.jpg']),
			body: 'War, war never changes. Overall a great post-nuclear rpg series with New Vegas being my favourite of the bunch.'
		}, {
			title: 'Grand Prix',
			images: mapToFullImagePaths(['grandprix.jpg']),
			body: 'I remember playing the original game with my father by taking turns driving in grand prix mode. I remember simulation being good in these though the graphics are obviously badly outdated.'
		}, {
			title: 'Leisure Suit Larry',
			images: mapToFullImagePaths(['larry.jpg']),
			body: 'Sexy adventure games all the way from 80`s. Love for Sail was my favourite.'
		}, {
			title: 'Quake',
			images: mapToFullImagePaths(['quake1.jpg', 'quake2.jpg', 'quake3.jpg']),
			body: 'I remember owning other students in IT-class soon after this game came out. Which was not a miracle since I was only one using mouse besides keyboard, which I learned to do all the way back in Wolfenstein 3D or Doom 1 if memory serves. My favourite game in the series is Quake 2 due to its combination of fun single-player campaign and fast action.'
		}, {
			title: 'Wolfenstein',
			images: mapToFullImagePaths(['wolf1.jpg', 'wolf2.jpg']),
			body: 'Wolfenstein the New Order is my favourite Wolfenstein game but I liked Return to Castle Wolfenstein a lot too.'
		}, {
			title: 'Magic the Gathering',
			images: mapToFullImagePaths(['mtg1.jpg', 'mtg2.jpg']),
			body: 'I started playing Magic the Gathering back in 1997 and still play it today with emphasis on Commander, Limited and Cube formats. I really liked Microprose`s PC version of the game and its world of Shandalar but I have never played its expansion. I also have complete From the Vault collection.'
		}, {
			title: 'Betrayal at Krondor, Jade Empire and Arcanum of Steamworks and Magick Obscura',
			images: mapToFullImagePaths(['various.jpg', 'arcanum.jpg', 'jade.jpg', 'bak.jpg']),
			body: 'Betrayal at Krondor and Arcanum are some of my all-time favourite RPG games that I still think fondly even nowadays. Jade Empire is also good and the setting is interesting though its clunky combat and shoddy camera are annoying.'
		}
	]
	
	return {
		getCollections: function() {
			return collections
		}
	}
});