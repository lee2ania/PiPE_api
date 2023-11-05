const express = require("express");
const router = express.Router();

router.use('/', (req, res, next) => {
    const { category } = req.query;

    switch(category){
        case 'money':
            const moneyRouter = require('./money/moneyRouter');
            moneyRouter(req, res, next);
            break;
        case 'place':
            const placeRouter = require('./place/placeRouter');
            placeRouter(req, res, next);
            break;
        case 'job':
            const jobRouter = require('./job/jobRouter');
            jobRouter(req, res, next);
            break;
        case 'insurance':
            const insuranceRouter = require('./insurance/insuranceRouter');
            insuranceRouter(req, res, next);
            break;
        default :
            res.status(404).json({
                query: ` 입력한 category : ${category} `,
                message : '입력한 카테고리는 koreaRouter에서 서비스하지 않는 카테고리입니다.'
            });
            break;
    }
})
// router.get('/', (req, res, next) => {
//     const { category } = req.query;

//     switch(category){
//         case 'money':
//             res.status(202).json({
//                 message: `kr라우터이동.` 
//             }); 
//             const moneyRouter = require('./money/moneyRouter');
//             moneyRouter(req, res, next);
//             break;
//         case 'place':
//             const placeRouter = require('./place/placeRouter');
//             placeRouter(req, res, next);
//             break;
//         case 'job':
//             const jobRouter = require('./job/jobRouter');
//             jobRouter(req, res, next);
//             break;
//         case 'insurance':
//             const insuranceRouter = require('./insurance/insuranceRouter');
//             insuranceRouter(req, res, next);
//             break;
//         default :
//             res.status(404).json({
//                 query: ` 입력한 category : ${category} `,
//                 message : '입력한 카테고리는 koreaRouter에서 서비스하지 않는 카테고리입니다.'
//             });
//             break;
//     }
// });

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message : 'post /support'
//     });
// });

// router.get('/:produceId', (req, res, next) => {
//     const id = req.params.produceId;
//     switch(id){
//         case 'special' :
//             res.status(200).json({
//                 message: 'you discoverd the special id',
//                 id: id
//             }); 
//             break;
//         default :
//             res.status(200).json({
//                 message: "you passed an id"
//             });
//     }
// });

// router.patch('/:produceId', (req, res, next) => {
//     const id = req.params.produceId;
//     switch(id){
//         case 'special' :
//             res.status(200).json({
//                 message: 'updated product',
//                 id: id
//             }); 
//             break;
//         default :
//             res.status(200).json({
//                 message: "you passed an id"
//             });
//     }
// });

module.exports = router;