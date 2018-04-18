(function() {
    var quotes = [{
      text: "Every adversity caries with it the seed of an equivalent or greater benefit.",
      author: "Napoleon Hill"
    }, {
      text: "The average person puts only 25% of his energy and ability into his work. The world takes off its hat to those who put in more than 50% of their capacity, and stands on its head for those few and far between souls who devote 100%.",
      author: "Andrew Carnegie"
    }, {
      text: "If you think you can do a thing or think you can't do a thing, you're right.",
      author: "Henry Ford"
    }, {
      text: "Aim for the moon. If you miss, you may hit a star.",
      author: "W. Clement Stone"
    }, {
      text: "You are the universe, you aren't in the universe.",
      author: "Eckhart Tolle"
    }, {
      text: "Any action is often better than no action, especially if you have been stuck in an unhappy situation for a long time. If it is a mistake, at least you learn something, in which case it's no longer a mistake. If you remain stuck, you learn nothing.",
      author: "Eckhart Tolle"
    }, {
      text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      author: "Thomas Edison"
    }, {
      text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      author: "Thomas Edison"
    }, {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas Edison"
    }, {
      text: "People don’t realize that now is all there ever is; there is no past or future except as memory or anticipation in your mind.",
      author: "Eckhart Tolle"
    }, {
      text: "Time isn’t precious at all, because it is an illusion. What you perceive as precious is not time but the one point that is out of time: the Now. That is precious indeed. The more you are focused on time—past and future—the more you miss the Now, the most precious thing there is.",
      author: "Eckhart Tolle"
    }, {
      text: "Wherever you are, be there totally. If you find your here and now intolerable and it makes you unhappy, you have three options: remove yourself from the situation, change it, or accept it totally. If you want to take responsibility for your life, you must choose one of those three options, and you must choose now. Then accept the consequences.",
      author: "Eckhart Tolle"
    }, {
      text: "The beginning of freedom is the realization that you are not \“the thinker.\” The moment you start watching the thinker, a higher level of consciousness becomes activated. You then begin to realize that there is a vast realm of intelligence beyond thought, that thought is only a tiny aspect of that intelligence",
      author: "Eckhart Tolle"
    }, {
      text: "Whatever you fight, you strengthen, and what you resist, persists.",
      author: "Eckhart Tolle"
    }, {
      text: "Don’t Seek Happiness. If you seek it, you won’t find it, because seeking is the antithesis of happiness.",
      author: "Eckhart Tolle"
    }, {
      text: "Everyone comes to the earth plane blessed with the privilege of controlling his mind power and directing it towards whatever ends he may choose. But, everyone brings over with him at birth the equivalent of two sealed envelopes, one of which is clearly labeled: The Riches you may enjoy if you take possession of your own mind and direct it to ends of your own choice. And the other is labeled: The Penalties you must pay if you neglect to take possession your mind and direct it.",
      author: "Andrew Carnegie"
    }, {
      text: "Whatever the mind can conceive and believe, the mind can achieve",
      author: "Napoleon Hill"
    }, {
      text: "It is literally true that you can succeed best and quickest by helping others to succeed.",
      author: "Napoleon Hill"
    }, {
      text: "Action is the real measure of intelligence.",
      author: "Napoleon Hill"
    }, {
      text: "The lips of wisdom are closed, except to the ears of Understanding",
      author: "The Kybalion"
    }, {
      text: "When the ears of the student are ready to hear, then cometh the lips to fill them with Wisdom.",
      author: "The Kybalion"
    }, {
      text: "Every Cause has its Effect; every Effect has its Cause; everything happens according to Law; Chance is but a name for Law not recognized; there are many planes of causation, but nothing escapes the Law.",
      author: "The Kybalion"
    }, {
      text: "The mind is a superb instrument if used rightly. Used wrongly, however, it becomes very destructive. To put it more accurately, it is not so much that you use your mind wrongly — you usually don’t use it at all. It uses you. This is the disease. You believe that you are your mind. This is the delusion. The instrument has taken you over.",
      author: "Eckhart Tolle"
    }, {
        text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        author: "Alan Watts"
    }, {
        text: "Advice? I don’t have advice. Stop aspiring and start writing. If you’re writing, you’re a writer. Write like you’re a goddamn death row inmate and the governor is out of the country and there’s no chance for a pardon. Write like you’re clinging to the edge of a cliff, white knuckles, on your last breath, and you’ve got just one last thing to say, like you’re a bird flying over us and you can see everything, and please, for God’s sake, tell us something that will save us from ourselves. Take a deep breath and tell us your deepest, darkest secret, so we can wipe our brow and know that we’re not alone.",
        author: "Alan Watts"
    }, {
        text: "Success is the knowledge with which to get whatever you want from life without violating the rights of others and by helping others to acquire it.",
        author: "Napoleon Hill"
    }];
    
    function getRandomQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
	//return quotes[quotes.length - 1];
        return quotes[randomIndex];
    }

    var quotesContainerDiv = document.getElementById("quotes-container");
    var quotesTextDiv = document.getElementById("quotes-text");

    function updateQuote() {

        var header = document.getElementsByClassName("custom-header")[0];
        var quote = getRandomQuote();
        quotesTextDiv.classList.add("fade-out");

        document.getElementById("quote-text").textContent = quote.text;
        document.getElementById("quote-author").textContent = "- " + quote.author;
	console.log("HEIGHT", quotesTextDiv.clientHeight);
        quotesContainerDiv.style.top = (header.clientHeight / 2.3) - (quotesContainerDiv.clientHeight / 2) + "px";
    }
    updateQuote();

    var interval;
    quotesTextDiv.addEventListener("click", function() {
	console.log("CLICK");
        updateQuote();
        restartInterval();
    })

    function restartInterval() {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(function() {
        	updateQuote();
        }, 15 * 1000)
    }
    restartInterval();

}());
