class Favorite {
  static async render() {
    return `
      <div id="content">
        <h2 class="menu-title">Daftar Restoran Favorite Kamu</h2>
        <card-container>
        </card-container>
      </div>
    `
  }

  static async afterRender() {
    console.log('After Render Favorite')
  }
}
export default Favorite