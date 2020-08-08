"use strict";

import { getRecentTweets } from "./Model";

export function printTweets(tweetArray) {
    if(tweetArray.length == 0) {
        console.log("No tweets found");
    }

    for(const tweetObject of tweetArray) {
        const time = new Date(tweetObject.timestamp);
        console.log("- \"" + 
            tweetObject.text + "\" (" + 
            time.toLocaleString("en-US") +
        ")")
    }
}

const recent = getRecentTweets();
printTweets(recent);