import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import java from "../images/skills/java.png"
import spring from "../images/skills/spring.png"
import springSecurity from "../images/skills/springSecurity.png"
import sql from "../images/skills/sql.png"
import html from "../images/skills/html-5.png"
import json from "../images/skills/json.png"
import css from "../images/skills/css-3.png"
import javaScript from "../images/skills/java-script.png"
import reactIcon from "../images/skills/react.png"
import oracle from "../images/skills/oracle.png"
import python from "../images/skills/python.png"
import oauth2 from "../images/skills/oauth2.png"
import oidc from "../images/skills/oidc.png"
import ldap from "../images/skills/ldap.png"
import saml from "../images/skills/saml.png"
import tomcat from "../images/skills/tomcat.png"
import git from "../images/skills/git.png"
import spock from "../images/skills/spock.png"
import bash from "../images/skills/bash.png"
import xml from "../images/skills/xml.png"
import confluence from "../images/skills/confluence.png"
import mysql from "../images/skills/mysql.png"
import postgres from "../images/skills/postGres.png"
import macOS from "../images/skills/macOS.png"
import windows from "../images/skills/windows.png"
import linux from "../images/skills/linux.png"
import virtualBox from "../images/skills/virtualBox.png"
import parallels from "../images/skills/parallels.png"
import vmware from "../images/skills/vmware.png"
import intellij from "../images/skills/intellij.png"
import pycharm from "../images/skills/pycharm.png"
import webstorm from "../images/skills/webStorm.png"
import dataGrip from "../images/skills/dataGrip.png"
import jira from "../images/skills/jira.png"
import bitbucket from "../images/skills/bitbucket.png"
import eclipse from "../images/skills/eclipse.png"
import netbeans from "../images/skills/netbeans.png"
import node from "../images/skills/node.png"
import primeFaces from "../images/skills/primeFaces.png"
import plsql from "../images/skills/plsql.png"
import jaxrs from "../images/skills/jaxrs.png"
import bamboo from "../images/skills/bamboo.png"

class Skills extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return <Container className={'pageContainer'}>
            <Typography variant={"h2"} className={'experienceHeader headerFont'} align={"center"}>
                Skills
            </Typography>
            <Divider className={'centerDivider'}/>
            <Grid spacing={2} className={'skillsGrid'} direction={"column"} container>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h4"} className={'headerFont'}>
                                Languages/Frameworks
                            </Typography>
                            <br/>
                            <Grid container>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={java} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Java</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={spring} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Spring</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={springSecurity} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"}
                                                className={'informationFont'}>Spring<br/>Security</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={primeFaces} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"}
                                                className={'informationFont'}>Prime<br/>Faces</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={jaxrs} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>JAX-RS</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={spock} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Spock</Typography>
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
                                    <Avatar src={plsql} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>PL/SQL</Typography>
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
                                    <Avatar src={node} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Node JS</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={python} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Python</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={bash} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Bash</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h4"} className={'headerFont'}>
                                Databases
                            </Typography>
                            <br/>
                            <Grid container>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={oracle} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Oracle</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={postgres} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Postgres</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={mysql} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>MySQL</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h4"} className={'headerFont'}>
                                IDE's/Tools
                            </Typography>
                            <br/>
                            <Grid container>
                                <Grid item className={'skillGridItem skillsIconPaddingRight'}>
                                    <Avatar src={intellij} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>IntelliJ</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem skillsIconPaddingRight'}>
                                    <Avatar src={pycharm} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>PyCharm</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem skillsIconPaddingRight'}>
                                    <Avatar src={webstorm} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>WebStorm</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem skillsIconPaddingRight'}>
                                    <Avatar src={dataGrip} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>DataGrip</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem skillsIconPaddingRight'}>
                                    <Avatar src={eclipse} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Eclipse</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={netbeans} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>NetBeans</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={jira} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Jira</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem skillsIconPaddingRight'}>
                                    <Avatar src={bitbucket} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Bitbucket</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem skillsIconPaddingRight'}>
                                    <Avatar src={confluence} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Confluence</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem skillsIconPaddingRight'}>
                                    <Avatar src={bamboo} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Bamboo</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h4"} className={'headerFont'}>
                                Operating Systems
                            </Typography>
                            <br/>
                            <Grid container>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={macOS} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Mac OS</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={linux} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Linux</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={windows} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Windows</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h4"} className={'headerFont'}>
                                Cloud Systems
                            </Typography>
                            <br/>
                            <Grid container>
                                <Grid item className={'skillGridItem'}>
                                    <Avatar src={parallels} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Parallels</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'} style={{paddingLeft: 8}}>
                                    <Avatar src={virtualBox} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>Virtual Box</Typography>
                                </Grid>
                                <Grid item className={'skillGridItem'} style={{paddingLeft: 8}}>
                                    <Avatar src={vmware} className={'skillsIcon'} variant={"square"}></Avatar>
                                    <Typography variant={"h6"} className={'informationFont'}>VMware</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    }
}

export default Skills