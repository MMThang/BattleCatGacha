import { rare, superRare, uberRare, legendRare } from "./data.js";

var renderShow = document.getElementById('show');
var selection = document.getElementById('banner');
var startButton = document.getElementById('start');
var numberOfCapsule = document.getElementsByClassName('numberOfCapsule')[0];
var numberOfCatfood = document.getElementsByClassName('numberOfCatfood')[0];
var Rare = document.getElementsByClassName('cats')[0];
var Super = document.getElementsByClassName('cats')[1];
var Uber = document.getElementsByClassName('cats')[2];
var Legend = document.getElementsByClassName('cats')[3];
var numberOfCapsuleOpened = 0;
var numberOfCatfoodSpent = 0;
var numberRare = 0;
var numberSuper = 0;
var numberUber = 0;
var numberLegend = 0;
var rareDropRate, superDropRate, uberDropRate, legendDropRate;
var legendBanner;
var randBanner;
var returnDropRate = [];

function ifEqualIDRare(randNumber) {
    return rare[randNumber];
}

function ifEqualIDSuper(randNumber) {
    return superRare[randNumber];
}

function ifEqualIDUber(randNumber, randBanner) {
    return uberRare[randBanner][randNumber];
}

var flatUberRare = uberRare.reduce((acc, cur) => {
    return acc.concat(cur);
})

function ifEqualIDUberSpecial(randNumber) {
    return flatUberRare[randNumber];
}

function ifEqualIDLegend(randBanner) {
    return legendRare[randBanner];
}

function reset() {
    numberRare = numberSuper = numberUber = numberLegend = numberOfCapsuleOpened = numberOfCatfoodSpent = 0;    
    renderShow.innerHTML = [];
    numberOfCapsule.innerHTML = 0;
    numberOfCatfood.innerHTML = 0;
    Rare.innerHTML = 0;
    Super.innerHTML = 0;
    Uber.innerHTML = 0;
    Legend.innerHTML = 0;
    returnDropRate.length = 0;
}

selection.onchange = function() {
    if(selection.selectedIndex !== 12){
        reset()
        rareDropRate = 69.7;
        superDropRate = 94.7;
        uberDropRate = 99.7;
        legendDropRate = 100;
        randBanner = selection.selectedIndex - 1;
        returnDropRate.push(rareDropRate, superDropRate, uberDropRate, legendDropRate, randBanner, legendBanner);
    } else {
        reset()
        rareDropRate = 65;
        superDropRate = 91;
        uberDropRate = 100;
        legendDropRate = 999;
        returnDropRate.push(rareDropRate, superDropRate, uberDropRate, legendDropRate);
    }
}

startButton.onclick = function() {
    var rewardCats = [];
    for(var i = 0; i < 11; i++) {
        var x = Math.random() * 100;
        if(x < rareDropRate){
            var randRare = Math.floor(Math.random() * rare.length);
            numberRare++;
            rewardCats.push(ifEqualIDRare(randRare));
        } else if(x < superDropRate){
            var randSuper = Math.floor(Math.random() * superRare.length);
            numberSuper++;
            rewardCats.push(ifEqualIDSuper(randSuper));
        } else if(x < uberDropRate){
            if(selection.selectedIndex !== 12){
                var randUber = Math.floor(Math.random() * uberRare[randBanner].length);
                rewardCats.push(ifEqualIDUber(randUber, randBanner));
            } else if(selection.selectedIndex === 12) {
                var randUberIndex = Math.floor(Math.random() * flatUberRare.length);
                rewardCats.push(ifEqualIDUberSpecial(randUberIndex));
            }
            numberUber++;    
        } else if(x < legendDropRate){
            rewardCats.push(ifEqualIDLegend(randBanner));
            numberLegend++;
        }
    }

    var show = `
    <ul>
        ${rewardCats.map(cat =>
            `<li style="background: ${cat.type}"><a href="${cat.link}" target="_blank">${cat.name}</a></li>`       
        )}
    </ul>
    `;

    renderShow.innerHTML = show;
    numberOfCapsuleOpened = numberOfCapsuleOpened + 11;
    numberOfCapsule.innerHTML = numberOfCapsuleOpened;
    numberOfCatfoodSpent = numberOfCatfoodSpent + 1500;
    numberOfCatfood.innerHTML = numberOfCatfoodSpent;
    Rare.innerHTML = numberRare;
    Super.innerHTML = numberSuper;
    Uber.innerHTML = numberUber;
    Legend.innerHTML = numberLegend;
}

