import {useMediaQuery, useTheme} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const ExperienceUlTag = () =>  {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ul className={isSmallScreen ? '' : 'rtlList'}>
            <li>
                <Typography className={'informationFont experienceText'}>
                    On-going contract position. Providing timely and efficient website maintenance
                </Typography>
            </li>
            <li>
                <Typography className={'informationFont experienceText'}>
                    Implemented a complete website re-design and modernization, utilizing <i className={'headerFont'}>WordPress</i>
                </Typography>
            </li>
            <li>
                <Typography className={'informationFont experienceText'}>
                    Introduced new features for client, including CMS, email contact, calendar events and a photo gallery
                </Typography>
            </li>
        </ul>
    )
};

export default ExperienceUlTag;