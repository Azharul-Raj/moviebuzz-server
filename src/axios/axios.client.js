import axios from "axios";
const get = async (url) => {
    const response = axios.get(url);
    return (await response).data;
}
export default { get };