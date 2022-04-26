/**
 * 2022-04-27
 * 엘리스 실습 2반 우당탕탕 개발 대회
 * USEFUL SERVICE ? No 무한 스크롤 구현
 * author 이영민
 */

const wrapper = document.querySelector(".wrapper")
const neck = document.querySelector(".neck")
let checkOne, checkTwo, checkThree = false;


/*
* 스크롤이 바닥에 닿기 전에 'No' 길이를 추가해도 되는지 확인
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > 0) {
            injectNeck(entry)
        }
    })
  },
)
/*
* 추가되는 부분을 observer 등록
*/
observer.observe(neck)


/*
* 'No' 길이를 추가
*/
function injectNeck(entry) {
    observer.unobserve(entry.target)
    const clonedNeck = neck.cloneNode(true)
    let height = window.innerHeight + window.pageYOffset;

    //스크롤이 1500px을 넘을때 확인이면 계속
    if (!checkOne && height >= 1500) {
        checkOne = confirm('Continue?');
    }
    //스크롤이 5000px을 넘을때 취소면 계속
    if (!checkTwo && height >= 3000) {
        checkTwo = !(confirm('Stay !!'));
    }
    //스크롤이 10000px을 넘을때 스크롤 중지
    if (height >= 10000) {
        alert("Stop !!");
        return;
    }
    wrapper.appendChild(clonedNeck)
    observer.observe(clonedNeck)
}