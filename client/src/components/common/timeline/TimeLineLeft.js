import React from 'react';

class TimeLineLeft extends React.Component{
    render() {
        return (
            <div className="content-left-container">
                <div className={this.props.styleName || 'content-left'} style={this.props.style}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default TimeLineLeft;