import express from 'express';
import EmployeeRoutes from './routes/EmployeeRoutes'

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(EmployeeRoutes);


export default app;