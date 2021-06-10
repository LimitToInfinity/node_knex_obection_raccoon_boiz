const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;
const cansRouter = require('./routes/cans');
const { raccoonsRouter } = require('./routes/raccoons');

app.use(cors());
app.use(express.json());
app.use(raccoonsRouter, cansRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
