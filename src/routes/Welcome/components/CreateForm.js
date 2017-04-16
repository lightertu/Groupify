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
        const LanguageOptions = [ 
          { key: 1, value: 'Hadoop', text: 'Hadoop' },
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

        const DayOptions = [ 
          { key: 1, value: 'M', text: 'monday'},
          { key: 2, value: 'T', text: 'tuesday'},
          { key: 3, value: 'W', text: 'wednesday'},
          { key: 4, value: 'TH', text: 'thursday'},
          { key: 5, value: 'F', text: 'friday'},
          { key: 6, value: 'S', text: 'saturday'},
          { key: 7, value: 'SU', text: 'sunday'}
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
                            <Dropdown 
                              allowAdditions={true} 
                              fluid multiple selection 
                              options={DayOptions}/>
                          </div>
                          <div className="field">
                            <label>Languages</label>
                            <Dropdown 
                              allowAdditions={true} 
                              fluid multiple search selection 
                              options={LanguageOptions}/>
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