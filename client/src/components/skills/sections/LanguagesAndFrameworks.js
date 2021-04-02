import React from 'react';
import Skill from "../shared/Skill";
import java from "../../../images/skills/java.png";
import SkillsSection from "../shared/SkillsSection";
import spring from "../../../images/skills/spring.png"
import springSecurity from "../../../images/skills/springSecurity.png"
import sql from "../../../images/skills/sql.png"
import html from "../../../images/skills/html-5.png"
import json from "../../../images/skills/json.png"
import css from "../../../images/skills/css-3.png"
import javaScript from "../../../images/skills/java-script.png"
import reactIcon from "../../../images/skills/react.png"
import python from "../../../images/skills/python.png"
import oauth2 from "../../../images/skills/oauth2.png"
import oidc from "../../../images/skills/oidc.png"
import ldap from "../../../images/skills/ldap.png"
import saml from "../../../images/skills/saml.png"
import tomcat from "../../../images/skills/tomcat.png"
import git from "../../../images/skills/git.png"
import spock from "../../../images/skills/spock.png"
import bash from "../../../images/skills/bash.png"
import xml from "../../../images/skills/xml.png"
import node from "../../../images/skills/node.png"
import primeFaces from "../../../images/skills/primeFaces.png"
import plsql from "../../../images/skills/plsql.png"
import jaxrs from "../../../images/skills/jaxrs.png"

class LanguagesAndFrameworks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SkillsSection title={'Languages/Frameworks'}>
                <Skill skill={'Java'} icon={java}/>
                <Skill skill={'Spring'} icon={spring}/>
                <Skill skill={<>Spring<br/>Security</>} icon={springSecurity}/>
                <Skill skill={<>Prime<br/>Faces</>} icon={primeFaces}/>
                <Skill skill={'JAX-RS'} icon={jaxrs}/>
                <Skill skill={'Spock'} icon={spock}/>
                <Skill skill={'OpenID'} icon={oidc}/>
                <Skill skill={'OAuth2'} icon={oauth2}/>
                <Skill skill={'SAML2'} icon={saml}/>
                <Skill skill={'Git'} icon={git}/>
                <Skill skill={'SQL'} icon={sql}/>
                <Skill skill={'PL/SQL'} icon={plsql}/>
                <Skill skill={'JSON'} icon={json}/>
                <Skill skill={'XML'} icon={xml}/>
                <Skill skill={'LDAP'} icon={ldap}/>
                <Skill skill={'Tomcat'} icon={tomcat}/>
                <Skill skill={'HTML'} icon={html}/>
                <Skill skill={'CSS'} icon={css}/>
                <Skill skill={'JavaScript'} icon={javaScript}/>
                <Skill skill={'React'} icon={reactIcon}/>
                <Skill skill={'Node JS'} icon={node}/>
                <Skill skill={'Python'} icon={python}/>
                <Skill skill={'Bash'} icon={bash}/>
            </SkillsSection>
        )
    }
}

export default LanguagesAndFrameworks;