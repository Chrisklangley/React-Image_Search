import axios from "axios";

const SerchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: " Client-ID YlIM2657ANPonLnXZv852yl1SZPvpl8vFNdB1DDW2NE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default SerchImages;
