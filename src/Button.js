import React from 'react';

const buttonStyle = {
    color: "palevioletred",
	fontSize: "1em",
	margin: "1em",
	padding:" 0.25em 1em",
	border: "2px solid palevioletred",
    borderRadius: "3px",
    background:"white",
    
};

export default (props)=> 
	<button style = {buttonStyle}>{props.children}</button>
	