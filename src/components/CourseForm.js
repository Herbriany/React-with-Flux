import React from 'react';
import TextInput from './common/TextInput'
import SelectInput from './common/SelectInput'
import PropTypes from "prop-types"

function CourseForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput id="title" name="title" label="Title" value={props.course.title}  onChange={props.onChange} error={props.errors.title}/>

            <SelectInput id="author" name="authorId" options={["Cory House", "Scott Allen", "Brian Derrig"]} label="Author" value={props.course.authorId || ''} onChange={props.onChange} error={props.errors.authorId}/>

            <TextInput id="category" name="category" label="Category" value={props.course.category} onChange={props.onChange} error={props.errors.category}/>

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    )
}

CourseForm.propTypes = {
    Course: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default CourseForm
