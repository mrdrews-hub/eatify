const webSokcetInitiator = {
  init(url) {
    const webScoket = new WebSocket(url)
    webScoket.onmessage = this._onMessageHnadler
  },

  _onMessageHnadler(message) {
    console.log(message.data)
  }
}

export default webSokcetInitiator