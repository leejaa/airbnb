import React, { useState } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import * as firebase from 'firebase';

export const ImageUpload = ({
    state,
    dispatch
}: any) => {
    const [preview, setPreview] = useState('');
    const { acceptedFiles, rejectedFiles, getRootProps, getInputProps, inputRef } = useDropzone({
        accept: 'image/jpeg, image/png'
    });
    const fileUpload = (files: any) => {
        // File or Blob named mountains.jpg
        const file = files[0];
        // Create a root reference
        const storageRef = firebase.storage().ref();
        // Create the file metadata
        const metadata = {
            contentType: 'image/jpeg'
        };
        // Upload file and metadata to the object 'images/mountains.jpg'
        const uploadTask = storageRef.child('images/' + file.path).put(file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error: any) {
                console.log('error', error);
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    if (downloadURL) {
                        console.log('downloadURL', downloadURL);
                        dispatch({ type: 'setImageUrl', value: downloadURL });
                    }
                });
            });
    };
    const addFile = (file: { map: (arg0: (file: any) => any) => void; }) => {
        const files = file.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
        fileUpload(files);
    };
    const onDrop = (accepted: any, rejected: any) => {
        if (Object.keys(rejected).length !== 0) {
            const message = "Please submit valid file type";
        } else {
            addFile(accepted);
            setPreview(accepted[0].preview);

            const blobPromise = new Promise((resolve, reject) => {
                const reader = new window.FileReader();
                reader.readAsDataURL(accepted[0]);
                reader.onloadend = () => {
                    const base64data = reader.result;
                    resolve(base64data);
                };
            });
            blobPromise.then(value => {
                // console.log('value', value);
            });
        }
    };

    return (
        <Dropzone onDrop={(accepted, rejected) => onDrop(accepted, rejected)}>
            {({ getRootProps, getInputProps }) => (
                <div className="container" style={ { borderWidth: 2, borderColor: 'rgb(187, 187, 187)', borderStyle: 'dashed', height: 500, padding: 170 } }>
                    <div
                        {...getRootProps({
                            className: 'dropzone',
                            onDrop: event => event.stopPropagation()
                        })}
                    >
                        <input {...getInputProps()} />
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-red-500 text-white font-extrabold rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">사진 업로드</span>
                        </label>
                        <span className="mt-2 text-base leading-normal">또는 사진을 드래그하세요.</span>
                    </div>
                </div>
            )}
        </Dropzone>
    );
}
