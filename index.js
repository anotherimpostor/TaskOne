const express = require('express');
const cors = require('cors');


const app = express();


app.use(cors({
    origin: '*'
}));


app.get('/', (req, res) => {
    res.send({
        'slackusername' : '@impostor',
        'backend' : true,
        'age' : 21,
        'bio'  : 'God abeg oo'
    })
})

app.listen(process.env.PORT, () => {
    console.log("server running");
})