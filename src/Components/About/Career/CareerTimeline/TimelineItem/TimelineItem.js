import React from "react"
import {TimelineOppositeContent} from "@mui/lab";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from '@mui/icons-material/School';
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import {TimelineItem} from "@mui/lab";
import EngineeringIcon from '@mui/icons-material/Engineering';

const TimelineStep = (props) => {
    const {year, about, type, institution} = props;

    return (<TimelineItem >
        <TimelineOppositeContent
            sx={{m: 'auto 0'}}
            align="right"
            variant="body2"
            color="text.secondary"
        >
            {year}
            <Typography variant="h6">{type}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator sx={{
            height:'150px',
            color:'#3F3D55',

        }}>
            <TimelineConnector  />
            <TimelineDot>
                <SchoolIcon/>
            </TimelineDot>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{py: '12px', px: 2}}  >
            <Typography variant="h6" component="span" >
                {institution}

            </Typography>

            <Typography>{about}</Typography>

        </TimelineContent>

    </TimelineItem>)

};


export default TimelineStep;


// <TimelineItem>
//     <TimelineOppositeContent
//         sx={{ m: 'auto 0' }}
//         variant="body2"
//         color="text.secondary"
//     >
//         10:00 am
//     </TimelineOppositeContent>
//     <TimelineSeparator>
//         <TimelineConnector />
//         <TimelineDot color="primary">
//             <Fastfood />
//         </TimelineDot>
//         <TimelineConnector />
//     </TimelineSeparator>
//     <TimelineContent sx={{ py: '12px', px: 2 }}>
//         <Typography variant="h6" component="span">
//             Code
//         </Typography>
//         <Typography>Because it&apos;s awesome!</Typography>
//     </TimelineContent>
// </TimelineItem>