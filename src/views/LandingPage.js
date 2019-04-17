import React from "react";

import { connect } from 'react-redux';
import { regSelected, logSelected, loginUser } from '../actions/login';
import { withRouter } from 'react-router';

import PromoCard from "../components/LandingPage/PromoCard";
import RoleCard from "../components/LandingPage/RoleCard";
import Button from '@material-ui/core/Button';

import SocialIcon from '../imgs/social-worker-icon.png';
import AdminIcon from '../imgs/school-admin-icon.png';
import BoardIcon from '../imgs/board-member-icon.png';

import Josh from '../imgs/Josh.png'
import Kevin from '../imgs/Kevin.png'
import Leianne from '../imgs/Leianne.png'
import Padraic from '../imgs/Padraic.png'
import Scott from '../imgs/Scott.png'

import "../styles/LandingPage.css";
import queryString from 'query-string';
const baseURL = process.env.REACT_APP_FE_ROOT;

class LandingPage extends React.Component {


    componentDidMount() {
      const query = this.props.history.location.pathname
      const parsed = queryString.parse(query)
      if(parsed.account_type === '') {
          window.location.href = '/onboarding'
      }
      if(query.length > 30) {
          this.props.loginUser(query);
  
      }
  }

  registerSubmit = e => {
    e.preventDefault();
    const text = e.target.textContent;
    if (text.includes("Register") && window.location.href.includes('login')) {
      this.props.regSelected();
    } else if (text.includes('Register')) {
      this.props.regSelected();
      window.location.href='/login'
    } else if(text.includes("Login") && window.location.href.includes('login')) {
      this.props.logSelected();
    } else {
      this.props.logSelected();
      window.location.href='/login'
    }
  };
  render() {
    return (
      <div className="landing-container">
        <div className="jumbotron">
          <div className="jumbo-inner">
            <div className="jumbo-inner-left">
              
            </div>
            <div className="jumbo-inner-right">
              <h1>School</h1>
              <h1>made</h1>
              <h1 className="last">simple.</h1>
              <br />
              <p className="last">Student management tools for Administrators.</p>
              <p className="last">Integrated notes for Social Workers.</p>
              <p className="last">Live sponsorship data for Board Members.</p>
              <p className="last">To raise a child, it takes a village.</p>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href={`${baseURL}/login`}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="landing-content mission">
          <h3>Our Mission</h3>
          <p>
            We are SchoolMe, a non-profit web application for storing 
            and sharing school related data between School Administrators, 
            Social Workers, and Education Board Members. We want to 
            create a platform to help board members connect with 
            students in need across our organization. Board 
            members are able to assist in paying the school 
            dues of students who cannot pay themselves.
          </p>
        </div>
        <div className="landing-content roles">
          <h3 className="header">Roles</h3>
          <div className="role-cards">
            <RoleCard 
              src={AdminIcon} 
              alt="School Administrator Icon" 
              userRole="School Administrator" 
              description="School Administrators create or join schools to add and manage student files and classrooms, as well as viewing Social workers notes for their school" 
            />
            <RoleCard 
              src={SocialIcon} 
              alt="Social Worker Icon" 
              userRole="Social Worker" 
              description="Social Workers create visit notes after visits to the schools using SchoolMe, they can also see the information of the students at each school and choose to sponser a student as well." 
            />
            <RoleCard 
              src={BoardIcon} 
              alt="Board Member Icon" 
              userRole="Board Member"  
              description="Board Members can see the information of the students at the schools using SchoolMe and choose to sponsor a student to help pay of some or all of their unpaid school dues for things like school lunches, medication, and clothing costs"
            />
          </div>
        </div>
        <div className="landing-content cta">
          <h3>Ready to get started?</h3>
          <p>
            School me works on a
            subscription plan for
            $60/month
          </p>
          <Button
                variant="contained"
                size="large"
                color="primary"
                href={`${baseURL}/login`}
          >
            Sign Up Now
          </Button>
        </div>
        <div className="landing-content about-us">
          <h3>About Us</h3>
          <p>
            We are a team of developers working together 
            on this project while taking instruction with 
            Lambda School. This app is to be our Capstone 
            Project to start us off. We want to create an 
            app that will be useful to the people who really 
            need it.
          </p>
          <div className="promo-cards">
            <PromoCard
              src={Josh}
              name="Josh Tietz"
              gh="TwistedKidd22"
              ghLink="https://github.com/Twistedkidd22"
              liLink="https://www.linkedin.com/in/josh-tietz/"
            />
            <PromoCard
              src={Kevin}
              name="Kevin Brack"
              gh="KevinBrack"
              ghLink="https://github.com/KevinBrack"
              liLink="https://www.linkedin.com/in/kevin-brack-273a25a0/"
            />
            <PromoCard
              src={Leianne}
              name="Leianne Louis"
              gh="Leianne"
              ghLink="https://github.com/leianne"
              liLink="https://www.linkedin.com/in/leiannelouis/"
            />
            <PromoCard
              src={Padraic}
              name="Padaic Gillespie"
              gh="Spinon187"
              ghLink="https://github.com/spinon187"
              liLink="https://www.linkedin.com/in/padraic-gillespie/"
            />
            <PromoCard
              src={Scott}
              name="Scott Bren"
              gh="Smbren"
              ghLink="https://github.com/smbren"
              liLink="https://www.linkedin.com/in/scottbren/"
            />
          </div>
        </div>
        <div className="footer">
          <span> © 2019 SchoolMe </span>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {regSelected, logSelected, loginUser})(LandingPage));
