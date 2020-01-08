import app from './app';
import EmployeeDAO from '../src/DAO/EmployeeDAO';
const PORT = process.env.PORT || 3000;

app.listen(PORT,async () => {
    console.log(`Server is running on port: ${PORT}`);
    try {
    await EmployeeDAO.init();
    } catch (e) {
    console.log(e);
    }
});
