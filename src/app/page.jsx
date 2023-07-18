"use client";

import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Description } from "./components/Description";
import { Details } from "./components/Details";
import { Form } from "./components/Form";
import { H2 } from "./components/H2";
import { H3 } from "./components/H3";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Paragraph } from "./components/Paragraph";
import { WeatherData } from "./components/WeatherData";

export default function Home() {
  return (
    <Card>
      <Header>
        <H3>Confira o clima de uma cidade:</H3>
        <Form>
          <Input type="text" placeholder="Digite o nome da cidade" />
          <Button />
        </Form>
      </Header>
      <WeatherData>
        <H2
          cityName="Brasília"
          imgSrc="https://flagsapi.com/BR/flat/64.png"
          igmAlt="Bandeira do país"
        />
        <Paragraph>25</Paragraph>
        <Description
          description="Nublado"
          imgSrc="http://openweathermap.org/img/wn/01d.png"
          imgAlt="Condições do tempo"
        />
        <Details humidity="48%" wind="3km/h" />
      </WeatherData>
    </Card>
  );
}
