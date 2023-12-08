// Atribuindo variáveis aos ''Id's''
const pageOne = document.querySelector('#pageOne')
const secondPage = document.querySelector('#secondPage') 
const biscoit = document.querySelector('#biscoit')
const btnReset = document.querySelector('#btnReset')
let randomMessages = ['O tempo voa, cabe a você ser o piloto', 'Seja o vento que espalha mudança, ', 'Quando você deseja o bem, o bem te deseja', 'Seja quem você deseja ter por perto']
let roundMessage = randomMessages[Math.floor(Math.random()*randomMessages.length)]

// Eventos 
biscoit.addEventListener('click', handleBiscoit)
btnReset.addEventListener('click', handleReset)

// Criando funções
function handleBiscoit () {
  pageOne.classList.toggle('hide')
  secondPage.classList.toggle('hide')

  document.querySelector('#pageTwo p').innerHTML = roundMessage

    let newMessage

    while (newMessage === roundMessage || newMessage === undefined) {
      newMessage = randomMessages[Math.floor(Math.random()*randomMessages.length)]
    }
    roundMessage = newMessage
}

function handleReset () {
  pageOne.classList.toggle('hide')
  secondPage.classList.toggle('hide')
}