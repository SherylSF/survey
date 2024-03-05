import React, {Component} from 'react'
import SurveyForm from './SurveyForm'
import SurveyReviewForm from './SurveyReviewForm'
import {reduxForm} from 'redux-form'

class SurveyNew extends Component {

    state = {showFormReview: false}

    renderContent() {
        if(this.state.showReviewForm) {
            return (
            <SurveyReviewForm 
                onCancel = {() => this.setState({showReviewForm: false})}
            />
            )
        }

        return (
        <SurveyForm
            onSurveySubmit = {() => this.setState({showReviewForm: true})}
        />
        )
        }

    render() {
        return (
        <div>
            {this.renderContent()}
        </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'  
})(SurveyNew)
