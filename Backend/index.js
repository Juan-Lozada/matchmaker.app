require('dotenv').config();
const app = require('./srcBD/app');
const port = 3000;
app.listen(port, () => console.log(`La aplicacion fue exitosamente desplegada en el puerto:${port}`))

