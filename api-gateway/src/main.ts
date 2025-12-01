import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import proxy from 'express-http-proxy';

const app = express();
// allow localhost:3000 to access resources from this server
app.use(cors({
origin: 'http://localhost:3000',
allowedHeaders: ['Content-Type', 'Authorization'],
credentials: true,
}))
// log request info (logger)
app.use(morgan('dev'));
// control request body size
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: true}));
// parse cookies
app.use(cookieParser());
// ...
app.set('trust proxy', 1);
// set limit on requests from same IP
app.use(rateLimit({
windowMs: 15 * 60 * 1000, // remember request for 15 minutes
max: (req: any) => req.user ? 1000 : 100, // if the user is (logged in) limit his IP to 100 requests, else limit each IP to 1000 requests per windowMs
standardHeaders: true, // return rate limit info in the `RateLimit-*` headers
legacyHeaders: true, // enable the `X-RateLimit-*` headers
keyGenerator: (req: any) => req.ip, // limit based on IP address
}));

// proxy requests to [...]-service
app.use('/auth', proxy('http://localhost:6001'));
// routes
app.get('/gateway-health', (req, res) => {
res.send({ message: 'Welcome to api-gateway!' });
});

// server's port
const port = process.env.PORT || 8080;
// start the server
const server = app.listen(port, () => {
console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);