class Modal {

    constructor(){
      this.addClose()
    }
  
    get modal(){
      return document.querySelector("#createModal")
    }
  
    get main(){
      return document.getElementById("modal-main")
    }
  
    open = () => {
      this.modal.style.display = "block"
    }
  
    close = () => {
      this.modal.style.display = "none"
    }
  
    addClose = () => {
      addEventListener("click", (e) => {
        if (e.target.classList.contains("close") || e.target.id == "createModal"){
          this.close()
        }
      })
    }
  
  
  }