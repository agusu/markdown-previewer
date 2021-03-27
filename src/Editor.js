function Editor ({placeholder, setInput}) {
    function updateInput(event){
        setInput(event.target.value);
    }
    return(
            <textarea id="editor"
            placeholder="Type your markdown here!"
            value={placeholder} 
            onChange={updateInput}></textarea>
    );
}

export default Editor;
