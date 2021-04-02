import React from 'react';
import Skill from "../shared/Skill";
import SkillsSection from "../shared/SkillsSection";
import virtualBox from "../../../images/skills/virtualBox.png"
import parallels from "../../../images/skills/parallels.png"
import vmware from "../../../images/skills/vmware.png"
import aws from "../../../images/skills/aws.png"

class CloudAndVirtualization extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SkillsSection title={'Cloud/Virtualization'}>
                <Skill skill={'AWS'} icon={aws} iconStyles={'awsSkillIcon'}/>
                <Skill skill={'Parallels'} icon={parallels}/>
                <Skill skill={'Virtual Box'} icon={virtualBox}/>
                <Skill skill={'VMware'} icon={vmware}/>
            </SkillsSection>
        )
    }
}

export default CloudAndVirtualization;