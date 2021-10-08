const express = require('express');
const line = require('@line/bot-sdk');
const axios = require('axios');
require('dotenv').config();

const app = express();

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);

app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
});

function handleEvent(event) {

    console.log(event);
    if (event.type === 'message' && event.message.type === 'text') {
        handleMessageEvent(event);
    } else {
        return Promise.resolve(null);
    }
}

function handleMessageEvent(event) {
    var msg = {
        type: 'text',
        text: 'สวัสดีครับ บอทของเราสามารถตรวจสอบ และ ปรับเปลี่ยน อุณหภูมิ ความดัน และความชื้นได้'
    };



    var eventText = event.message.text.toLowerCase();

    if (eventText === 'ความชื้นเครื่องที่ 1') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/1')
            .then((response) => {
                var humid = response['data']['data'][response.data.data.length-1]['humidity']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `ความชื้น ${humid} % ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }
    else if (eventText === 'ความดันเครื่องที่ 1') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/1')
            .then((response) => {
                var  pressure = response['data']['data'][response.data.data.length-1]['pressure']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `ความดัน ${pressure} Pa ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }
    else if (eventText === 'อุณหภูมิเครื่องที่ 1') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/1')
            .then((response) => {
                var  temperature = response['data']['data'][response.data.data.length-1]['temperature']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `อุณหภูมิ ${temperature} °C ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }
    else if (eventText === 'ความชื้นเครื่องที่ 2') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/2')
            .then((response) => {
                var humid = response['data']['data'][response.data.data.length-1]['humidity']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `ความชื้น ${humid} % ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }
    else if (eventText === 'ความดันเครื่องที่ 2') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/2')
            .then((response) => {
                var  pressure = response['data']['data'][response.data.data.length-1]['pressure']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `ความดัน ${pressure} Pa ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }
    else if (eventText === 'อุณหภูมิเครื่องที่ 2') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/2')
            .then((response) => {
                var  temperature = response['data']['data'][response.data.data.length-1]['temperature']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `อุณหภูมิ ${temperature} °C ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }
    else if (eventText === 'ความชื้นเครื่องที่ 3') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/3')
            .then((response) => {
                var humid = response['data']['data'][response.data.data.length-1]['humidity']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `ความชื้น ${humid} % ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }
    else if (eventText === 'ความดันเครื่องที่ 3') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/3')
            .then((response) => {
                var  pressure = response['data']['data'][response.data.data.length-1]['pressure']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `ความดัน ${pressure} Pa ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }
    else if (eventText === 'อุณหภูมิเครื่องที่ 3') {

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/3')
            .then((response) => {
                var  temperature = response['data']['data'][response.data.data.length-1]['temperature']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `อุณหภูมิ ${temperature} °C ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })


    }

    else if (eventText.includes("ปรับอุณหภูมิ")){
        

        var temp_c = eventText.split(/(\s+)/);
       
        axios.post('https://cn466-mid-server.herokuapp.com/Incubator/set', {
            "InID": temp_c[2],
            "option": "temperature",
            "value": temp_c[4]
          })
          .then(function (response) {
            msg = {
                type: 'text',
                text: `${eventText} °C สำเร็จ`
            };
            console.log(response);
            return client.replyMessage(event.replyToken, msg);
          })

          
          

          
    }
    else if (eventText.includes("ปรับความดัน")){
        

        var pre_c = eventText.split(/(\s+)/);
     
        axios.post('https://cn466-mid-server.herokuapp.com/Incubator/set', {
            "InID": pre_c[2],
            "option": "pressure",
            "value": pre_c[4]
          })
          .then(function (response) {
            msg = {
                type: 'text',
                text: `${eventText} Pa สำเร็จ`
            };
            console.log(response);
            return client.replyMessage(event.replyToken, msg);
          })
          
          

          


    }
    else if (eventText.includes("ปรับความชื้น")){
        

        var humid_c = eventText.split(/(\s+)/);
    
        axios.post('https://cn466-mid-server.herokuapp.com/Incubator/set', {
            "InID": humid_c[2],
            "option": "humidity",
            "value": humid_c[4]
          })
          .then(function (response) {
            msg = {
                type: 'text',
                text: `${eventText} % สำเร็จ`
            };
            console.log(response);
            return client.replyMessage(event.replyToken, msg);
          })
          
          

         
    }
    else if (eventText === 'เครื่องที่ 1'){
        

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/1')
            .then((response) => {
                var  pressure = response['data']['data'][response.data.data.length-1]['pressure']
                var humid = response['data']['data'][response.data.data.length-1]['humidity']
                var temp = response['data']['data'][response.data.data.length-1]['temperature']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `เครื่องที่ 1 ความดัน ${pressure} Pa ,ความชื้น ${humid} % ,อุณหภูมิ ${temp} °C ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })
          

         
    }
    else if (eventText === 'เครื่องที่ 2'){
        

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/1')
            .then((response) => {
                var  pressure = response['data']['data'][response.data.data.length-1]['pressure']
                var humid = response['data']['data'][response.data.data.length-1]['humidity']
                var temp = response['data']['data'][response.data.data.length-1]['temperature']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `เครื่องที่ 2 ความดัน ${pressure} Pa ,ความชื้น ${humid} % ,อุณหภูมิ ${temp} °C ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })
          

         
    }
    else if (eventText === 'เครื่องที่ 3'){
        

        axios.get('https://cn466-mid-server.herokuapp.com/Incubator/IncubatorID/1')
            .then((response) => {
                var  pressure = response['data']['data'][response.data.data.length-1]['pressure']
                var humid = response['data']['data'][response.data.data.length-1]['humidity']
                var temp = response['data']['data'][response.data.data.length-1]['temperature']
                var timestamp = response['data']['data'][response.data.data.length-1]['timestamp']
                msg = {
                    type: 'text',
                    text: `เครื่องที่ 3 ความดัน ${pressure} Pa ,ความชื้น ${humid} % ,อุณหภูมิ ${temp} °C ณ เวลา ${timestamp}`
                };
                console.log(msg)
                return client.replyMessage(event.replyToken, msg);

            })
            .catch((err) => { console.log(err) })
          

         
    }
    

    else{
        msg = {
            type: 'text',
            text: `สวัสดีครับ บอทของเราสามารถตรวจสอบ และ ปรับเปลี่ยน อุณหภูมิ ความดัน และความชื้นได้ โดยจะมีเครื่อง3เครื่อง`
        };
        return client.replyMessage(event.replyToken, msg);
    }

}

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'));
});