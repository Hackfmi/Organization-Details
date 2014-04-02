var
    teams = require("./teams.json"),
    topics = ["Hack_For_Education", "Hack_For_FMI"],
    _ = require("underscore"),
    underscoreToWhite = function(str) {
        return str.replace(new RegExp("_", "g"), " ");
    },
    mdItemListify = function(str) {
        return ["*"," ", str].join("");
    };

    topics
        .forEach(function(item) {
            var shuffledTeamsList = 
                                _.shuffle(teams[item])
                                .map(function(shuffledTeam) {
                                    return shuffledTeam.name;
                                })
                                .map(mdItemListify);

            console.log("## ", underscoreToWhite(item));
            console.log(shuffledTeamsList.join("\n"));
        });