import React from 'react'
import Layout from '../../components/layout/Layout'
import { useState } from "react";
import { storage } from "../../fireabase/FirebaseConfig"
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import {  toast } from 'react-toastify';

function Upload() {
   const [imageUpload, setImageUpload] = useState(null);
   const uploadImage = () => {
     if (imageUpload == null) return toast.error("Image upload not Successful")
     const imageRef = ref(
       storage,
       `product/all/ ${imageUpload.name + v4()}`
     );
     uploadBytes(imageRef, imageUpload).then(()=>[imageUpload]);
    toast.success("Upload Successful");
    
   };
   
  return (
    <>
      <Layout>
        <div className=" py-10 px-10 min-w-full bg-gray-200 p-20 justify-center text-center">
          <h1 className=" text-black text-3xl font-bold">Upload Images..</h1>
          <input
            onChange={(e) => setImageUpload(e.target.files[0])}
            type="file"
            placeholder="Chouse your file"
            className="file-input file-input-bordered file-input-info w-full max-w-xs mt-16"
          />
          <button
            onClick={uploadImage}
            className=" content-center mx-auto my-20 px-10 font-bold bg-cover bg-green-500 py-2 text-white rounded-lg hover:bg-green-700 flex"
          >
            Submit
          </button>
        </div>
      </Layout>
    </>
  );
}

export default Upload