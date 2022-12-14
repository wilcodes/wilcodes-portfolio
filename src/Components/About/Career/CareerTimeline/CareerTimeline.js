import React, {useEffect, useState} from "react";
import {TimelineBox} from "../CareerStyles";
import Timeline from '@mui/lab/Timeline';
import {get, getDatabase, ref} from "firebase/database";
import TimelineStep from "./TimelineItem/TimelineItem";

const CareerTimeline = () => {

    const [careerData, setCareerData] = useState([]);


    useEffect(() => {
        const getData = async () => {

            const db = getDatabase();
            const data = await get(ref(db, 'career-data'));
            let serverData = [];
            Object.values(data.val()).forEach(project => {
                serverData.push(project)
            });
            setCareerData(serverData);
        };
        getData();
    }, []);


    return (<TimelineBox>

        <Timeline position="left" sx={{margin: 0}}>
            {careerData.map((background, i) => (
                <TimelineStep key={i} year={background.year} about={background.about} type={background.type}
                              institution={background.institution} id={background.about}
                              location={background.location}/>))}
        </Timeline>

    </TimelineBox>)
};

export default CareerTimeline;