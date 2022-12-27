import axiosClient from '../axios/axios.client';
import tmdbEndpoints from './tmdb.endpoints';

const tmdbApi = {
    mediaList:async ({ mediaType, mediaCategory, page }) =>await axiosClient.get(tmdbEndpoints.mediaList({mediaType,mediaCategory,page})) ,
    mediaDetails:async ({ mediaType,  page }) =>await axiosClient.get(tmdbEndpoints.mediaDetails({mediaType,page})), 
    mediaGenres:async ({ mediaType }) =>await axiosClient.get(tmdbEndpoints.mediaDetails({mediaType})), 
    mediaCredits:async ({ mediaType,mediaId }) =>await axiosClient.get(tmdbEndpoints.mediaCredits({mediaType,mediaId})), 
    mediaVideos:async ({ mediaType,mediaId }) =>await axiosClient.get(tmdbEndpoints.mediaVideos({mediaType,mediaId})), 
    mediaImages:async ({ mediaType,mediaId }) =>await axiosClient.get(tmdbEndpoints.mediaImages({mediaType,mediaId})), 
    mediaRecommend:async ({ mediaType,mediaId }) =>await axiosClient.get(tmdbEndpoints.mediaRecommend({mediaType,mediaId})), 
    mediaSearch:async ({ mediaType,query,page }) =>await axiosClient.get(tmdbEndpoints.mediaSearch({mediaType,query,page})), 
    personDetails:async ({ personId }) =>await axiosClient.get(tmdbEndpoints.personDetails({personId})), 
    personMedias:async ({ personId }) =>await axiosClient.get(tmdbEndpoints.personMedias({personId})), 
}
export default tmdbApi;