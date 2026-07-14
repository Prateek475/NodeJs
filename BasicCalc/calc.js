function requestListner(req,res) {
  if(req.url.toLowerCase() == '/') {
    res.setHeader('Content-type','text/html');
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Calculator</title>
      </head>
      <body>
        <h1>Welcome to calculator</h1> <br>
        <a href="/calculator">Calc page</a>
      </body>
      </html>`
    );
  } else if(req.url.toLowerCase()=='/calculator') {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Calulator</title>
      </head>
      <body>
        <h1>Welcome to calculator page</h1>
        <form action="/calculator-result" method="POST">
          <input type="text" placeholder="Enter value1" name="value1">
          <br><br>
          <input type="text" placeholder="Enter value2" name="value2">
          <br><br>
          <button type="submit">Submit</button>
        </form>
      </body>
      </html>`
    );
  } else if(req.url.toLowerCase() == '/calculator-result' && req.method == 'POST') {
    const body = [];
    req.on('data',chunks => {
      body.push(chunks);
    });
    req.on('end',() => {
      const parse = Buffer.concat(body).toString();
      const param = new URLSearchParams(parse);
      const bodyObj = {};
      for (const [key,val] of param.entries()) {
        bodyObj[key] = val;
      }
      let sum = Number(bodyObj.value1)+Number(bodyObj.value2);
      res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Calulator</title>
        </head>
        <body>
          <h1>Sum of numbers is ${sum}</h1>
        </body>
        </html>`
      );
    })
  }
}

module.exports = requestListner;