"use client";

import HeroSection from "@/components/Hero/HeroSection";
import { githubApiUrl } from "@/config/api";
import Image from "next/image";
import { useState } from "react";

export default function Github() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const formHandler = async (event) => {
    event.preventDefault();

    const userResponse = await fetch(`${githubApiUrl}${inputValue}`);

    if (!userResponse.ok) {
      if (userResponse.status === 404) {
        setError("Пользователь не найден.");
      } else {
        setError("Произошла ошибка при получении данных пользователя.");
      }

      return;
    }

    const userData = await userResponse.json();

    setUser(userData);

    console.log("___formHandler", userData);
  };

  const inputHandler = (event) => {
    error && setError("");
    setInputValue(event.target.value);
  };

  return (
    <div className="recipes">
      <div class="container mb-4">
        <h1>Информация о GitHub Пользователе</h1>

        <div>Maris-Pidiks, erika2knd, annareksta, shmel3k</div>

        <form id="userForm" onSubmit={formHandler}>
          <input
            type="text"
            id="username"
            value={inputValue}
            placeholder="Введите имя пользователя GitHub"
            onChange={inputHandler}
          />
          <button type="submit">Получить</button>
        </form>

        {error && <div className="result">{error}</div>}

        {user && (
          <div className="mt-6">
            <h2>{user.login}</h2>
            <Image
              src={user.avatar_url}
              alt={user.login}
              width="100"
              height="100"
              style={{ borderRadius: "50%" }}
            />
            <p>
              <strong>Количество репозиториев:</strong> {user.public_repos}
            </p>
            <p>
              <strong>Количество подписчиков:</strong> {user.followers}
            </p>
            <p>
              <strong>Количество подписок:</strong> {user.following}
            </p>
            <p>
              <a href={user.html_url} target="_blank">
                Посмотреть профиль на GitHub
              </a>
            </p>
            <h3>Репозитории:</h3>
            <div id="repos"></div>
          </div>
        )}
      </div>

      <HeroSection
        title="Github Title"
        description="Build fast, responsive websites with Next.js and Tailwind CSS"
        imgSrc="/benefit-one.webp"
      />
    </div>
  );
}
