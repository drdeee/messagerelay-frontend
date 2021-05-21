class EditorManager {
    constructor() {
        this._editor = null
        this._editorDiv = null
    }
    show() {
        this._editorDiv = document.getElementById('editor')
        if (!this._editorDiv) throw new Error("Editor container not available")

        const div = document.createElement('div')

        this._editorDiv.appendChild(div)

        this._editor = new Quill(div, {
            theme: 'snow',
            placeholder: 'Deine Nachricht...'
            //scrollingContainer: '#app'
        });

    }

    close(){
        while (this._editorDiv.lastChild) {
            this._editorDiv.removeChild(this._editorDiv.lastChild);
        }
        this._editor = null
    }

    getContent(){
        if(document.getElementsByClassName('ql-editor').length == 1){
            return document.getElementsByClassName('ql-editor')[0].innerHTML
        } else return ''
    }

    setContent(html){
        if(document.getElementsByClassName('ql-editor').length == 1){
            document.getElementsByClassName('ql-editor')[0].innerHTML = html
        }
    }
}

const editor = new EditorManager()