import {useMediaQuery, useTheme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

function ResponsiveInstituteName(name) {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Typography className={'headerFont'} variant={isSmallScreen ? "h4" : "h4"}>{name.value}</Typography>
    )
};

export default ResponsiveInstituteName;