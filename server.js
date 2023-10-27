const express = require('express');
const app = express();
const port = 3000;

// 예제 데이터
const sampleData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// 미들웨어 설정
app.use(express.json());

// GET 요청을 처리하는 엔드포인트
app.get('/api/items', (req, res) => {
  res.json(sampleData);
});

app.listen(port, () => {
  console.log(`Node.js API 서버가 포트 ${port}에서 실행 중입니다.`);
});
