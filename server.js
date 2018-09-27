const https = require('https');
const fs = require('fs');
var cookies = require('cookies');

const options = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/certificate.pem'),
  passphrase: 'secret'
};
var keys = ['AWSALB'];

https.createServer(options, (req, res) => {
  
  var cks = new cookies(req, res, { keys: keys });
  var ckawsalb = cks.get('AWSALB');
  console.log(ckawsalb);
  if(ckawsalb){
	// Set the cookie to a value
  	cks.set('AWSALB', ckawsalb, {secure: true })
  }
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8080);
