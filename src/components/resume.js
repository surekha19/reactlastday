import React from 'react';
import data from "../data.json";
// import ResumeCss from '../components/resume.css';
import woman from '../woman.svg';

function Resume(props) {
    // let profile=data.details[props.location.personcard.id];
    // console.log(profile);
    return(
       <div className='column'>
       <div className='maindetails'>
       <h3>surekha</h3>
       <h5>student</h5>
       <h5>18B91A0438</h5>
       <h5>SRKR Engineering College</h5>
       </div>
       <p><b>OBJECTIVE : </b><br></br>Seeking opportunities where I can demostrate my expertise in logical and technical prowess to acquire knowledge which enhaces my 
       interpersonel and professional skills through continuous learning</p>

        <div class="education">
        
        <h6><b>EDUCATIONAL QUALIFICATIONS : </b><br></br> 2018 – present Bachelor of Technology in Electronics and Communication Eng, SRKR Engineering College</h6>
        <p>Expected to Graduate in 2022</p>
        <p>8.7 CGPA</p>
       <p> Subjects: Higher Engineering Mathematics (O-Grade,100/100); Signals and Systems (O-Grade); Network 
        Analysis(S-grade); C programming in Data Structures(O-grade); Electronics Devices and Circuits; Analog 
        Communications; Computer Architecture Organization; Electronic Circuit Analysis; 
       </p>
        <h6> 2016-2018 Intermediate; Narayana Junior College</h6>
        <p>Overall Percentage: 98%
         Subjects: Mathematics (296/300); Physics (120/120); Chemistry (115/120) – Group Percentage: 98.3%<br></br></p>
        <h6>2016 Board of Secondary Education, Bhashyam Public School </h6>
        <p>10 GPA<br></br>
        Subjects: Mathematics(A1); Science (A1)</p>

      
       <h6><b>ACADEMIC QUALIFICATIONS : </b></h6>
       <table class="table table-bordered bootstraptable">
       <thead class="thead-light">
       <tr>
         <th>Certifications (online)</th>
         <th>Technical Skills</th>
         <th>Soft Skills</th>
       </tr>
     </thead> 
     
     <tbody>
     <tr>
     <td>
     

         <li> Programming essentials in Python 
             CISCO certification Achieved a score of 
             98.5%</li> 
            <li>Python for Everybody -
             Coursera Certified</li> 
             <li> Python Data Structures –
                 Coursera Certified</li>
             <li> Data Collection & 
                 Processing with
                 Python Certified</li>
                 <li> Server-side developnment
                     With NodeJS,Express
                     & MongoDB Certified</li>
            </td>
     
            <td><h6>Programming Languages:</h6> 
            <li>Python</li>
            <li>C</li>
            <li>Java</li>

    <h6>Web Designing:</h6>
    <li>Elementor</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>Java Script</li>
    <li> Bootstrap</li>
    <li>Angular Js</li>
    </td>
    <td>
        <li>Thinking out of the box</li>
        <li>Problem Solver</li>
        <li>Analytical Bent</li>
        <li>Effective Communication</li>
        </td>
     </tr>
     
     </tbody>
     </table>   
     <h6><b>PROJECTS : </b></h6>
     <p> Software:
     <ul>
         <li>Designed a quiz in AngularJS</li>
         <li>Designed few templates</li>
     </ul>
     Hardware:
     <ul>
         <li>Break Failure Indicator - This constantly monitors the condition of the brake and gives an audio-visual indication.</li>
     </ul></p>

     <h6><b>ACHEIVEMNETS AND AWARDS : </b></h6>
     <p>Prathibha Award<br></br>Awarded with cash price and third position in hackathon 2020 in our college</p>
     <h6><b>PERSONAL DETAILS : </b></h6>
     <p >
     Date of Birth: 19th March 2001<br></br>
     Interests: Coding,Painting, Music,Yoga
    </p>
    </div>
    </div>
    )
}

export default Resume;