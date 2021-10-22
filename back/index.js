const app = require('./app.js');
require('dotenv').config();
const PORT = process.env.PORT || 1337;

app.listen(PORT, () => console.log(`Server started.\nNow listening in port ${PORT}.`));
/* app.use */