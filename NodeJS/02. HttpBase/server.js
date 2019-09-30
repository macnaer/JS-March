const http = require('http');

const PORT = 81;



const server = http.createServer((req ,res) => {
    const url = req.url;
    if (url === "/"){
        //console.log("/ - works")
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Web Server</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<main>");
        res.write("<h1>Hello World</h1>");
        res.write("</main>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else if (url === "/about") {
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Web Server</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<main>");
        res.write("<h1>About us</h1>");
        res.write("</main>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
    else{
        res.setHeader("Content-type", "text/html");
        //res.setHeader("Content-type", "application/json");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Web Server</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<main>");
        res.write("<h1>404 Page not found!</h1>");
        res.write("</main>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
})


server.listen(PORT);
server.listen(PORT);
server.listen(PORT);

//console.log(http.STATUS_CODES);
//console.log(http.METHODS);
