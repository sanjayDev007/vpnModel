const express = require('express');
const requestIp = require('request-ip');
const geoip = require('geoip-lite');

const app = express();
const port = 3000;

app.use(requestIp.mw());

app.get('/', (req, res) => {
    const clientIp = req.clientIp;
    const location = geoip.lookup(clientIp);

    res.send(`Your IP address: ${clientIp}\nYour location: ${location ? location.city : 'Unknown'}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});