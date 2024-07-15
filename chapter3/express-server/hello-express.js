const express = require("express"); // 1. express 모듈 불러오기
const app = express(); // 2. express를 초기화 후 app에 할당
const port = 3000;

app.get('/', (req, res) => { // 3. / 으로 요청이 들어올 경우 실행됨
    res.set({ "Content-Type" : "text/html;charset=utf-8" }); // 4. gpejrkqt tjfwjd
    res.end("헬로 Express");
});

app.listen(port, () => {
    console.log(`Start Server : use ${port}`);
});