import './form.css'
class FormReviews extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="form-review">
      <h3 tabindex="0">Tulis Reviewmu</h3>
      <form>
        <input type="text" class="input-review" id="inputNama" placeholder="Tulis Namamu" required>
        <textarea cols="30" class="input-review" id="inputReview"rows="4" placeholder="Ulasanmu.. ex:Makanannya Enak!" required aria-label="tulis ulasanmu"></textarea>
        <br>
        <button type="submit" class="btn-submit"><i class="fas fa-paper-plane"></i> Kirim</button>
      </form>
    </div>
    `
  }

  get valueNama() {
    return this.querySelector('#inputNama').value
  }

  get valueReview() {
    return this.querySelector('#inputReview').value
  }

  set valueNama(value) {
    this.querySelector('#inputNama').value = value
  }

  set valueReview(value) {
    this.querySelector('#inputReview').value = value
  }
}
customElements.define('review-form', FormReviews)