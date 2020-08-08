"use strict";

import readline from "readline-sync";

import * as model from "./Model";

import { printTweets } from "./View";

export function runSearch() {
    console.log("Here are some tweets by @UW_iSchool");
    const recent = model.getRecentTweets();
    printTweets(recent);

    const queryResponse = readline.question("Search tweets, or EXIT to quit: ");
    if(queryResponse === "EXIT") {
        return;
    }

    const results = model.searchTweets(queryResponse);
    printTweets(results);
}