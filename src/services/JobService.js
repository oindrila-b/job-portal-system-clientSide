import axios from "axios";

const BASE_JOBS_URL='http://localhost:8080/api/v1/jobs';

class JobService{

    getJobs(){
        return axios.get(BASE_JOBS_URL);
    }

    applyCandidates(candidate){
        return axios.post(BASE_JOBS_URL+'/apply',candidate);
    }

}

export default new JobService();