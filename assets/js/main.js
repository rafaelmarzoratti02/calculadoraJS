function Calculadora() {
  this.display = document.querySelector(".display")
  this.inicia = () => {
    this.pegaCliques()
    this.identificaEnter()
  }

  this.identificaEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        this.equals()
      }
    })
  }

  this.pegaCliques = () => {
    document.addEventListener("click", (event) => {
      const element = event.target
      if (element.classList.contains("btn-num")) this.addNumero(element)
      if (element.classList.contains("btn-clear")) this.clear()
      if (element.classList.contains("btn-del")) this.delete()
      if (element.classList.contains("btn-eq")) this.equals(element)
    })
  }

  this.addNumero = (element) => {
    this.display.value += element.innerText
    this.display.focus()
  }
  this.clear = () => (this.display.value = "")
  this.delete = () => (this.display.value = this.display.value.slice(0, -1))
  this.equals = () => {
    try {
      const conta = eval(this.display.value)

      if (!conta) {
        alert("Conta inválida")
        return
      }
      this.display.value = conta
    } catch (e) {
      alert("Conta inválida")
      return
    }
  }
}

const calculadora = new Calculadora()

calculadora.inicia()
