import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { recruiterActions } from '../../_actions';
import {CheckBox} from  '../../_components';

class RecruitersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tech:'',
            frameworks:[],
            isOdd:undefined,
            candidates:undefined
        };
    }

    componentDidMount() {
        this.props.getCandidates();
    }

    render() {
        const handleTech = e => {
            return this.setState({frameworks:[],tech: e });
        }
        const handleFramework = e => {
            this.state.frameworks.find(framework=>framework===e)?
             this.setState({ frameworks:this.state.frameworks.filter(framework=>framework !==e) })
             :this.setState({ frameworks: [...this.state.frameworks,e] })
            }
            
        const handleSearch = ()=>{
            const isOdd = num=> num % 2;
            this.state.frameworks.map(num=>this.setState({isOdd:isOdd(num)}))
            console.log('is odd?: ' + this.state.isOdd);    
            return this.props.getCandidates(this.state.isOdd);
        }
        const { candidates,frameworks } = this.props;
        console.log(candidates)
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
        <div>
        {candidates.loading && <em>Loading candidates...<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></em>}
        {candidates.error && <span className="text-danger">ERROR: {candidates.error}</span>}
        {candidates.items && 
            <div className="col-md-6 col-md-offset-3">
                    {console.log(this.state.candidates)}
                <h2>Please select the technology:</h2>
                <label>
                    <input type="radio" name="net" 
                        value={this.state.tech==='net'} 
                        checked={this.state.tech ==='net'} 
                        onChange={handleTech.bind(this,'net')} />
                    .Net  
                </label>
                <label>
                    <input type="radio" name="java" 
                        value={this.state.tech==='java'} 
                        checked={this.state.tech==='java'} 
                        onChange={handleTech.bind(this,'java')}/>
                    Java
                </label>
                {this.state.tech && this.state.tech!=='' && 
                    <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <h3>Please select the frameworks:</h3>
                        {/* {techs[this.state.tech].map(tech=>
                        <div key ={tech.id}>
                            <label>
                                <input type="checkbox" name="framework" 
                                    value={this.state.frameworks.find(framework=>framework===tech.id)} 
                                    checked={this.state.frameworks.find(framework=>framework===tech.id)} 
                                    onChange={handleFramework.bind(this,tech.id)}/>
                                {tech.name}{console.log(this.state.candidates)}
                            </label>
                        </div>
                        )}                    */}
                    </div>
                }
                {frameworks && frameworks.length  &&
                    <ul>
                     <h3>All candidates available:</h3>
                        {candidates.items.map((candidate, index) =>
                            <li key={candidate.id}>
                                <Link to={{
                                    pathname: "/schedule",
                                    state: candidate}}>
                                    <strong>{candidate.name }</strong><br/>
                                </Link>
                            </li>
                        )}
                    </ul>
                }
            </div>
        }
        </div>                                                                                                                                                                                                                                                      
        );
    }
}

function mapState(state) {
    const { candidates, frameworks} = state;
    return { candidates, frameworks };
}

const actionCreators = {
     getCandidates: recruiterActions.getCandidates
}

const connectedRecruitersPage = connect(mapState, actionCreators)(RecruitersPage);
export { connectedRecruitersPage as RecruitersPage };