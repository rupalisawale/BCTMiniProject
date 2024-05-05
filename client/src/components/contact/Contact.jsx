import React, {useEffect, useState} from 'react'
import './Contact.css'
const Contact = ({state}) => {
    const [resume, setResume] = useState("");
    useEffect(()=>{ 
        const {contract}=state;
        const resumeCid= async()=>{
            const resume = await contract.methods.resumeLink().call();
            setResume("https://rose-abstract-mockingbird-681.mypinata.cloud/ipfs/QmXYWgxWg9hsx1mBHhoUzvutp4U9t24LGttx1ZMGFarTvf");
        }
        contract && resumeCid();
    },[state])
 
    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    View Resume
                </button>
            </a>

        </section>
    )
}

export default Contact
