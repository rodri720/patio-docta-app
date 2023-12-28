const { Pool } = require ('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'patio-docta',
    password: 'admin',
    port: '5432'
})


const getUsers = async (req, res) => {
   
       const response = await pool.query('SELECT * FROM users');
       res.status(200).json(response.rows);
    
 }
 const createUser = async (req, res) => {
     
 }
 

module.exports = {
    getUsers,
    createUser
    
}