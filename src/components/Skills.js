import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import java from "../images/java.png"
import spring from "../images/spring.png"
import springSecurity from "../images/springSecurity.png"
import sql from "../images/sql.png"
import html from "../images/html-5.png"
import json from "../images/json.png"
import css from "../images/css-3.png"
import javaScript from "../images/java-script.png"
import reactIcon from "../images/react.png"
import oracle from "../images/oracle.png"
import python from "../images/python.png"
import oauth2 from "../images/oauth2.png"
import oidc from "../images/oidc.png"
import ldap from "../images/ldap.png"
import saml from "../images/saml.png"
import tomcat from "../images/tomcat.png"
import git from "../images/git.png"
import spock from "../images/spock.png"
import bash from "../images/bash.png"
import xml from "../images/xml.png"

class Skills extends React.Component {
    render() {
        return <Container className={'skillsContainer'}>
            <Typography variant={"h2"} className={'experienceHeader headerFont'} align={"center"}>
                Skills
            </Typography>
            <Divider className={'centerDivider'} />
            <Grid spacing={5} className={'skillsGrid'} direction={"column"} container>
                <Grid item>
                    <Typography variant={"h5"} className={'headerFont'}>
                        Languages/Frameworks
                    </Typography>
                    <br/>
                    <Grid container>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={springSecurity} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Spring <br/>Security</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={java} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Java</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={spring} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Spring</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'} style={{paddingRight: 5}}>
                            <Avatar src={oidc} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>OpenID</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={oauth2} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>OAuth2</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={saml} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>SAML2</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={git} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Git</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={sql} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>SQL</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={json} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>JSON</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={xml} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>XML</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={ldap} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>LDAP</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={tomcat} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Tomcat</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={html} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>HTML</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={css} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>CSS</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={javaScript} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>JavaScript</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={reactIcon} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>React</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={python} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Python</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={spock} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Spock</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={bash} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Bash</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Typography variant={"h5"} className={'headerFont'}>
                        Databases
                    </Typography>
                    <br/>
                    <Grid container>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={oracle} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Oracle</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h5"} className={'headerFont'}>
                                Operating Systems
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h5"} className={'headerFont'}>
                                Cloud Systems
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h5"} className={'headerFont'}>
                                IDE's/Tools
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    }
}

export default Skills