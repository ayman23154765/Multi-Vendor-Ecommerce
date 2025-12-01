import express from 'express';

const app = express();

app.get('/signin', (req, res) => {
res.send({ message: 'Welcome, Signin to auth-service!' });
});

const port = process.env.PORT || 6001;

const server = app.listen(port, () => {
console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);