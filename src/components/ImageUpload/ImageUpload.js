import React, { Component } from 'react';
import axios from 'axios';
 
export default class ImageUpload extends Component {

    state = {
        selectedFile: null,
        filePath: null,
    }

    fileSelectHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {

        const fd = new FormData();

        fd.append('userImage', this.state.selectedFile, this.state.selectedFile.name);
        console.log(fd);

        axios.post(process.env.REACT_APP_BE_URL + '/api/uploads', fd)
            .then(response => {
                console.log("server response", response);

                this.setState({ filePath: response.data });

            })
            .catch(e => {

                console.log("server error:", e.message);

            })

    }

    render() {
        return (

            <div>

                <input type="file" name="userImage" onChange={this.fileSelectHandler}/>
                <button onClick={this.fileUploadHandler}>Upload</button>
                <img src={process.env.REACT_APP_BE_URL + `/${this.state.filePath}`}/>

            </div>

        );
    }
}