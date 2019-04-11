const express = require('express');
const port = 8000;
const path = require('path')
const publicPath = path.join(__dirname, 'build')

const server = express();
server.use(express.static(publicPath));

server.get('*', (req, res) => {
  res.sendfile(path.join(publicPath, 'index.html'));
})

server.listen(port, (req, res) => {
  console.log(`server is running on port: ${port}`);
})