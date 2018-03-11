$(document).ready(function() {
  $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", function(data){
    //test to see if I got something
    //console.log("Success");
    //let bitTime = data.time.updated;
    //console.log(bitTime);
    //let bitDisclaimer = data.disclaimer;
    //console.log(bitDisclaimer);

    //USD
    let bitUsd = JSON.stringify(data.bpi.USD.code); //stringify
    let bitSymbUsd = JSON.stringify(data.bpi.USD.symbol);
    let bitRateUsd = JSON.stringify(data.bpi.USD.rate);
    //EUR
    let bitEur = JSON.stringify(data.bpi.EUR.code); //stringify
    let bitSymbEur = JSON.stringify(data.bpi.EUR.symbol);
    let bitRateEur = JSON.stringify(data.bpi.EUR.rate);
    //GBP
    let bitGbp = JSON.stringify(data.bpi.GBP.code); //stringify
    let bitSymbGbp = JSON.stringify(data.bpi.GBP.symbol);
    let bitRateGbp = JSON.stringify(data.bpi.GBP.rate);

    let bitTimeUpdated = JSON.stringify(data.time.updated);
    let bitDisclaimer = JSON.stringify(data.disclaimer);
    /*
    //gonna try something here where I make USD into array
    let bitUsdObj = data.bpi.USD;
    //let bitUsdObjArr = $.makeArray(bitUsdObj);
    let parsedUSD = JSON.parse(bitUsdObj);

    let arr = [];

    for(let x in parsedUSD){
      arr.push(parsedUSD[x]);
    }

    console.log(arr);
    */
    // html'ify the json
    let output = '';
    let disclaimer = '<p>' + bitDisclaimer + '</p>';
    let time = '<p>' + bitTimeUpdated + '</p>';
    let usdOutput = '<p class="closingPrice">'+ bitSymbUsd + bitRateUsd + " " + bitUsd + '</p>';
    let eurOutput = '<p class="closingPrice">'+ bitSymbEur + bitRateEur + " " + bitEur + '</p>';
    let gbpOutput = '<p class="closingPrice">'+ bitSymbGbp + bitRateGbp + " " + bitGbp + '</p>';
    output = usdOutput + eurOutput + gbpOutput + time + disclaimer;
    //test to see if my button works
    $('#showBtn').click(function() {
      //console.log(bitDisclaimer);
      $('div#outputToday').html(output.replace(/\"/g, ""));
    });

  });
});
