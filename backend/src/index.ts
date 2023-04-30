import express from "express";
import { connect } from "./db/connect.js";
import morgan from 'morgan';
import { productRouter } from "./routes/route.js";
import cors from 'cors';


const app = express();
const PORT = 8080;

connect();

app.use(cors({origin: 'http://localhost:3000'}));


app.use(express.json());
app.use(morgan('dev'));

// app.get('/',(req, res) => {
//     res.status(200).json({
//         message: 'Home Page'
//     })
// })

app.use('/api/products', productRouter)

app.use((req, res) => {
    res.status(404).json({ message: "(404) - Page not found" });
})

// app.get('*', (req, res)=>{
//     res.status(404).end('Page Not Found')
// })

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));