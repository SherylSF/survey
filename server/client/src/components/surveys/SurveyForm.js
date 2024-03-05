import _ from 'lodash'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import SurveyField from './SurveyField'
import formFields from './formFields'
import validateEmails from '../../utils/validateEmails'


class SurveyForm extends Component  {
    renderFields() {
        return _.map(formFields, (field) => {     
            return (<Field key={field.name} type='text' label={field.label} name={field.name} component={SurveyField} />
        )})
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                  {this.renderFields()}
                  <Link to="/surveys" className="red btn-flat white-text">
                  Cancel
                  </Link>
                  <button type="submit" className='teal btn-flat right white-text'>
                    Next
                    <i className="material-icons right">done</i>
                  </button>
                </form>     
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {}

    errors.recipients = validateEmails(values.recipients || '')

    _.map(formFields, ({name}) => {
        if(!values[name]) {
            errors[name] = "You must provide a value"
        }
    })


    return errors
}

export default reduxForm({
    validate,
    destroyOnUnmount: false,
    form: 'surveyForm'  
})(SurveyForm)