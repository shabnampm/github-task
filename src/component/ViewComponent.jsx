import { Component } from "react";
import studentServices from "../services/studentServices";
export class ViewComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            stud:[]
        }
    }
    componentDidMount()
    {
        studentServices.viewStudent().then((response)=>{

            this.setState({stud:response.data});
            console.log(this.state.stud);

        });
    }
    render()
    {
        return(
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th> <th>Name</th> <th>DateOfBirth</th> <th>Class</th> <th> Division</th> <th>Gender</th>
                        </tr>

                    </thead>

                    <tbody>
                    {
                        this.state.stud.map(
                            stud=>

                            <tr>
                                <td>{stud.id}</td>
                                <td>{stud.name}</td>
                                <td>{stud.dob}</td>
                                <td>{stud.cls}</td>
                                <td>{stud.div}</td>
                                <td>{stud.gen}</td>
                            </tr>   
                        )
                    }
                    </tbody>
                </table>
            </div>

        );
    }

} 
export default ViewComponent;