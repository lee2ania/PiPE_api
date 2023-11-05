require("dotenv").config();

const express = require('express');
const app = express();

// 미들웨어 및 라우트 설정
app.set('port', process.env.PORT);
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
);

function checkServiceKey(getServiceKey, onPass, onFailed){
    switch(getServiceKey){
        case  process.env.SERVICEKEY :
            onPass();
            break;
        default :
            onFailed();
            break;
    }
};

function checkCountry(getCountry, korea, japan, spain, australia, onFailed){
    switch(getCountry){
        case 'kr':
            korea();
            break;
        case 'jp':
            japan();
            break;
        case 'es':
            spain();
            break;
        case 'au':
            australia();
            break;
        default :
            onFailed();
            break;
    }
}

app.use('/api/getData', (req, res, next) => {
    const { serviceKey, country } = req.query;

    // serviceKey 값이 특정 값을 만족하는지 확인
    checkServiceKey(
        serviceKey, 
        function onPass() {
            checkCountry(
                country,
                function korea() {
                    //카테고리 분류 -> 2차 카테고리 분류
                    const krRouter = require('./router/kr/koreaRouter');
                    krRouter(req, res, next);
                },
                function japan() {

                },
                function spain() {

                },
                function australia() {

                },
                function onFailed() {

                }
            )
           
        }, 
        function onFailed() {
            res.status(404).json({
                 error: `입력한 인증키가 올바르지 않음. 입력된 키 : ${serviceKey}` 
            }); 
        }
    );
});

/*

 checkCountry(
                country,
                function korea() {
                    //카테고리 분류 -> 2차 카테고리 분류
                    res.status(202).json({
                        message: `kr라우터이동.` 
                   }); 
                    const krRouter = require('./router/kr/koreaRouter');
                    krRouter(req, res, next);
                },
                function japan() {

                },
                function spain() {

                },
                function australia() {

                },
                function onFailed() {

                }
            )

*/

// const getServiceKey = "123"
// function handleServiceKey(typedServiceKey){
//     switch (typedServiceKey){0\
//         case getServiceKey :
//             switch (country) {
//                 case 'kr' :
//                     res.status(200).send({
//                         typedServiceKey: serviceKey,
//                         typedCountry: country,
//                         typedCategory: category,
//                         typedSubCategory: subCategory
//                     });
//                     // kr_money_supoort(req, res);
//                     break;
//                 case 'es':
//                     res.json(responseData.data.filter(item => item.country === 'es'));
//                     break;
//                 case 'au':
//                     res.json(responseData.data.filter(item => item.country === 'au'));
//                     break;
//                 case 'jp':
//                     res.json(responseData.data.filter(item => item.country === 'jp'));
//                     break;
//                 default :
//                     res.status(401).send({
//                         error: 401,
//                         typedCountry: country
//                     });
//             }
//             break;
//         default :
//             res.status(401).send({
//                 error: 401,
//                 typedServiceKey: serviceKey
//             });
//     }
// };
// app.use('/user', userRouter, (req, res) => {

// })
// app.get('/api/getData', (req, res) => {
//     // URL에서 파라미터 추출
//     const { serviceKey, country, category, subCategory } = req.query;
//     handleServiceKey(serviceKey);
// });

app.listen(app.get('port'), () => {
  console.log(`Node.js API 서버가 포트 ${app.get('port')}에서 실행 중입니다.`);
});

/*
1xx (Informational): 요청이 수신되었고 처리 중입니다.

100 Continue: 요청이 계속되어야 함을 나타냅니다.
101 Switching Protocols: 서버가 프로토콜 변경 요청을 수락했음을 나타냅니다.
2xx (Successful): 요청이 성공적으로 처리되었습니다.

200 OK: 요청이 성공적으로 처리되었음을 나타냅니다.
201 Created: 요청으로 새로운 리소스가 생성되었음을 나타냅니다.
204 No Content: 요청은 성공했지만 응답에 내용이 없음을 나타냅니다.
3xx (Redirection): 요청을 완료하려면 추가 조치가 필요합니다.

301 Moved Permanently: 리소스가 영구적으로 다른 위치로 이동했음을 나타냅니다.
302 Found (Previously "Moved Temporarily"): 리소스가 일시적으로 다른 위치로 이동했음을 나타냅니다.
4xx (Client Error): 요청에 오류가 있음을 나타냅니다.

400 Bad Request: 요청이 잘못되었음을 나타냅니다.
401 Unauthorized: 인증이 필요함을 나타냅니다.
403 Forbidden: 요청이 금지되었음을 나타냅니다.
404 Not Found: 요청한 리소스를 찾을 수 없음을 나타냅니다.
5xx (Server Error): 서버에서 오류가 발생했음을 나타냅니다.

500 Internal Server Error: 서버에서 내부 오류가 발생했음을 나타냅니다.
502 Bad Gateway: 게이트웨이 또는 프록시에서 서버로부터 잘못된 응답을 받았음을 나타냅니다.
504 Gateway Timeout: 게이트웨이 또는 프록시가 요청을 처리하는 데 시간이 초과되었음을 나타냅니다.
*/