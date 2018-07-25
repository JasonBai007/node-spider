const https = require('https')
const fs = require('fs')
const url = 'https://my.ishadowx.net/';

https.get(url, (res) => {
  let html = '';
  // 获取页面数据
  res.on('data', (data) => {});
  // 数据获取结束
  res.on('end', () => {

  });
}).on('error', () => {
  console.log('download data failed');
});