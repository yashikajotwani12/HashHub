import React, { useState , useEffect } from "react"
import "./Field.css"
import ItemsCarousel from 'react-items-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Field = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    useEffect(()=>{
        AOS.init({duration: 3000});
    },[]);

    return (
        <div id="field">
            <center><h1 className="head" data-aos="zoom-in-down">Our Fields</h1></center>
            <center><p className="para" data-aos="fade-down">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, non?</p></center>
            {/* <div className="slider"> */}
            <div style={{ padding: `0 ${chevronWidth}px` ,background: 'hsl(0deg 0% 0% / 30%)',    marginTop: '1rem',boxShadow: 'inset 10px 5px 51px 27px #0000005c'}}>
                
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={15}
                    leftChevron={<button style={{fontSize:'2rem',padding:'40px 10px',border:'none',background:'rgb(40 44 52 / 47%)',marginLeft:'-2px' , color:'white', cursor:'pointer'}}>{'<'}</button>}
                    rightChevron={<button style={{fontSize:'2rem',padding:'40px 10px',border:'none',background:'rgb(40 44 52 / 47%)',color:'white', cursor:'pointer', marginRight:'0'}}>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >

                    <div className="card">
                        <div className="card-content">

                            <h2 className="card-title">Open-Source</h2>
                            <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla ipsam ex! Tempora totam, non quos tempore facere ullam neque.</p>
                            <a href="#" className="button" onClick={() => {
                                alert('Work In Progress!');
                            }}>Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">

                            <h2 className="card-title">Web Development</h2>
                            <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla ipsam ex! Tempora totam, non quos tempore facere ullam neque.</p>
                            <a href="#" className="button" onClick={() => {
                                alert('Work In Progress!');
                            }}>Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">

                            <h2 className="card-title">App Development</h2>
                            <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla ipsam ex! Tempora totam, non quos tempore facere ullam neque.</p>
                            <a href="#" className="button" onClick={() => {
                                alert('Work In Progress!');
                            }}>Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">

                            <h2 className="card-title">Machine Learning</h2>
                            <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla ipsam ex! Tempora totam, non quos tempore facere ullam neque.</p>
                            <a href="#" className="button" onClick={() => {
                                alert('Work In Progress!');
                            }}>Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">

                            <h2 className="card-title">AI</h2>
                            <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla ipsam ex! Tempora totam, non quos tempore facere ullam neque.</p>
                            <a href="#" className="button" onClick={() => {
                                alert('Work In Progress!');
                            }}>Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                            <div className="card-content">

                                <h2 className="card-title">Competitive Programming</h2>
                                <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla ipsam ex! Tempora totam, non quos tempore facere ullam neque.</p>
                                <a href="#" className="button" onClick={() => {
                                    alert('Work In Progress!');
                                }}>Learn More</a>
                            </div>
                    </div>
                        <div className="card">
                            <div className="card-content">
                                <h2 className="card-title">Data Structures and Algorithms</h2>
                                <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla ipsam ex! Tempora totam, non quos tempore facere ullam neque.</p>
                                <a href="#" className="button" onClick={() => {
                                    alert('Work In Progress!');
                                }}>Learn More</a>
                            </div>
                        </div>
                </ItemsCarousel>
                {/* </div> */}
            </div>
        </div>
    )
}
export default Field;