const SDK = require('@babbage/sdk')

const style = document.createElement('style')

style.innerHTML = `
.wrapped-babbage-sdk-modal {
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  opacity: 0;
}
.wrapped-babbage-sdk-child {
  top: 50%;
  left: 50%;
  max-width: 80vw;
  max-height: 80vh;
  overflow: scroll;
  background: #333333;
  border-radius: 0.5em;
  color: white;
  position: absolute;
  transform: translate(-50%, -50%);
  font-family: helvetica;
}
.wrapped-babbage-sdk-close {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-size: 2em;
  background: none;
	color: inherit;
	border: none;
	padding: 0.5em 0.7em;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
.wrapped-babbage-sdk-content {
  padding: 0.5em 1em;
}
.wrapped-babbage-sdk-link {
  border: 1px solid white;
  border-radius: 0.2em;
  transition: all 0.2s;
  color: white;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5em;
  font-weight: bold;
  text-transform: uppercase;
  display: block;
  width: fit-content;
  margin: 0.5em 0px;
}
.wrapped-babbage-sdk-link:hover {
  color: #333333;
  background-color: white;
}
`

document.body.appendChild(style)

const hideModal = () => {
  const modal = document.querySelector('.wrapped-babbage-sdk-modal')
  if (modal) {
    modal.style.opacity = 0
    setTimeout(() => {
      modal.remove()
    }, 500)
  }
}

const showModal = () => {
  const existingModal = document.querySelector('.wrapped-babbage-sdk-modal')
  if (existingModal) {
    return
  }
  const modal = document.createElement('div')
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      hideModal()
    }
  })
  modal.classList.add('wrapped-babbage-sdk-modal')
  const child = document.createElement('div')
  child.classList.add('wrapped-babbage-sdk-child')
  const close = document.createElement('button')
  close.addEventListener('click', () => {
    hideModal()
  })
  close.classList.add('wrapped-babbage-sdk-close')
  close.innerHTML = '×'
  child.appendChild(close)
  const content = document.createElement('div')
  content.classList.add('wrapped-babbage-sdk-content')
  content.innerHTML = `
    <h2>This Functionality Requires a MetaNet Client</h2>
    <p>The operation you are trying to complete can only work if you have a MetaNet identity set up. You can either abort the operation, or set up a MetaNet identity before trying again.</p>
    <a class="wrapped-babbage-sdk-link" href="https://projectbabbage.com/desktop" target="_blank">Set Up MetaNet Identity</a>
  `
  child.appendChild(content)
  modal.appendChild(child)
  document.body.appendChild(modal)
  modal.style.opacity = 0
  setTimeout(() => {
    modal.style.opacity = 1
  }, 10)
}

const wrappedSDK = {}

for (const [SDKFunctionName, SDKFunction] of Object.entries(SDK)) {
  wrappedSDK[SDKFunctionName] = async (...args) => {
    try {
      return await SDKFunction(...args)
    } catch (error) {
      if (error.code === 'ERR_NO_METANET_IDENTITY') {
        showModal()
      }
      throw error
    }
  }
}

module.exports = wrappedSDK
