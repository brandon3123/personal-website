import React from "react";
import {useMediaQuery, useTheme} from "@material-ui/core";
import ExperienceListItem from "./ExperienceListItem";

export const ExperienceLeftUlTag = () =>  {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ul className={isSmallScreen ? '' : 'rtlList'}>
            <ExperienceListItem>
                On-going contract position. Providing timely and efficient website maintenance
            </ExperienceListItem>
            <ExperienceListItem>
                Implemented a complete website re-design and modernization, utilizing <i className={'headerFont'}>WordPress</i>
            </ExperienceListItem>
            <ExperienceListItem>
                Introduced new features for client, including CMS, email contact, calendar events and a photo gallery
            </ExperienceListItem>
        </ul>
    )
};

export default ExperienceLeftUlTag;