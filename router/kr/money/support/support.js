const express = require("express");
const router = express.Router();
const db = require('../../../../db/mariadb');

router.get('/', async (req, res, next) => {
    let conn;
    console.log('000000000000'); // 연결 성공 시 출력

    try {

        console.log('1111'); // 연결 성공 시 출력

        // Get a connection from the pool
        conn = await db.getConnection();
        console.log('MariaDB connection successful'); // 연결 성공 시 출력

        // Execute a SQL query
        const [rows, fields] = await conn.query('SELECT * FROM money');

        // Release the connection back to the pool
        conn.release();

        res.status(200).json({
            data: rows
        });
    } catch (error) {
        console.error('DB SQL Error: ' + error);
        res.status(500).json({ error: 'An error occurred' });
    } finally {
        if (conn) conn.release();
    }
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message : 'post /support'
    });
});

router.get('/:produceId', (req, res, next) => {
    const id = req.params.produceId;
    switch(id){
        case 'special' :
            res.status(200).json({
                message: 'you discoverd the special id',
                id: id
            }); 
            break;
        default :
            res.status(200).json({
                message: "you passed an id"
            });
    }
});

router.patch('/:produceId', (req, res, next) => {
    const id = req.params.produceId;
    switch(id){
        case 'special' :
            res.status(200).json({
                message: 'updated product',
                id: id
            }); 
            break;
        default :
            res.status(200).json({
                message: "you passed an id"
            });
    }
});

module.exports = router;

/*
CRUD
create = app.post
read = app.get
update = app.put
delete = app.delete
*/

// const homeController = router.get("/", (_, res, error) => {
//     try {
//         res.send("NGINX-Nodejs-ReverseProxy");
//     } catch (error) {
//         console.log("An error has occurred: ", error);
//         next(error);
//     }
// });

// module.exports = homeController;


// const productRoutes = require('./api/routes/products');
// app.use('/products', productRoutes);
// module.exports = app;