"use client";

import { useEffect, useState } from "react";

interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  description: string;
  icon: string;
}

export default function WeatherCard() {

  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {

    async function fetchWeather() {

      try {

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Gdansk&units=metric&lang=pl&appid=fb023cb0769da9f7761ae1d46f8cdff2`
        );

        const data = await response.json();

        console.log(data);

        if (!data.main || !data.weather) {
          return;
        }

        setWeather({
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          wind: Math.round(data.wind.speed),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });

      } catch (error) {
        console.error(error);
      }

    }

    fetchWeather();

    const interval = setInterval(fetchWeather, 600000);

    return () => clearInterval(interval);

  }, []);

  if (!weather) {

    return (

      <section className="relative z-10 mx-auto max-w-5xl px-5 pb-32">

        <div className="mt-[-120px] rounded-[32px] border border-white/10 bg-white/10 p-8 text-white backdrop-blur-xl">

          Ładowanie pogody...

        </div>

      </section>

    );

  }

  return (

    <section className="relative z-10 mx-auto max-w-5xl px-5 pb-32">

      <div className="mt-[-120px] overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* LEFT */}
          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Pogoda w Gdańsku
            </p>

            <h2 className="mt-3 text-5xl font-black text-white">
              {weather.temp}°C
            </h2>

            <p className="mt-3 text-lg capitalize text-neutral-300">
              {weather.description}
            </p>

          </div>

          {/* CENTER */}
          <div className="flex gap-6">

            <div className="rounded-3xl bg-black/30 px-6 py-5 text-white">

              <p className="text-sm text-neutral-400">
                Wiatr
              </p>

              <p className="mt-2 text-2xl font-bold">
                {weather.wind} km/h
              </p>

            </div>

            <div className="rounded-3xl bg-black/30 px-6 py-5 text-white">

              <p className="text-sm text-neutral-400">
                Wilgotność
              </p>

              <p className="mt-2 text-2xl font-bold">
                {weather.humidity}%
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
              className="h-24 w-24"
            />

          </div>

        </div>

      </div>

    </section>

  );

}