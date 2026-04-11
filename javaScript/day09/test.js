try {
  const x = y + 1;
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("문법 오류 처리", error.message);
  } else if (error instanceof TypeError) {
    console.log("타입 오류 처리", error.message);
  } else {
    console.log("기타 오류 처리");
  }
}
