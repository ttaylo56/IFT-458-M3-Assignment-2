const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// enable CORS for all origins
app.use(cors());

//This is CORS Ref:https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
const corsOptions = {
    origin: 'http://localhost:8080'
};
app.use(cors(corsOptions));

// 1) MIDDLEWARES Morgan is used for debugging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// 2) MIDDLEWARE json is used for injecting the body attribute in the pipeline
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

// 3) MIDDLE ROUTES loading
const salesRouter = require('./routes/salesRoutes');
// const userRouter = require('./routes/userRoutes');
app.use('/api/v1/sales', salesRouter);
// app.use('/api/v1/users', userRouter);

// define a simple GET route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// listen on port 6060 for incoming requests
const port = 6060;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
