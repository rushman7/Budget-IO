const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path')

const server = express();
server.use(express.static(path.join(__dirname, 'build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, 'build')));
  server.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'build/index.html'));
  })
}

//build mode
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
})


server.listen(port, (req, res) => {
  console.log(`server is running on port: ${port}`);
})