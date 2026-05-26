window.addEventListener("DOMContentLoaded", () => {///HTML 구조만 완성/ 포함범위 DOM
    let section = document.querySelector('section');  //section 태그를 찾음
    let img = document.querySelector('img');   // img 요소를 찾음
    console.log(section);                                                // 요소자체를 출력 (dom객체)
    let imgSrc = img.getAttribute('src');          // 이미지태그의 src 속성값을 가져옴
    console.log(imgSrc);                                               // 이미지경로 출력
    console.log("Dom 구축 완료!");
});

window.onload = () => console.log('문서 로딩 완료!');     // HTML + CSS + 이미지 + 모든 리소스까지 전부 로딩 완료 후 실행