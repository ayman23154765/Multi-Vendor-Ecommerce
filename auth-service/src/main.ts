import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import { ErrorMiddleware } from '@multi-vendor-ecommerce/shared-backend';
import routes from './routes/index';

const app = express();

// allow localhost:3000 to access resources from this server
app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))
// parses incoming JSON request bodies and makes them available on req.body
app.use(express.json());
// parses cookies from the request header and puts them into req.cookies
app.use(cookieParser());

// routes
app.use('/api', routes);
// catch errors thrown across the server
app.use(ErrorMiddleware);

const port = process.env.PORT || 6001;

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);