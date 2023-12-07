// Atribuindo variáveis aos ''Id's''
const pageOne = document.querySelector('#pageOne')
const secondPage = document.querySelector('#secondPage') 
const biscoit = document.querySelector('#biscoit')
const btnReset = document.querySelector('#btnReset')
let randomMessages = ['O tempo voa, cabe a você ser o piloto', 'Seja o vento que espalha mudança, ', 'Quando você deseja o bem, o bem te deseja', 'Seja quem você deseja ter por perto']
let texts = document.querySelector('#texts')

// Eventos 
biscoit.addEventListener('click', handleBiscoit)
btnReset.addEventListener('click', handleReset)

// Criando funções
function handleBiscoit () {
  pageOne.classList.toggle('hide')
  secondPage.classList.toggle('hide')

  texts = randomMessages
  document.querySelector('#pageOne p').inn    
}

function handleReset () {
  pageOne.classList.toggle('hide')
  secondPage.classList.toggle('hide')
}