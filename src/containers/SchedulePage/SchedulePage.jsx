import React from 'react';
import { connect } from 'react-redux';
import { scheduleActions } from '../../_actions';
import { Link } from 'react-router-dom';

class SchedulePage extends React.PureComponent {
    constructor(props) {
        super(props);}
    
    componentDidMount() {
        // this.props.getSchedules(this.props.location.state.id);
    }

    componentWillUnmount(){
        this.setState({
            schedules:null,
        })
      }

    render() {
        const { location } = this.props;
        return (            
            <div className="container">
                <Link to="/recruiter">Return to recruiter pages </Link>
                <div className="col-md-12 col-md-offset-1">
                    <h1>{location.state.name}</h1>
                    <div dangerouslySetInnerHTML={{__html:location.state.summary}} />
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { schedules } = state;
    return { schedules };
}

const actionCreators = {
    getSchedules: scheduleActions.getSchedules,
}

const connectedSchedulePage = connect(mapState, actionCreators)(SchedulePage);
export { connectedSchedulePage as SchedulePage };