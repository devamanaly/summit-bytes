import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Data from './Data';
import './style.css'
const TimeLine = () => {
    let iconStyle = { background: "#FFFFF0" };
    return (
        <div className='bg-[#E1F2FF] py-12'>
            {/* <h1>TimeLine</h1> */}
            <VerticalTimeline>
                {
                    Data.map((ele) => {
                        return (
                            <VerticalTimelineElement
                                key={ele.key}
                                className='' 
                                // Data={ele.date}
                                iconStyle={iconStyle}
                                
                               
                            >
                                <p>  </p>
                                <h3 className='  vertical-timeline-element-title'>{ele.title}</h3>

                                <p>{ele.detail}</p>



                            </VerticalTimelineElement>
                        )
                    })
                }

            </VerticalTimeline>
        </div>
    )
}

export default TimeLine