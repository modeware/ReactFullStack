const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');
console.log(keys)
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)


app.use(passport.initialize())
app.use(passport.session())


require('./routes/authRoutes')(app);
require('./routes/billingRoutes.js')(app);



const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('Listening on port: 5000')
})



module.exports = app;
