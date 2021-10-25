const app = require('./app.js');
const { conn } = require('./db.js');
require('dotenv').config();
const PORT = process.env.PORT || 1337;

conn.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(`Server started.\nNow listening in port ${PORT}.`)
    );
});