const https = require('https')
const cheerio = require('cheerio');
const download = require('./util/tools.js')

// 定义网络爬虫的目标地址：iShadow免费SSR网站
const url = 'https://us.ishadowx.net/';

https.get(url, (res) => {
  let html = '';
  // 获取页面数据
  res.on('data', (data) => {
    html += data;
  });
  res.on('end', () => {
    // 使用 cheerio 加载抓取到的 HTML 代码
    // 然后就可以使用 jQuery 的方法了
    // 比如获取某个 class：$('.className')
    // 这样就能获取所有这个 class 包含的内容
    let $ = cheerio.load(html);
    let _arr = []
    $('.portfolio-item').each((i, elem) => {
      // 获取目标元素的url
      let img_url = $(elem).find('a[data-lightbox-gallery]').attr('href')
      _arr.push(url + img_url)
    })
    let imgs = _arr.slice(0, 9)
    download(imgs)

  });
}).on('error', () => {
  console.log('get data failed');
});
