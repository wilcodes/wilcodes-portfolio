import React from "react";
import {BioTittle, BioWrapper, BioImage, BioContentBox, BioSpan} from "./BioStyles";
import bioImage from "../../../assets/undraw_profile_details_re_ch9r.svg";
import {TextController, Description} from "../Introduction/IntroductionStyles";

const Bio = () => {
    return (<BioWrapper>

        <BioContentBox >
            <TextController>
                <BioTittle variant={'h2'}>
                    Bio 👨🏻‍💻
                </BioTittle>
            <Description>
               <BioSpan>L</BioSpan>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </Description>
                <Description>
                    <BioSpan>D</BioSpan>uis autem vel eum iriure dolor
                    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                    dolore te feugait nulla facilisi.
                </Description>
            </TextController>
            <BioImage src={bioImage} alt={'bio of a web developer'}/>
        </BioContentBox>


    </BioWrapper>)
}

export default Bio