let tutors = [
  {
    name: "최원장",
    time: "9to6",
  },
  {
    name: "윤창식",
    time: "9to6",
  },
  {
    name: "박가현",
    time: "9to6",
  },
  {
    name: "김병연",
    time: "9to6",
  },
];

// 여기에 코드를 작성하세요.
// 멘토링 상태를 확인할 수 있는 불리언 타입의 isMentoring 속성을 추가합니다.
const newTutors = tutors.map((tutor) => {
  let result = {};

  for (const prop in tutor) {
    result[prop] = tutor[prop];
  }

  result["isMentoring"] = "true";

  // return {
  //   name: tutor.name,
  //   time: tutor.time,
  //   isMentoring: "true",
  // };

  return result;
});

// console.log(newTutors);

// ------------------------------------

var user = {
  name: "wonjang",
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http://blog.com",
    facebook: "http://facebook.com/abc",
  },
};

//이런 패턴은 어떨까요?
var copyObject = function (target) {
  var result = {};

  // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
  // 하드코딩을 하지 않아도 괜찮아요.
  // 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
  // 되겠죠!?
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};
