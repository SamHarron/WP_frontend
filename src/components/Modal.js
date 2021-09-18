class Modal {

    get modal(){
        return document.querySelector('#createModal')
    }

    open = () => {
        this.modal.style.display = 'block'
    }

    close = () => {
        this.modal.style.display = 'none'
    }
}