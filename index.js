const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

let newArr = characters
let passLength = 15

const generateButton = document.getElementById("generateButton")
const passwordExOne = document.getElementById("passwordExOne")
const passwordExTwo = document.getElementById("passwordExTwo")
const numberOption = document.getElementById("numberOption")
const signOption = document.getElementById("signOption")
const isCopiedText = document.getElementById("isCopiedText")
const passwordLength = document.getElementById("passwordLength")

function testDisabled() {
  const numberEnable = numberOption.checked
  const signEnable = signOption.checked
  const characterArr = characters.slice(0, 52)

  // both disabled
  if (!numberEnable && !signEnable) {
    return characterArr
  }
  // only numbers disabled
  if (!numberEnable) {
    const signs = characters.slice(62)
    return characterArr.concat(signs)
  }
  // only signs disabled
  if (!signEnable) {
    // characters and numbers
    return characters.slice(0, 62)
  }
  return characters
}

numberOption.addEventListener("change", (event) => {
  newArr = testDisabled()
})
signOption.addEventListener("change", (event) => {
  newArr = testDisabled()
})


passwordLength.addEventListener("change", () => {
  passLength = passwordLength.value
})


function generatePassword() {
  let password = ""
  for (let i = 0; i < passLength; i++) {
    password += newArr[Math.floor(Math.random() * newArr.length)]
  }
  return password
}
generateButton.addEventListener("click", () => {
  passwordExOne.textContent = generatePassword()
  passwordExTwo.textContent = generatePassword()
})



function copyText(passwordEx) {
  if (passwordExOne.textContent && passwordExTwo.textContent) {

    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        passwordEx === "one"
          ? passwordExOne.textContent
          : passwordExTwo.textContent);
    }
    isCopiedText.textContent = "Copied!"
    setTimeout(() => {
      isCopiedText.textContent = ""
    }, 1000);
  }
}
passwordExOne.addEventListener("click", () => {
  copyText("one")
})
passwordExTwo.addEventListener("click", () => {
  copyText("two")
})