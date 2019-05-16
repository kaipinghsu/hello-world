var https = require('https');
var fs = require('fs');
var options = {
    host: 'pm25.lass-net.org',
    port: 443,
    path: '/data/last.php?device_id=74DA38F20A3A' //74DA38C7D334
};

var content = "";
https.get(options, function (res) {
            res.setEncoding("utf8");
            console.error(res.statusCode);
            res.on("data", function (chunk) {
                content += chunk;
            });
            res.on("end", function () {
                    console.log(content);
                    var PM25data = JSON.parse(content);
                    var curdata = PM25data.feeds[0].AirBox;
                    console.log("PM2.5 濃度 =" + curdata.s_d0);
                    console.log("溫度 =" + curdata.s_t0);
                    console.log("濕度 =" + curdata.s_h0);
                    console.log("時間" + curdata.timestamp);                    
                    });
                

            });