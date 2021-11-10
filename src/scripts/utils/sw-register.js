import runtime from 'serviceworker-webpack-plugin/lib/runtime'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Browser Tidak Mendukung Service Worker')
    return
  }

  try {
    await runtime.register()
    console.info('Service worker registered')
  } catch (error) {
    console.warn('Failed to register service worker ', error)
  }
}

export default swRegister