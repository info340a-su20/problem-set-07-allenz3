'use strict';

import allTweets from "./uw_ischool_tweets";

const tweetData = allTweets.map((tweetObject) => {
    const mappedObject = {
        text: tweetObject.text,
        timestamp: Date.parse(tweetObject.created_at)
    }
    return mappedObject;
});

export function getRecentTweets() {
    tweetData.sort((tweet1, tweet2) => {
        return tweet2.timestamp - tweet1.timestamp;
    });
    return tweetData.slice(0, 5);
}

export function searchTweets(searchQuery) {
    const results = tweetData.filter((tweetObject) => {
        return (
            tweetObject.text
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) >= 0
        );
    });
    return results;
}

