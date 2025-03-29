const express = require('express');
import authRoutes from "./routes/authRoutes";
import { errorHandler } from "./middleware/errorHandler";
const cors = require('cors')

const app = express();

app.use(express.json());


app.use(cors())

app.use("/api/auth", authRoutes);

app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});