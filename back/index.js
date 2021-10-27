const app = require('./app.js');
const { conn, Balance } = require('./db.js');
require('dotenv').config();
const PORT = process.env.PORT || 1337;

conn.sync({ force: false }).then(async () => {
    app.listen(PORT, () =>
        console.log(`Server started.\nNow listening in port ${PORT}.`)
    );
    await Balance.findOrCreate({ where: {id: 1} });

});