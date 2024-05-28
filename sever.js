const initApiRoutes = require('./route/api');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

initApiRoutes(app);

app.listen(2004, () => {
    console.log('Server running on port 2004');
});