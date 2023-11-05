const express = require("express");
const router = express.Router();

router.use('/', (req, res, next) => {
    const { subCategory } = req.query;
    
    switch(subCategory){
        case 'saving':
            const savingRouter = require('./saving/saving');
            savingRouter(req, res, next);
            break;
        case 'support':
            const supportRouter = require('./support/support');
            supportRouter(req, res, next);
            break;
        default:
            res.status(404).json({
                query: `입력한 subCategory : ${subCategory}`,
                message : '입력한 카테고리는 kr/moneyRouter에서 서비스하지 않는 카테고리입니다.'
            });
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