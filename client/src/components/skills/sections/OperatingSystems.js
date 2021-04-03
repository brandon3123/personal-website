import React from 'react';
import Skill from "../shared/Skill";
import SkillsSection from "../shared/SkillsSection";
import macOS from "../../../images/skills/macOS.png"
import windows from "../../../images/skills/windows.png"
import linux from "../../../images/skills/linux.png"

class OperatingSystems extends React.Component {
    render() {
        return (
            <SkillsSection title={'Operating Systems'}>
                <Skill skill={'Mac OS'} icon={macOS}/>
                <Skill skill={'Linux'} icon={linux}/>
                <Skill skill={'Windows'} icon={windows}/>
            </SkillsSection>
        )
    }
}

export default OperatingSystems;