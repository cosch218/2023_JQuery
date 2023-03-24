// HTML head에 cdn 값을 가져온 후 다른 JS에서도 제이쿼리에 접근할 수 있다
// .css()를 이용해서 style 값을 바꿀 수 있다
$("#header").css("color","blue");
// 값을 여러개 넣고 싶을 때는 객체 형태로 작성
// 속성 이름을 적을 때 하이픈(-)이 있다면 첫글자를 대문자로 이어서 작성
// 값 안에 변수나 자바스크립트 계산식을 적고 싶다면 `${}` 사용
$("#header").css({
    "backgroundColor" : "lightgray",
    "fontSize" : `${3}rem`
});


/* 버튼을 클릭했을 때 hidden 클래스 추가 */
$("#btn").on("click", function() {
    // 형제 태그를 통해서 p 태그를 찾고 클래스 추가
    // this를 통해서 현재 이벤트가 실행되는 태그를 가져올 수 있다
    $(this).prev().addClass("hidden");
    console.log($(this));
})

/* 토글버튼 클릭했을 때 header가 숨겨지거나 보여짐 */
$("#toggle-button").on("click", function() {
    $("#header").toggleClass("hidden");
})

/* todo의 input에 접근해서 체크박스에 체크되었을 때 span에 디자인 넣기 */
$("#todo input[type='checkbox']").on("click", function(e) {
    // 제이쿼리를 사용하면서 자바스크립트의 내용 사용 가능
    console.log(e.target.checked);

    // this를 통해서 이벤트가 발생한 태그를 가져올 수 있음
    console.log($(this).prop("checked"));

    if (e.target.checked) {
        $("#todo").css("color","gray").addClass("checked");
    } else {
        $("#todo").css("color","").removeClass("checked");
    }
})

/* button을 누를 때마다 버튼의 글자색을 빨간색으로 변경 */
// prop("disabled", "true") 이용하여 버튼을 한 번 누르면 해당 버튼 사용 불가
// 자바스크립트를 이용하여 버튼에 이벤트 넣기
const btns = document.querySelectorAll("numbers-btn button");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        e.target.style.color = "red";
        e.target.disabled = "true";
    })
}
// 제이쿼리로 접근한 여러개의 태그는 배열로 처리하지 않고 바로 메소드를 이용해 모두 적용
$("#number-btns button").on("click", function() {
    $(this).css("color", "red").prop("disabled", "true");
    console.log($(this));
})
// 제이쿼리로 여러개의 태그에 이벤트 추가