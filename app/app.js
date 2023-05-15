const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 8080;
const endpointUri = process.env.ENDPOINT;
const redirectUrl = process.env.REDIRECT_URL;
const uffizziUrl = process.env.UFFIZZI_URL;
const uffizziDomain = process.env.UFFIZZI_DOMAIN;
const uffizziPredictableUrl = process.env.UFFIZZI_PREDICTABLE_URL;

const messages = [
  `End point: ${endpointUri}`,
  `Redirect Url: ${redirectUrl}`,
  `UFFIZZI_URL: ${uffizziUrl}`,
  `UFFIZZI_DOMAIN: ${uffizziDomain}`,
  `UFFIZZI_PREDICTABLE_URL: ${uffizziPredictableUrl}`,
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const body = messages.join(' | ')

  res.end(body);
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
  messages.forEach((m) => console.log(m))
});
