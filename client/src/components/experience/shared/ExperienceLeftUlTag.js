import React from "react";
import {useMediaQuery, useTheme} from "@material-ui/core";
import ExperienceListItem from "./ExperienceListItem";

export const ExperienceLeftUlTag = ({children}) =>  {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ul className={isSmallScreen ? 'pad-line-start' : 'rtlList'}>
            {children}
        </ul>
    )
};

export default ExperienceLeftUlTag;