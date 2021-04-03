import React from 'react';

class TimeLineContent extends React.Component{
    render() {
        return (
            <div className="timeline-article">
                {this.props.children}
                <div className="meta-date"/>
            </div>
        )
    }
}

export default TimeLineContent;