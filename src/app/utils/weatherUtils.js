export const fetchWeatherData = async (city, apiKey) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Erro ao buscar dados do clima");
      throw new Error("Erro ao buscar dados do clima");
    }
  } catch (error) {
    console.error("Erro ao buscar dados do clima", error.message);
    throw error;
  }
};

export const fetchCityImage = async (city) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=3&query=${city}&client_id=${process.env.UNSPLASH_KEY}`
    );

    const data = await response.json();

    return data.results[0].urls.full;
  } catch (error) {
    console.error(error.message);
  }
};
