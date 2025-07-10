const mathRequestHandler = (req, res) => {
  console.log ("in sum request handler",req.url);
  const body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end',() => {
    const bodyStr = Buffer.concat(body).toString();
    const param = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(param);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
 

  res.setHeader('Content-Type','text/html');
  res.write(`
    <html>
<head>
  <title>Practice Set</title>
</head>
<body>
  <h1>your sum is ${result}</h1>
  <a href="/">Go To Home</a>
</body>
</html>
    `);
    return res.end();
     });
}


exports.mathRequestHandler = mathRequestHandler