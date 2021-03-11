const http = require('http');
const path = require('path');
const fs = require('fs');
const { extname } = require('path');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	let filepath = path.join(
		__dirname,
		'public',
		(req.url = '/' ? 'index.html' : req.url)
	);

	//Extension
	let ext = path.extname(filepath);

	//Content-Type
	let content_type = 'text/html';

	switch (extname) {
		case '.js':
			content_type = 'text/javascript';
			break;

		case '.css':
			content_type = 'text/css';
			break;

		case '.json':
			content_type = 'application/json';
			break;

		case '.png':
			content_type = 'image/png';
			break;

		case '.jpg':
			content_type = 'image/jpg';
			break;
	}

	//Read File
	fs.readFile(filepath, (err, content) => {
		if (err) {
			if (err.code == 'ENOENT') {
				//Page not found
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end('Page not Found');
				console.log('err');
			} else {
				res.writeHead(500);
				res.end(`Server Error ${err.code}`);
			}
		} else {
			//Success
			res.writeHead(200, { 'Content-Type': content_type });
			res.end(content, 'utf8');
			console.log('suvv');
		}
	});
});

server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
