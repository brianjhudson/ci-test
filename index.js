const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const app = express();

app.use( cors() );
app.use( json() );

app.get('/', ( req, res, next ) => res.status(200).json('Hello'));

app.set('port', process.env.PORT || 5000);
app.listen( app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
