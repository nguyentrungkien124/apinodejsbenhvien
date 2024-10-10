import express from 'express';
import router from './routes';
import cors from 'cors';
const app = express();
const PORT = 9999;
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/api/', router);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
