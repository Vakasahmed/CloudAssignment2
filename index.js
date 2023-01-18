function search() {
  let ans = document.getElementById("answer");
  let input = document.getElementById("inp");
  let letter = document.getElementById("letter");
  let charArr = input.value.split("");
  let result = [];
  let boolean = false;
  if (!input.value) {
    alert("Please fill all the fields.");
    return;
  }
  for (let i = 0; i < charArr.length; i++) {
    if ((letter.value).toLowerCase() === (charArr[i]).toLowerCase()) {
      boolean = true;
    }
    if (boolean) {
      result.push(charArr[i + 1]);
    }
  }

  let newStr = result.join("");
  ans.innerText = newStr;
  if (newStr === "") {
    if (!boolean) {
      alert("The letter does not exist in the sentence or add a valid letter.");
    } else {
      alert("This is the last letter of the sentence.");
    }
  }
}
