import React, {useEffect, useState,useCallback} from 'react';
import {useDropzone} from 'react-dropzone';



function Image(props) {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        //console.log(file.path);
      }, [])
    const [files, setFiles] = useState([]);
    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
      }, [files]);
    const {
        acceptedFiles,
        getRootProps,
        getInputProps
      } = useDropzone({
        accept: 'image/jpeg, image/png',
      });
    
      const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    
      return (
        <div>
        <section className="dp btn btn-primary btn-simple">
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <em>(Only *.jpeg and *.png images will be accepted)</em>
          </div>
          
          
        </section>
      <aside>
      {acceptedFileItems}
      </aside>
      </div>
      );
    }
  
  export default Image;
