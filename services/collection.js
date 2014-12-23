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
			body: "My favourite scifi trilogy of choice (take that Star Wars!)."
		},{
			title: 'Dragon Age',
			image: imagePath + 'dragonage.jpg',
			body: "There is just something magical in many Bioware titles that make you spend hundreds of hours playing them. Even Dragon Age 2's disappointing aspects and lack of polish did not stop me spending more hours than healthy exploring the world, getting invested in the story, honing your tactics and having fun moments with interesting companions. Like getting Aveline romanced to her inferior with Isabella mocking along as they go."
		}
	]
	
	return {
		getCollections: function() {
			return collections
		}
	}
});