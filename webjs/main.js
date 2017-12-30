var socket = io();
//console.log("data emitted");
//socket.emit("getMatchHistory", "");
//var document = require('html-element').document;
socket.emit("getMatchHistory");
socket.on("matchHistory", function(summonerData, gamesList, idList, currentRunesList, advisedRunesList, champList) {
    console.log(summonerData);
    console.log(gamesList);
    console.log(idList);
    console.log(currentRunesList);
    console.log(champList);
    console.log(gamesList[0].participants[idList[0] - 1].spell1Id);
    document.getElementById("nameplate").innerHTML = summonerData.name;
    for(var i  in champList)
    {
        var id = "champcontent" + i + "-2";
        console.log(id);
        if(i > 7)
        {
            break;
        }
        document.getElementById(id).src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/" + champList[i] + ".png";
        id = "matchcontent" + i;
        document.getElementById(id).style.backgroundImage = "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champList[i] + "_0.jpg')";
        console.log(id);
    }
    for(var j in gamesList)
    {
        if(j > 7)
        {
            break;
        }
        var sumID ="";
        var sumswitch = gamesList[j].participants[idList[0] - 1].spell1Id;
        console.log(sumswitch);
        switch(sumswitch)
        {
            case 1:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerBoost.png";
                break;
            case 3:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerExhaust.png";
                break;
            case 4:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png";
                break;
            case 7:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerHeal.png";
                break;
            case 11:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerSmite.png";
                break;
            case 12:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerTeleport.png";
                break;
            case 14:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerDot.png";
                break;
            case 21:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerBarrier.png";
                break;
            case 39:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerSnowball.png";
                break;
            default:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png";
                break;
        }
        id = "champcontent" + j +"-4";
        console.log("id:" + id);
        document.getElementById(id).src = sumID;
    }
    for(var k in gamesList)
    {
        if(k > 7)
        {
            break;
        }
        sumID ="";
        sumswitch = gamesList[k].participants[idList[0] - 1].spell2Id;
        switch(sumswitch)
        {
            case 1:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerBoost.png";
                break;
            case 3:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerExhaust.png";
                break;
            case 4:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png";
                break;
            case 7:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerHeal.png";
                break;
            case 11:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerSmite.png";
                break;
            case 12:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerTeleport.png";
                break;
            case 14:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerDot.png";
                break;
            case 21:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerBarrier.png";
                break;
            case 39:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerSnowball.png";
                break;
            default:
                sumID = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/SummonerFlash.png";
                break;
        }
        id = "champcontent" + k +"-3";
        console.log("id:" + id);
        document.getElementById(id).src = sumID;
    }
    for(var m in gamesList)
    {
        if(m > 7)
        {
            break;
        }
        document.getElementById("itemscontent" + m  + "-1").src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/" + gamesList[m].participants[idList[0] - 1].stats.item0 +".png";
        document.getElementById("itemscontent" + m  + "-2").src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/" + gamesList[m].participants[idList[0] - 1].stats.item1 +".png";
        document.getElementById("itemscontent" + m  + "-3").src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/" + gamesList[m].participants[idList[0] - 1].stats.item2 +".png";
        document.getElementById("itemscontent" + m  + "-4").src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/" + gamesList[m].participants[idList[0] - 1].stats.item6 +".png"; //this element is trinket slot
        document.getElementById("itemscontent" + m  + "-5").src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/" + gamesList[m].participants[idList[0] - 1].stats.item3 +".png";
        document.getElementById("itemscontent" + m  + "-6").src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/" + gamesList[m].participants[idList[0] - 1].stats.item4 +".png";
        document.getElementById("itemscontent" + m  + "-7").src = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/" + gamesList[m].participants[idList[0] - 1].stats.item5 +".png";
        console.log(gamesList[m].participants[idList[0] - 1].stats.item6 +".png")
    }
    for(var kdaelement in gamesList)
    {
        // this currently returns undefined everything
       //document.getElementById("KDAcontent" + kdaelement + "-1").innerHTML = gamesList[kdaelement].participants[idList[0] - 1].kills  + " | " + gamesList[kdaelement].participants[idList[0] - 1].deaths  + " | " + gamesList[kdaelement].participants[idList[0] - 1].assists;
    }
});

socket.on("modifyHTML", function(data){
    console.log("changing HTML");
    document.getElementById("nameplate").innerHTML = data;

});

socket.on("noSummFound", function() {
    console.log("No summoner found");
});
