import express from 'express'
import router from './routes'   
import 'dotenv/config';

const app = express()

app.use(express.json())
app.use(router)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

console.log(process.env.DB_USER)
console.log(process.env.DB_HOST)
console.log(process.env.DB_NAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_PORT)


export default app