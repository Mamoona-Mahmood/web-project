import React, { useState } from "react";
import styles from "./UserProfileForm.module.css";
import { useRef } from "react";
//import { useUser } from '../context/UserContext';
//import { useRouter } from "next/router";

const UserProfileForm = () => {
  //const { user, updateUser } = useUser();
  const router = useRouter();

  const name = useRef()
  const contactNum = useRef()
  const DOB = useRef()
  const addr = useRef()
  const gender = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    const dob = DOB.current.value
    const n = name.current.value
    const contact = contactNum.current.value
    const address = addr.current.value
    const g = gender.current.value

    // if (!n || !contact || !dob || !address || !g) {
    //   alert("Please fill out all fields before submitting.");
    //   return;
    // }

    // updateUser(n);

    // fetch ('/api/user',{
    //   method: 'POST',
    //   body:JSON.stringify({dob, n, contact, address, g}),
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // }).then(res => res.json())
    //   .then(data => {
    //     alert(data.message); 
    //    // window.location.href = "/"
    //    router.push("/")
    //   })
    //   .catch(err => {
    //     console.error(err.message);
    //     alert(err.message);
    //   });
    
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className={styles.input}
            ref= {name}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="contactNumber" className={styles.label}>Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter your contact number"
            className={styles.input}
            ref = {contactNum}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="dob" className={styles.label}>Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            className={styles.input}
            ref = {DOB}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="address" className={styles.label}>Address</label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            className={styles.textarea}
            ref = {addr}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="gender" className={styles.label}>Gender</label>
          <select
            id="gender"
            name="gender"
            className={styles.select}
            ref = {gender}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfileForm;
