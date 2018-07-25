// 引入https模块
const https = require('https')
// 引入 cheerio模块
const cheerio = require('cheerio');

// 定义网络爬虫的目标地址：iShadow免费SSR网站
const url = 'https://my.ishadowx.net/';

https.get(url, (res) => {
  let html = '';
  // 获取页面数据
  res.on('data', (data) => {
    html += data;
  });
  // 数据获取结束
  res.on('end', () => {
    console.log(html)
    // 使用 cheerio 加载抓取到的 HTML 代码
    // 然后就可以使用 jQuery 的方法了
    // 比如获取某个 class：$('.className')
    // 这样就能获取所有这个 class 包含的内容
    // let $ = cheerio.load(html);
    
  });
}).on('error', () => {
  console.log('get data failed');
});