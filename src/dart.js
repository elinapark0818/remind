const solution = (dartResult) => {
  const stack = [];
  let sum = [];
  const dartArr = dartResult.split('');
  for (let i = 0; i < dartArr.length; i++) {
    if (!isNaN(dartArr[i])) {
      if (dartArr[i] === '0' && dartArr[i-1] === '1') {
        stack.pop();
        stack.push(10);
      }else {
      if (stack.length > 0) sum.push(stack.pop());
      stack.push(+dartArr[i]);
      }
    }
    if (dartArr[i] === 'D') stack[0] = Math.pow(stack[0], 2); // 제곱
    if (dartArr[i] === 'T') stack[0] = Math.pow(stack[0], 3); // 세제곱
    if (dartArr[i] === '*') {
      stack[0] = stack[0] * 2;
      if (sum.length > 0) {
        const tmp = sum.pop() * 2;
        sum.push(tmp);
      }
    }
    if (dartArr[i] === '#') stack[0] = stack[0] * -1;
  }
  return sum.reduce((acc,cur) => acc + cur, stack[0]);
}