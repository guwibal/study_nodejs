import http from "k6/http"; // k6로 성능 테스트 스크립트 작성

export const options = { // 테스트 옵션값
    vus: 100, // 가상유저(vertual users) 설정
    duration: "10s", // 몇 초 동안 테스트할 지 선택
};

export default function(){
    http.get("http://localhost:8000"); // 성능 테스트 시 실행(http 프로토콜의 get 메서드를 사용해서 요청 보냄)
}

/*
100명이 10초 동안 http://localhost:8000에 요청을 보낸다.
hello.js에는 요청 하나당 2초 딜레이가 있다.
스레드가 하나이므로 동기식 코드라면 200초가 걸려야 한다.(하나 완료 후 다음 코드 실행되므로)
setTimeout은 이벤트 루프를 통해 비동기로 처리되므로 2초 동안 요청 100개를 동시에 처리할 수 있다.
*/