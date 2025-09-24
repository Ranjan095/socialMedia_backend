import express from 'express';
import allRoutes from './src/Routes/allRoutes.js';
import { connectPostgres } from './src/db/dbConfig.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 4001;

const app = express();
app.use(express.json());

app.use('/api', allRoutes);

await connectPostgres();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
