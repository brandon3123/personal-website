import React from 'react';
import Skill from "../shared/Skill";
import SkillsSection from "../shared/SkillsSection";
import oracle from "../../../images/skills/oracle.png"
import mysql from "../../../images/skills/mysql.png"
import postgres from "../../../images/skills/postGres.png"

class Databases extends React.Component {
    render() {
        return (
            <SkillsSection title={'Databases'}>
                <Skill skill={'Oracle'} icon={oracle}/>
                <Skill skill={'Postgres'} icon={postgres}/>
                <Skill skill={'MySQL'} icon={mysql}/>
            </SkillsSection>
        )
    }
}

export default Databases;