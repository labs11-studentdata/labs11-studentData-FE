import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
 
export default class MyUploader extends Component {
    render() {
        return (
            <ImagesUploader
                url= {`${process.env.REACT_APP_BE_URL}/notmultiple`}
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload"
                />
        );
    }
}