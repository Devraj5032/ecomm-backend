import express from 'express';
// importing routes
import userRoute from "./routes/user.js";
import { connectDB } from './utils/features.js';
import { errorMiddleWare } from './middlewares/error.js';
const port = 5000;
connectDB();
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send("Api is working with /api/v1");
});
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
// })
// using routes
app.use('/api/v1/user', userRoute);
app.use(errorMiddleWare);
app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});
