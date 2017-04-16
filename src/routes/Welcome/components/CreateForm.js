import React from 'react'
import {Dropdown} from 'semantic-ui-react'

class CreateForm extends React.Component {
    constructor() {
        super();
    }

    toggleVisibility() {
      this.props.toggleVisibility();
    }

    componentDidMount() {
      $('.ui.fluid.search.dropdown').dropdown();
    }

    render() {
        const linkStyles = {
            color: 'black',
            };

        const styles = {
          allowAdditions: 'true',
        };
        const countryOptions = [ { key: 1, value: 'Hadoop', text: 'Hadoop' },
        { key: 2, value: 'Python', text: 'Python' },
        { key: 3, value: 'Java', text: 'Java' },
        { key: 4, value: 'JavaScript', text: 'JavaScript' },
        { key: 5, value: 'C', text: 'C' },
        { key: 6, value: 'C++', text: 'C++' },
        { key: 7, value: 'Bash', text: 'Bash' },
        { key: 8, value: 'PHP', text: 'PHP' },
        { key: 9, value: 'Ruby', text: 'Ruby' },
        { key: 10, value: 'Git', text: 'Git' },
        { key: 11, value: 'React', text: 'React' },
        { key: 12, value: 'Flask', text: 'Flask' },
        { key: 13, value: 'Nodejs', text: 'NodeJS' },
        { key: 14, value: 'Earlang', text: 'Earlang' },
        ]

        let form;
        if(this.props.active) {
          form = (<div className="card big">
                    <div className="ui card">
                      <div className="header">Preview Survey</div>
                        <div className="content">
                          <form className="ui form">
                            <div className="field">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="First Name"/>
                          </div>
                          <div className="field">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="Last Name"/>
                          </div>
                           <div className="field">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email"/>
                          </div>
                          <div className="field">
                            <label>Meeting Times</label>
                            <select className="ui fluid search dropdown" multiple="">
                              <option value="">M</option>
                              <option value="T">T</option>
                              <option value="W">W</option>
                              <option value="T">T</option>
                              <option value="F">F</option>
                              <option value="S">S</option>
                            </select>
                          </div>
                          <div className="field">
                            <label>Languages</label>
                            <Dropdown allowAdditions={true} fluid multiple search selection options={countryOptions}/>
                        </div>
                        <div className="field">
                          <label>Requests</label>
                          <textarea rows="2"></textarea>
               
                        </div>
                        </form>
                        <div className="extra content">
                          <div className="link" key="visible">
                            <p><strong> Copy Link:</strong> </p> 
                            <span className={"line " + linkStyles}>OIGY*R^F*&og787TOYq%FI%FO&%</span>
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>
                  )
        }
        return (
          <div>
            {form}
            <div className="overlay" onClick={this.toggleVisibility.bind(this)}>
            </div>
          </div>
        )   
    }
}

export default CreateForm;