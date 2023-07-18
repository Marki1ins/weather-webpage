"use client";
import { useState } from "react";

import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Container } from "./components/Container";
import { Description } from "./components/Description";
import { Details } from "./components/Details";
import { ErrorMessage } from "./components/ErrorMessage";
import { Form } from "./components/Form";
import { H2 } from "./components/H2";
import { H3 } from "./components/H3";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Paragraph } from "./components/Paragraph";
import { WeatherData } from "./components/WeatherData";
import { fetchCityImage, fetchWeatherData } from "./utils/weatherUtils";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [imageApiUrl, setImageApiUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchWeatherData(inputCity, process.env.API_KEY);

      if (data) {
        setWeatherData(data);
        setInputCity("");
        setError("");

        const imageUrl = await fetchCityImage(inputCity);
        setImageApiUrl(imageUrl);
      }
    } catch (error) {
      setError("Insira uma cidade existente");
    }
  };

  const handleChange = (e) => {
    setInputCity(e.target.value);
  };

  return (
    <Container imgSrc={imageApiUrl}>
      <Card>
        <Logo />
        <H3>Confira o clima de uma cidade:</H3>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={inputCity}
            onChange={(e) => handleChange(e)}
            placeholder="Digite o nome da cidade"
          />
          <Button />
        </Form>
        <WeatherData>
          {error ? (
            <ErrorMessage errorMsg={error} />
          ) : (
            weatherData && (
              <>
                <H2
                  cityName={weatherData.name}
                  imgSrc={`https://flagsapi.com/${weatherData.sys.country}/flat/64.png`}
                  igmAlt={`Bandeira de ${weatherData.name}`}
                />
                <Paragraph>
                  {weatherData.main.temp.toString().slice(0, 2)}&deg;C
                </Paragraph>
                <Description
                  description={
                    weatherData.weather[0].description.charAt(0).toUpperCase() +
                    weatherData.weather[0].description.slice(1)
                  }
                  imgSrc={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  imgAlt="Condições do tempo"
                />
                <Details
                  humidity={weatherData.main.humidity}
                  wind={weatherData.wind.speed.toString().slice(0, 1)}
                />
              </>
            )
          )}
        </WeatherData>
      </Card>
    </Container>
  );
}
