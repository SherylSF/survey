import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import Payments from './Payments'

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
          case null:
            return;
          case false:
            return <li><a href="/auth/google">Login With Google</a></li>;
          default:
            return [
            <li key='1'><Payments/></li>,
            <li key='3' style={{margin:'0 10px'}}>Add Credits: {this.props.auth.credits}</li>,
            <li key='2'><a href="/api/logout">Logout</a></li>
            ];
        }
      }

    render() {
        console.log('propuser', this.props.user)
        return (
            <nav>
            <div className="nav-wrapper">
            <Link to={this.props.auth? '/surveys' : '/'} className="brand-logo">Survey 365</Link>
            <ul className="right">
               {this.renderContent()}
            </ul>
            </div>
        </nav>
        );
    }
}

const mapStatetoProps = ({auth}) => {
    return {auth}
}

export default connect(mapStatetoProps)(Header);
