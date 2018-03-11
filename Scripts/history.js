$(document).ready(function() {
  $.getJSON("https://api.coindesk.com/v1/bpi/historical/close.json", function(data){
    //test to see if I got something
    console.log(data.bpi);

    let historyArray = [];

    for(let i in data.bpi){
      historyArray.push([i,data.bpi[i]]);
    }

    console.log(JSON.stringify(historyArray));
    console.log(historyArray);
    console.log(historyArray[0][1]);


    let output = '';
    let bitDisclaimer = JSON.stringify(data.disclaimer);
    let bitTime = JSON.stringify(data.time.updated);
    console.log(bitDisclaimer);
    console.log(bitTime);

    output = '<p>Last updated:' + bitTime + '</p>' + '<p>' + bitDisclaimer + '</p>';

    let priceIndexArray = [];
    let historyIndexArray = [];
    console.log(historyArray.length);

    for(let i = 0; i < historyArray.length - 1; i++){
      console.log(historyArray[i][1]); //test for results
      priceIndexArray.push(historyArray[i][1]);
      historyIndexArray.push(historyArray[i][0]);
    }
    console.log(priceIndexArray);
    console.log(historyIndexArray);

    /*
    let dataArray = [];
    row = [];
    let header = ['Date', 'Price'];
    dataArray.push(header);
    row.push(historyIndexArray);
    row.push(priceIndexArray);
    //console.log(dataArray);
    console.log(row);
    //dataArray.push(row);
    //console.log(dataArray);
    */



    //let bitTime = data.time.updated;
    //console.log(bitTime);
    //let bitDisclaimer = data.disclaimer;
    //console.log(bitDisclaimer);

    //USD

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

    //test to see if my button works

    $('#showBtn').click(function() {
      //console.log(bitDisclaimer);
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Date', 'Price'],
            [historyIndexArray[0], priceIndexArray[0]],
            [historyIndexArray[1], priceIndexArray[1]],
            [historyIndexArray[2], priceIndexArray[2]],
            [historyIndexArray[3], priceIndexArray[3]],
            [historyIndexArray[4], priceIndexArray[4]],
            [historyIndexArray[5], priceIndexArray[5]],
            [historyIndexArray[6], priceIndexArray[6]],
            [historyIndexArray[7], priceIndexArray[7]],
            [historyIndexArray[8], priceIndexArray[8]],
            [historyIndexArray[9], priceIndexArray[9]],
            [historyIndexArray[10], priceIndexArray[10]],
            [historyIndexArray[11], priceIndexArray[11]],
            [historyIndexArray[12], priceIndexArray[12]],
            [historyIndexArray[13], priceIndexArray[13]],
            [historyIndexArray[14], priceIndexArray[14]],
            [historyIndexArray[15], priceIndexArray[15]],
            [historyIndexArray[16], priceIndexArray[16]],
            [historyIndexArray[17], priceIndexArray[17]],
            [historyIndexArray[18], priceIndexArray[18]],
            [historyIndexArray[19], priceIndexArray[19]],
            [historyIndexArray[20], priceIndexArray[20]],
            [historyIndexArray[21], priceIndexArray[21]],
            [historyIndexArray[22], priceIndexArray[22]],
            [historyIndexArray[23], priceIndexArray[23]],
            [historyIndexArray[24], priceIndexArray[24]],
            [historyIndexArray[25], priceIndexArray[25]],
            [historyIndexArray[26], priceIndexArray[26]],
            [historyIndexArray[27], priceIndexArray[27]],
            [historyIndexArray[28], priceIndexArray[28]],
            [historyIndexArray[29], priceIndexArray[29]],
          ]);

          var options = {
            title: '30-Day Bitcoin Price History',
            width: 1000,
            height: 400,
            curveType: 'function',
            legend: { position: 'bottom' }
          };

        let chart = new google.visualization.LineChart(document.getElementById('outputChart'));
        chart.draw(data, options);
        $('div#outputDisclaimer').html(output.replace(/\"/g, ""));
      }
      //

    });
  });
});
