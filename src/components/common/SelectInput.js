import React from 'react'
import PropTypes from 'prop-types'


function SelectInput(props) {
    var i=0;
    let wrapperClass = "form-group"
    if (props.error.length > 0) {
        wrapperClass += " has-error"
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <select id={props.id} name={props.name} value={props.value || ''} onChange={props.onChange} className="form-control">
                    <option value=""/>
                    { props.options.map( option =>  {
                        i++
                        return (
                            <option key={i} value={i}>{option}</option>
                        )}) 
                    } 
                </select>
            </div>
            { props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
    )
}

SelectInput.propTypes = {
    id : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    options: PropTypes.array.isRequired
}

SelectInput.defaultProps = {
    error: ""
}

export default SelectInput
