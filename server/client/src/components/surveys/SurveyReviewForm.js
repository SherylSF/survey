import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import formFields from './formFields'
import * as actions from '../../actions'

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries</h5>
                {reviewFields}
            <button className="yellow darken-3 white-text btn-flat"
            onClick={onCancel}>
                Back
            </button>
            <button onClick={() => submitSurvey(formValues, history)} className="green darken-3 white-text right btn-flat">
                Send Survey
                <i className='material-icons right'>email</i>
            </button>

            
        </div>

    )
    
}

const mapStatetoProps = (state) => {
    return {formValues: state.form.surveyForm.values}
}

export default connect(mapStatetoProps, actions)(withRouter(SurveyFormReview))
