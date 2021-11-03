import React, { Component } from 'react'
import studentServices from '../services/studentServices'
import ViewComponent from './ViewComponent';


export class RegisterComponent extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            name: "",
            dob: "",
            clas: "",
            divi: "",
            gender: "",
        }
        this.handlesnamechange =this.handlesnamechange.bind(this);
        this.handlesdobchange =this.handlesdobchange.bind(this);
        this.handlesclschange =this.handlesclschange.bind(this);
        this.handlesdivichange =this.handlesdivichange.bind(this);
        this.handlesgenderchange =this.handlesgenderchange.bind(this);
        

    }

    handlesnamechange=(event) =>{
        this.setState({
            name:event.target.value.replace(/[^a-zA-Z\s]/ig,'')
        })
    }

    handlesdobchange=(event) =>{
        this.setState({
            dob:event.target.value
        })
    }

    handlesclschange=(event) =>{
        this.setState({
            clas:event.target.value
        })
    }

    handlesdivichange=(event) =>{
        this.setState({
            divi:event.target.value
        })
    }

    handlesgenderchange=(event) =>{
        this.setState({
            gender:event.target.value
        })
    }

    handleSubmit = (event) => {
        let stud={
            name:this.state.name,
            dob:this.state.dob,
            cls:this.state.clas,
            div:this.state.divi,
            gen:this.state.gender


        }
       //alert(JSON.stringify(stud));
       alert('You have been successfully registered!')
       studentServices.saveStudents(stud).then(response=>{
           console.log(response);
             
       })
    }
  


    

    render()
    {
        
        return(
                <div class="row">
                <div class="col-sm-6">
                    <form>
                        <h3>Student Registeration</h3>
                        <p>Please fill in this form to create an account.</p>
                        <div Class="form-group">
                            <label><b>Name</b></label>
                            <input type="text" class="form-control" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handlesnamechange} required={required}/>
                        </div>
                        
                        <div Class="form-group">
                            <label><b>Date Of Birth</b></label>
                            <input type="Date" class="form-control" placeholder="Enter Date of birth" name="dob" value={this.state.dob} onChange={this.handlesdobchange} required/>
                        </div>

                        <div Class="form-group">
                            <label><b>Class</b></label>
                            <select class="form-select" name="cls" checked={this.state.clas} onChange={this.handlesclschange}>
                                <option>-----Select Class----</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                                <option value="VII">VII</option>
                                <option value="VIII">VIII</option>
                                <option value="IX">IX</option>
                                <option value="X">X</option>
                                <option value="XII">XII</option>
                                <option value="X12">X12</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label><b>Division</b></label>
                            <select class="form-select" name="divi" checked={this.state.divi} onChange={this.handlesdivichange} >
                                <option>-----Select Division----</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>

                       

                        <div class="form-check">
                            <label><b>Gender:</b></label>
                            <div>
                                <input type="radio" class="form-check-input" name="gender" value="Male" checked={this.state.gender==="male"} onChange={this.handlesgenderchange}></input>Male
                            </div>
                            <div>
                                <input type="radio" class="form-check-input" name="gender" value="Female" checked={this.state.gender==="female"} onChange={this.handlesgenderchange}/>Female
                            </div>
                        </div>

                     
                        
                        <div>
                            <button type="button" class="btn btn-primary mt-3" onClick={this.handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-6">
                    <ViewComponent/>
                </div>

            </div>
        )
    }
    
}
export default RegisterComponent;