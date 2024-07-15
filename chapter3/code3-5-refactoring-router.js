const http = require("http");
const url = require("url"); // url 모듈 로딩

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname; // 패스명 할당
    res.setHeader("Content-Type", "text/html");

    if(path in urlMap){ // urlMap에 path가 있는지 확인
        urlMap[path](req, res); // urlMap에 path 값으로 매핑된 함수 실행
    }else{
        notFound(req, res);
    }
}).listen("3000", (console.log("라우터를 리팩터링해보자!")));

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`); // /user 결과값 설정
};

const feed = (req, res) => {
    res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>
    `); // //feed 결과값 설정
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found"); // 에러 메세지 설정
};

const urlMap = {
    "/" : (req, res) => res.end("HOME"),
    "/user" : user,
    "/feed" : feed,
}