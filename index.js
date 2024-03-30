import Express from 'express'
import dotenv from 'dotenv'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';


const app = Express()
dotenv.config()
const PORT = process.env.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// middleware
app.use(Express.static("static"))


app.get('/', function (req, res) {
  res.sendFile(join(__dirname, 'pages/index.html'));
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
