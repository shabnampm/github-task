import axios from "axios";

const save_url="http://localhost:8080//save";
const view_url="http://localhost:8080//view";
class studentServices
{
    saveStudents(student)
    {
        return axios.post(save_url,student);
    }
    viewStudent(){
        return axios.get(view_url);
    }
}
export default new studentServices();