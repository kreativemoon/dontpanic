import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Contents, Skills, Oval } from './styles';
import { Radar, Chart } from 'react-chartjs-2';
import Projects from './projects';

const Profile = () => {
    const [closeList, setCloseList] = useState(false);
    const [display, setDisplay] = useState('');
    
    const chartRef = useRef<Chart | null>(null);


    const projects = [
        {name: 'project1', position: {x: 1550, y: 500}, type: 'html', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]},
        {name: 'project2', position: {x: 850, y: 700}, type: 'css', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]},
        {name: 'project3', position: {x: 1300, y: 1000}, type: 'js', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]}
    ]
    const canvas = document.getElementsByTagName('canvas')[0] as HTMLCanvasElement
    console.log(canvas);
    // const ctx = canvas!.getContext('2d');
    // const gradient = ctx!.createLinearGradient(20,0, 220,0);
    // gradient.addColorStop(0, 'green');
    // gradient.addColorStop(.5, 'cyan');
    // gradient.addColorStop(1, 'green');
    const data = {
        labels: [
            'HTML',
            'CSS',
            'Javascript',
        ],
        datasets: [{
            data: [80, 70, 80],
            backgroundColor: '#20f08b',
            
        }]
    };
    return (
        <Contents>
            <Skills>
                <div className="title">SKILLS</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum turpis sed pretium sodales.
                </div>
                <Radar ref={chartRef}
                    data={data}
                    width={10}
                    height={5}
                    options={{ 
                        plugins: {
                            legend: {
                                display: false,
                            }
                        },
                        scales: {
                            r: {
                                angleLines: {
                                    display: false,
                                },
                                pointLabels: {
                                    color: "white",
                                    font: {
                                        size: 14,
                                    }
                                },
                                suggestedMin: 0,
                                suggestedMax: 100,
                                ticks: {
                                    display: false,
                                    count: 5,
                                },
                                grid: {
                                    circular: true,
                                    color: "black",
                                    z: 5,
                                }
                            }
                        }
                    }}
                />
            </Skills>
            <hr style={{ width: "100%", padding: '0', margin: '0', border: 'none', height: '1px', backgroundColor: 'black' }} />
            <Skills>
                <div className="title">Marks</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum turpis sed pretium sodales.
                </div>
            </Skills>

                <Oval>
                    <div className="oval-descp" style={{backgroundColor: "#1799b8"}} />
                    <div className="oval-name">Great</div>
                    <div className="oval-descp" style={{backgroundColor: "#17b84c"}} />
                    <div className="oval-name">Good</div>
                    <div className="oval-descp" style={{backgroundColor: "#f4cc1b"}} />
                    <div className="oval-name">Normal</div>
                    <div className="oval-descp" style={{backgroundColor: "#e64715"}} />
                    <div className="oval-name">Bad</div>
                </Oval>

                    {/* {projects.map((project, index) => 
                    console.log(project)
                        )} */}
                        <div className="project-lists">
                        {projects.map((project, index) =>{
                            return <Projects project={project} key={index}/>;}
                        )}
                        </div>
        </Contents>
    );
};

export default Profile;