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
import confluence from "../images/confluence.png"
import mysql from "../images/mysql.png"
import postgres from "../images/postGres.png"
import macOS from "../images/macOS.png"
import windows from "../images/windows.png"
import linux from "../images/linux.png"
import virtualBox from "../images/virtualBox.png"
import parallels from "../images/parallels.png"
import vmware from "../images/vmware.png"
import intellij from "../images/intellij.png"
import pycharm from "../images/pycharm.png"
import webstorm from "../images/webStorm.png"
import dataGrip from "../images/dataGrip.png"
import jira from "../images/jira.png"
import bitbucket from "../images/bitbucket.png"
import eclipse from "../images/eclipse.png"
import netbeans from "../images/netbeans.png"
import node from "../images/node.png"
import primeFaces from "../images/primeFaces.png"
import plsql from "../images/plsql.png"
import jaxrs from "../images/jaxrs.png"
import bamboo from "../images/bamboo.png"

class Skills extends React.Component {
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