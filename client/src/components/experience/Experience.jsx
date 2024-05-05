import {useState,useEffect} from "react"
import { SlCalender } from "react-icons/sl"
import './Experience.css'

const Experience = ({state}) => {
    const[education,setEducation]=useState("");

    useEffect(()=>{ 
        const{contract} = state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEductationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.knowledgeAquired}</p>
                        <p className="card-text4">
                        {edu.institution}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> January 2022 - June 2023
                        </p>
                        <h3 className="card-text2">Part of commitee member </h3>
                        <p className="card-text3">Joined different clubs like : Spark , Mudra , RC-club </p>
                        <p className="card-text4">
                            Rupali
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> August 2023 - December 2023
                        </p>
                        <h3 className="card-text2">NGO Member</h3>
                        <p className="card-text3">Joined NGO , which was part of seva course , learned teaching , interacting with different people etc. </p>
                        <p className="card-text4">
                            Rupali
                        </p>
                    </div>
                    {/* card3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> January 2024 - Present
                        </p>
                        <h3 className="card-text2">Blockchain  Technology </h3>
                        <p className="card-text3">Learned about various concepts , like Dapps , metamask , solidity programming and also many theory subjects.</p>
                        <p className="card-text4">
                            Rupali
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
