import React from 'react';

class TimeLineRight extends React.Component{
    render() {
        return (
            <div className="content-right-container">
                <div className="content-right">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default TimeLineRight;