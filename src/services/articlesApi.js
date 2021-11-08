import axios from "axios";

// const fatchArticlesWithQuery = (searchQuery, page) => {
//   console.log(searchQuery, page);
//   return axios

//     .get(
//       `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18864788-659534fccb4bfac7e1ae65a8e&image_type=photos&orientation=horizontal&per_page=12`
//     )

//     .then((response) => response.data.hits);
// };

// export default {
//   fatchArticlesWithQuery,
// };
const BASE_URL = "https://pixabay.com/api/";
const APY_KEY = "18864788-659534fccb4bfac7e1ae65a8e";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: APY_KEY,
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,

};

const fatchArticlesWithQuery = async ( searchQuery, page = 1 ) => {
  try {
    const { data } = await axios.get(`?q=${searchQuery}`, {
      params: { searchQuery, page },
    });
    console.log(data);
    return data.hits;
  } catch (error) {
    console.log("error", { error });
    return [];
  }
};

export default {
  fatchArticlesWithQuery,
};
