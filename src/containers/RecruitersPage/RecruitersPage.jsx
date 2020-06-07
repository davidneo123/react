import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { recruiterActions } from '../../_actions';

class RecruitersPage extends React.PureComponent {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { users } = this.props;
        const handleSearch = (q)=>{
            console.log(q)
            return this.props.getUsers(q);
        }
        const techs = {
            net:{
                1:'ASP.Net',
                2:'MVVM',
                3:'Ado.Net',
                4:'Entity Framework',
                5:'LinQ'
            },
            java:{
                1:'Java Server Pages',
                2:'Java Server Faces',
                3:'Enterprise Java Beans',
                4:'Java Persistence Api',
                5:'Java Messaging Services'
            }
        };
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>All shows:</h3>
                {users.loading && <em>Loading shows...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                <Link to={{
                                pathname: "/schedule",
                                state: user}}>
                                    <strong>{user.name }</strong><br/>
                                </Link>
                            </li>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

function mapState(state) {
    const { users } = state;
    return { users };
}

const actionCreators = {
     getUsers: recruiterActions.getUsers
}

const connectedRecruitersPage = connect(mapState, actionCreators)(RecruitersPage);
export { connectedRecruitersPage as RecruitersPage };