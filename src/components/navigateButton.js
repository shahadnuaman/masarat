import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton = ( { buttonTitle, route,isReplaced}) => {
    const navigate = useNavigate();
    return (
        <div>
        <button 
            className = "btn btn-primary" 
            onClick = { () => { 
                navigate( route , {replace:isReplaced} )
            }}
        >
Click       </button>
            </div>
        );

    }
export default NavigateButton;