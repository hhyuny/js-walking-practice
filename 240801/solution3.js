const numbers = [3, 7, 8, 5, 9, 12, 15];

function findFirstEvenNumber(numbers, n) {
  // findIndex, find 메서드 활용
  // const firstIdx = numbers.findIndex((num) => num % 2 === 0);
  // return numbers.find((num, idx) => num % 2 === 0 && idx !== firstIdx);

  // find 메서드만 활용 (두 번째로 만족하는 요소를 찾고 싶으니까 함수의 매개변수에 n을 추가한다. 이 n은 함수를 호출할 때 2를 부여하고, cnt의 값과 n이 같아질 때 true를 반환하여 두 번째 요소를 찾는다.)
  let cnt = 0; // 2로 나누어지면 cnt를 하나 증가시킨다. 이렇게 해서 cnt와 매개변수로 받은 n(2)와 일치하면 true를 반환한다.
  return numbers.find((num) => {
    if (num % 2 === 0) {
      cnt++;
      if (cnt === n) {
        return true; // cnt와 n이 같으면 true를 리턴하고 find 메서드 끝낸다.
      }
      return false; // 2로 나누어 떨어지지만, 첫 번째 요소는 무시하기 위해서 false를 반환하고 계속해서 다음 요소를 순회한다.
    }
  });
}

console.log(findFirstEvenNumber(numbers, 2));

// 두 번째 짝수를 찾기 find를 활용해서
// 두 번째 짝수라는 의미에서 2를 활용.
// true면 카운트를 증가시키고 count와 매개변수로 받은 두 번째(2)와 일치하면 트루 반환

// findIndex한 값과 find로 나온 인덱스가 같은 거는 제외하고?
