const https = require('https')
const fs = require('fs')

function download(arr) {
  arr.forEach(url => {
    https.get(url, (res) => {
      let data = '';
      res.setEncoding('binary');
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        let file_name = `./img${url.split('qr')[1]}`
          // 调用 fs.writeFile 方法保存图片到本地        
        fs.writeFile(file_name, data, 'binary', (err) => {
          if (err) {
            console.log(err);
          }
          console.log(`Image downloaded: ${url}`);
        });
      })
    }).on('error', () => {
      console.log(`${url} download failed`);
    });
  });
}

module.exports = download