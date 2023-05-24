import SDK from '@babbage/sdk'

const showModal = () => {
  // TODO: Use a modal with a link to get set up
  window.alert('A MetaNet Client is required for this operation!')
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

export default wrappedSDK
