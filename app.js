
const form = document.querySelector("form")
const input = document.querySelector('input')
const paragraphBeforeBotton = createParagraph()
const paragraphAfterBotton = createParagraph('afterEnd', form)
let isInputValue = undefined;


const testRegex = (inputValue) => {
  const valid = /[a-zA-Z]{6,}/.test(inputValue)
  return (valid)
}

function createParagraph (localParagraph = 'afterend', parent = input) {
  const paragraph = document.createElement('p')
  paragraph.setAttribute('data-paragrafo', 'paragrafo')
  return parent.insertAdjacentElement(`${localParagraph}`, paragraph)
}

const addWarmingOnScreen = (paragraph ,message, attribute, nameAttribute) => {
  paragraph.innerHTML = `${message}`
  paragraph.setAttribute(`${attribute}`, `${nameAttribute}`)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!isInputValue) {
    const VerifyData = `Por favor, insira um username válido`
    addWarmingOnScreen(paragraphAfterBotton,VerifyData, 'class', 'submit-help-feedback')
    return
  }
  const SentData = `Dados enviados =)`
  addWarmingOnScreen(paragraphAfterBotton, SentData, 'class', 'submit-success-feedback')
  form.reset()
})


input.addEventListener('input', () => {
  const valueInput = input.value;
  isInputValue = testRegex(valueInput)

  if (!isInputValue) {
    const invalidInput = `O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas`
    addWarmingOnScreen(paragraphBeforeBotton, invalidInput, 'class', 'username-help-feedback')
    return
  }
  const validInput = `Username válido =)`
  addWarmingOnScreen(paragraphBeforeBotton, validInput, 'class', 'username-success-feedback')


})
