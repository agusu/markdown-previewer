function Editor ({setInput}) {

    function updateInput(event){
        setInput(event.target.value);
    }
    return(
            <textarea id="editor"
            onChange={updateInput}></textarea>
    );
}

export default Editor;
