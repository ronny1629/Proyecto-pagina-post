import  express  from "express";
import potsRoutes from "./routes/posts.routes.js"
import fileUpload from "express-fileupload";

const app  = express()

/* midlewares */
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

/*routes*/
app.use(potsRoutes)


export default app;