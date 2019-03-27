import React, { Component } from "react";
import axios from "axios";
import SponsorChildComponent  from "../../components/SponsorAChild/SponsorChildComponent";
import { ClipLoader } from "react-spinners";
import './Sponsor.css'

class SponsorChildView extends Component {
  state = {
    students: [],
    selectedStudent: {}
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BE_URL}/api/students`)
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch(err => console.log(err));
  }
  sponsorSelected = (e, student) => {
    e.preventDefault();
    this.setState({ selectedStudent: student });
  };

  render() {
    if (this.state.students.length > 0) {
      return (
        <>
          <SponsorChildComponent
            sponsorSelected={this.sponsorSelected}
            selectedStudent={this.state.selectedStudent}
            students={this.state.students}
          />
        </>
      );
    } else {
      return (
        <div className='loaderContainer'>
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={this.state.students.length > 0 ? false : true}
          />
        </div>
      );
    }
  }
}

export default SponsorChildView;
