import React from 'react'
import { FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

class CreateForm extends React.Component {
    constructor() {
        super();
    }

    toggleVisibility() {
      this.props.toggleVisibility();
    }


    render() {
        const linkStyles = {
            color: 'black',
            };
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
                            <select className="ui inline dropdown" multiple="">
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
                            <select className="ui fluid search dropdown" maxSelections="" multiple="">
                              <option value="">Hadoop</option>
                              <option value="AL">Python</option>
                              <option value="AK">Java</option>
                              <option value="AZ">JavaScript</option>
                              <option value="AR">C</option>
                              <option value="CA">C++</option>
                              <option value="CO">Bash</option>
                              <option value="CT">PHP</option>
                              <option value="DE">Ruby</option>
                              <option value="DC">Git</option>
                              <option value="FL">React</option>
                              <option value="GA">Flask</option>
                              <option value="HI">NodeJS</option>
                              <option value="ID">Bash</option>
                              <option value="IL">Earlang</option>
                            </select>
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