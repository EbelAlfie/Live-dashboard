import React from "react"

interface TextFieldProp extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    inputLabel: string
    text: string
    onTextChange: ((arg: string) => void)
}

const TextField: React.FC<TextFieldProp> = (props) => {
    return (
        <div className="form">
            <label className="label-default form-label" htmlFor="form-input">{props.inputLabel}</label>
            <input id="form-input" type={props.type} className={`form-control`} value={props.text} onChange={val => {props.onTextChange(val.target.value)}}></input>
        </div>
     ) 
} 

export { TextField } 