import { defineDonationsRoutes } from "./src/donations/entry-point/routes";

// index.js
import express from 'express';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import cors from 'cors'

dotenv.config();  // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)


defineDonationsRoutes(app)