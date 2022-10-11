class FaqModuleAnimation {
  constructor (el) {
    // Store the <details> element
    this.el = el
    // Store the <summary> element
    this.summary = el.querySelector('.faq-module__text')
    // Store the content element
    this.content = el.querySelector('.faq-module__richtext')
    // Store if the element is animating
    this.isAnimating = false
  }

  init () {
    // Detect user clicks on the summary element
    this.summary.addEventListener('click', (e) => this.onClick(e))
  }

  onClick (e) {
    // Stop default behaviour from the browser
    e.preventDefault()
    // Check if the element is being animated or is already closed
    if (!this.isAnimating && !this.el.open) {
      this.expand()
    // Check if the element is being animated or is already open
    } else if (!this.isAnimating && this.el.open) {
      this.shrink()
    }
  }

  expand () {
    this.isAnimating = true
    // Set the element as "opening"
    this.el.classList.remove('closing')
    this.el.classList.add('opening')
    this.el.open = true

    setTimeout(() => {
      this.isAnimating = false
      this.el.classList.remove('opening')
    }, 200)
  }

  shrink () {
    this.isAnimating = true
    // Set the element as "closing"
    this.el.classList.remove('opening')
    this.el.classList.add('closing')

    setTimeout(() => {
      this.el.open = false
      this.isAnimating = false
      this.el.classList.remove('closing')
    }, 200)
  }
}

window.addEventListener('load', function () {
  document.querySelectorAll('.faq-module-animate > .faq-module__details').forEach((el) => {
    const t = new FaqModuleAnimation(el)
    t.init()
  })
})
