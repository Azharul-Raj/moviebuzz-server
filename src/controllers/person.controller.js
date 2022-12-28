import responseHandler from '../handlers/response.handler';
import tmdbApi from '../tmdb/tmdb.api';

const personDetails = async (req, res) => {
    try {
        const { personId } = req.params;
        const person = await tmdbApi.personDetails({ personId });
        responseHandler.ok(res, person); 
    } catch {
        responseHandler.error(res);
    }
}

const personMedias = async (req, res) => {
    try {
        const { personId } = req.params;
        const medias = await tmdbApi.personMedias({ personId });
        responseHandler.ok(res, medias);
    } catch {
        responseHandler.error(res)
    }
}

export default { personDetails, personMedias };