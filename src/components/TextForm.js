import React, {useState} from 'react'
import PropTypes from 'prop-types'; 
function TextForm(props){
    const [text,setText] = useState("Default Value");
    const ctuc = () => {
        props.alertNotifier('conversion to upper case done','success');
        
       
        let newText = text.toUpperCase();
        setText(newText);
    }
    const ctlc = () =>{
        props.alertNotifier('conversion to lower case done','success')
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handlerOnChange = (event) =>{
        setText(event.target.value);
    }
    return(
        <>
        <h3>{props.formHeading}</h3>
<div className="my-3">
  <label htmlFor="textAreaId" className="form-label">{props.labelText}</label>
  <textarea value={text} onChange={handlerOnChange} className="form-control" id="textAreaId" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={ctuc}>convert2uppercase</button>
<button className="btn btn-primary" onClick={ctlc}>convert2lowercase</button>
</>
    );
}
TextForm.propTypes = {
    formHeading : PropTypes.string.isRequired,
    labelText : PropTypes.string.isRequired
}
export default TextForm;

