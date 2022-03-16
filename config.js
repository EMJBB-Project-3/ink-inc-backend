// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.appId,
//     measurementId: process.env.measurementId
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const storage = getStorage(firebaseApp);

// // Create a storage reference from our storage service
// const storageRef = ref(storage, 'images/' + file.name);

// // Create a reference to 'mountains.jpg'
// const mountainsRef = ref(storage, 'PngItem_47269.png');

// // Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/PngItem_47269.png');

// // While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 

// // Create the file metadata
// /** @type {any} */
// const metadata = {
//     contentType: 'image/jpeg'
// };

// // Points to 'images'
// // const imagesRef = ref(storageRef, 'images');

// // Upload file and metadata to the object 'images/mountains.jpg'
// const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// // Listen for state changes, errors, and completion of the upload.
// uploadTask.on('state_changed',
//     (snapshot) => {
//         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log('Upload is ' + progress + '% done');
//         switch (snapshot.state) {
//             case 'paused':
//                 console.log('Upload is paused');
//                 break;
//             case 'running':
//                 console.log('Upload is running');
//                 break;
//         }
//     },
//     (error) => {
//         // A full list of error codes is available at
//         // https://firebase.google.com/docs/storage/web/handle-errors
//         switch (error.code) {
//             case 'storage/unauthorized':
//                 // User doesn't have permission to access the object
//                 break;
//             case 'storage/canceled':
//                 // User canceled the upload
//                 break;

//             // ...

//             case 'storage/unknown':
//                 // Unknown error occurred, inspect error.serverResponse
//                 break;
//         }
//     },
//     () => {
//         // Upload completed successfully, now we can get the download URL
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             console.log('File available at', downloadURL);
//         });
//     }
// ); 

