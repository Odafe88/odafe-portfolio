import React from "react";
import './text-area.styles.scss';


const TextArea = ({handleChange, label, name}) => (
    <div className="text-area-container">
        {
            label ? 
            <label className='text-area-label' htmlFor={name}>{label}</label>
            : null
        }
        <textarea className="text-area" onChange={handleChange} name={name}></textarea>
        
        
    </div>
)

export default TextArea;