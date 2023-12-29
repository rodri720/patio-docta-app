const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'patio-docta',
    password: 'admin',
    port: 5432
});

const getUsers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM users');
        res.status(200).json(response.rows);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

const getUsersById = async (req, res) => {
    res.end =req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(200).json(response.rows);
}

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
        const values = [name, email];
        
        const response = await pool.query(query, values);
        console.log(response)
        res.status(200).json({
            message: 'User created successfully',
            body: {
                user: response.rows[0]
            }
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    console.log(response)
    res.json('User Updated Successfully');
    
}
const deleteUser = async (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM users WHERE id = $1', [id])
    console.log(response)
    res.json(`User ${id} deleted successfully`);
}

module.exports = {
    getUsers,
    createUser,
    getUsersById,
    deleteUser,
    updateUser
};
