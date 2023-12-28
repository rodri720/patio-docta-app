const express = require('express');
const app = express();
const port = 3001;


//routes
app.use('/api', require('./routes/router'));
app.use(express.urlencoded({ extended: false }));

//middlewares
app.use(require( './routes/router'));

app.listen(port, () => {
  console.log(`Servidor backend en http://localhost:${port}`);
});
