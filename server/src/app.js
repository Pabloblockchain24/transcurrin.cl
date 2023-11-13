//aqui configuramos el codigo backend (express)
import  express  from "express";
import cookieParser from "cookie-parser"
import cors from "cors"


import authRoutes from "./routes/auth.routes.js"
import intranetRoutes from "./routes/intranet.routes.js"

const app = express()


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://transcurrin-cl-client.vercel.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

app.use(cors({
    origin: ["https://transcurrin-cl-client.vercel.app"],
    methods: ["POST", "GET"],
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())
app.use("/api", authRoutes)
app.use("/api", intranetRoutes)



export default app