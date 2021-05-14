import React, { Component } from 'react';

class FileUploading extends Component {
    constructor(){
        super();
        this.state = {
            file:null
        }
    }
    upload(){
        console.warn(this.state.file[0]);
        const formData = new FormData();
        formData.append('image',this.state.file[0]);
        console.warn(formData);
        // fetch('url',{method:'POST',body:formData}).then(
        //     (res)=>res.json().then(
        //         (result)=>result.data)
        //     )
    }
    render() {
        return (
            <div>
                <input type="file" name="image" onChange={(e)=>this.setState({file:e.target.files})} />
                <button onClick={()=>{this.upload()}}>Upload</button>
            </div>
        );
    }
}

export default FileUploading;