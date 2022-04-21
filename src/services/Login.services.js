import axios from 'axios'

const SetLogin = (body) => {
    return axios.post("http://challenge-react.alkemy.org", body)
}

export default SetLogin;