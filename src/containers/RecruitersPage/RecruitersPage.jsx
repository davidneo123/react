import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { recruiterActions } from '../../_actions';

class RecruitersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tech:'',
            frameworks:[]
        };
    }
    componentDidMount() {
        // this.state={ tech:''}
        // this.props.getUsers();
    }

    render() {
        const handleTech = e => {
            this.setState({frameworks:[]});
            this.setState({ tech: e });
        }
        const handleFramework = e => {
            console.log(e,this.state.frameworks.find(framework=>framework===e))
            this.state.frameworks.find(framework=>framework===e)?
             this.setState({ frameworks:this.state.frameworks.filter(framework=>framework !==e) })
             :this.setState({ frameworks: [...this.state.frameworks,e] })
            //  this.handleSearch.bind(this)
            }
            
        const handleSearch = ()=>{
            return this.props.getUsers();
        }
        const { users } = this.props;
        const techs = {
            net:[
                {id:1, name:'ASP.Net'},
                {id:2, name:'MVVM'},
                {id:3, name:'Ado.Net'},
                {id:4, name:'Entity Framework'},
                {id:5, name:'LinQ'}
            ],
            java:[
                {id:1, name:'Java Server Pages'},
                {id:2, name:'Java Server Faces'},
                {id:3, name:'Enterprise Java Beans'},
                {id:4, name:'Java Persistence Api'},
                {id:5, name:'Java Messaging Services'}
            ]
        };
        return (
            <div className="col-md-6 col-md-offset-3">
                    {console.log(this.state.frameworks)}
                <h2>Please select the technology:</h2>
                <label>
                    <input type="radio" name="net" 
                        // value={this.state.tech==='net'} 
                        checked={this.state.tech ==='net'} 
                        onChange={handleTech.bind(this,'net')} />
                    .Net  
                </label>
                <label>
                    <input type="radio" name="java" 
                        // value={this.state.tech==='java'} 
                        checked={this.state.tech==='java'} 
                        onChange={handleTech.bind(this,'java')}/>
                    Java
                </label>
                {this.state.tech && this.state.tech!=='' && 
                    <div>
                        <h3>Please select the frameworks:</h3>
                        {techs[this.state.tech].map(tech=>
                        <div key ={tech.id}>
                            <label>
                                <input type="checkbox" name="framework" 
                                    value={this.state.frameworks.find(framework=>framework.id===tech.id)} 
                                    checked={this.state.frameworks.find(framework=>framework.id===tech.id)} 
                                    onChange={handleFramework.bind(this,tech.id)}/>
                                {tech.name}
                            </label>
                        </div>
                        )}                   
                    </div>
                }
                {users.loading && <em>Loading candidates...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                     <h3>All shows:</h3>
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