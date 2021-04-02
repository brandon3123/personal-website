import React from 'react';
import Skill from "../shared/Skill";
import SkillsSection from "../shared/SkillsSection";
import confluence from "../../../images/skills/confluence.png"
import intellij from "../../../images/skills/intellij.png"
import pycharm from "../../../images/skills/pycharm.png"
import webstorm from "../../../images/skills/webStorm.png"
import dataGrip from "../../../images/skills/dataGrip.png"
import jira from "../../../images/skills/jira.png"
import bitbucket from "../../../images/skills/bitbucket.png"
import eclipse from "../../../images/skills/eclipse.png"
import netbeans from "../../../images/skills/netbeans.png"
import bamboo from "../../../images/skills/bamboo.png"

class IDEAndTools extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SkillsSection title={'IDE\'s/Tools'}>
                <Skill skill={'IntelliJ'} icon={intellij}/>
                <Skill skill={'PyCharm'} icon={pycharm}/>
                <Skill skill={'WebStorm'} icon={webstorm}/>
                <Skill skill={'DataGrip'} icon={dataGrip}/>
                <Skill skill={'Eclipse'} icon={eclipse}/>
                <Skill skill={'NetBeans'} icon={netbeans}/>
                <Skill skill={'Jira'} icon={jira}/>
                <Skill skill={'Bitbucket'} icon={bitbucket}/>
                <Skill skill={'Confluence'} icon={confluence}/>
                <Skill skill={'Bamboo'} icon={bamboo}/>
            </SkillsSection>
        )
    }
}

export default IDEAndTools;