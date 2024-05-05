import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import myImg from '../../assets/portfolio.png'
import './Hero.css'
const Hero = (state) => {
    const [modal, setModal] = useState(false);
    const[description,setDescription]=useState("");
    const[cid,setCid]=useState("");
    useEffect(()=>{
        const{contract}=state;
        const description=async()=>{
            const descriptionText=await contract.methods.description().call();
            setDescription(description);
        }
        contract && description();
    },[state])
    useEffect(()=>{
        const{contract}=state;
        const cidOfImage=async()=>{
            const cid=await contract.methods.imageLink().call();
            setCid(cid);
        }
        contract && cidOfImage();
    },[state])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Rupali </span>
                    is a Full-Stack Blockchain Developer From India.</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - rupali.sawale@spit.ac.in
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://rose-abstract-mockingbird-681.mypinata.cloud/ipfs/Qme7N69rha6qoyGiuHcwV1LrP6LaFFsyV15ct4xTxm79yQ`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
