import 'regenerator-runtime'
import CacheHelper from './utils/cache-helper'

const { assets } = global.serviceWorkerOption

self.addEventListener('install', (event) => {
  console.log('Proses Install service Workers')
  console.log('install ', event)
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
})

self.addEventListener('activate', (event) => {
  console.log('Activating Service Workers')

  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('http')) return
  event.respondWith(CacheHelper.revalidateCache(event.request))
  // console.log(event.request)
})