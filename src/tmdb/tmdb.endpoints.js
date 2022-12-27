import tmdbConfig from "./tmdb.config";
const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page);
  },
  mediaDetails: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}`);
  },
  mediaGenres: ({ mediaType }) => {
    tmdbConfig.getUrl(`genre/${mediaType}/list`);
  },
  mediaCredits: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`);
  },
  mediaVideos: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`);
  },
  mediaRecommend: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`);
  },
  mediaImages: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`);
  },
  mediaSearch: ({ mediaType, query, page }) => {
    tmdbConfig.getUrl(`search/${mediaType}`, { query, page });
  },
  personDetails: ({ personId }) => {
    tmdbConfig.getUrl(`person/${personId}`);
  },
  personMedias: ({ personId }) => {
    tmdbConfig.getUrl(`person/${personId}/combine_credits`);
  },
};
export default tmdbEndpoints;
