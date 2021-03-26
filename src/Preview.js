
import marked from 'marked';

function Preview ({rawInput}) {
    return(
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(rawInput, {breaks: true})}}>
        </div>
    );
}

export default Preview;
