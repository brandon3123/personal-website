import React from 'react';

class TimeLine extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section id={this.props.timeLineId || 'conference-timeline'} className={'time-line-section'}>
                <div className="conference-center-line"></div>
                <div className="experience-timeline-content">
                    {this.props.children}
                </div>
            </section>
        );
    }

}

export default TimeLine;