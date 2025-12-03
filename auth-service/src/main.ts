import express from 'express';
import cors from "cors";
import { ErrorMiddleware } from '@multi-vendor-ecommerce/shared-backend';
import cookieParser from 'cookie-parser';

const app = express();

// allow localhost:3000 to access resources from this server
app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());

app.get('/signin', (req, res) => {
    res.send({ message: 'Welcome, Signin to auth-service!' });
});

app.use(ErrorMiddleware);

const port = process.env.PORT || 6001;

const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);