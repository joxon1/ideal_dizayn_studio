import React, { useEffect, useState } from "react";
import AboutSlider from "../data/AboutSlider";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

import "../style/About.css";

const About = () => {
  const [people, setPeople] = useState(AboutSlider);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <div className="about_container">
      <div className="about_wrapper">
        <div className="about_text_container">
          <h1>О компание</h1>
          <p>
            OOO "IDEAL DIZAYN STUDIO" - профессиональная <b>фотостудия.</b> У
            нас вы найдете всё для проведения фото услуг, создания красивого
            контента и реализации любой творческой задачи!{" "}
          </p>

          <p>
            Миссия нашей фотостудии – сделать профессиональную фотографию
            доступной, гарантируя индивидуальный подход, качественный сервис и
            разнообразие услуг. Наше стремление – яркие и незабываемые эмоции
            наших клиентов! А главное достижение для всей команды IDEAL DIZAYN –
            это Клиенты, довольные нашей работой. У нас вы сможете в полной мере
            насладится творческим процессом фотомонтажа, а забота и комфорт с
            которой мы относимся к каждому клиенту заставят Вас вернуться к нам
            еще не раз!
          </p>
          <p>
            Наша история началась более 7 лет назад, когда два братя Бахадир и
            Жахангир Рахимжоновы начали воплощать свою давнюю мечту, стать
            лучшими в сфере фотодизайна. Так, в 2015 году появился первый филиал
            IDEAL DIZAYN. Спустя через год открыли ещё один филиал. Но этот
            филиал работала год. На сегодняшний день открыт только один в районе
            Серегели.
          </p>
          <p>
            Жить в <b>IDEAL</b>! Создавать прекрасное. Вдохновлять. Все это и
            многое другое мы — фотостудия IDEAL DIZAYN. В нашем портфолио
            большой опыт работы крупнейшими компаниями СМИ, а также
            сотрудничество с известными мировыми брендами как <b> VIP Brand</b>,{" "}
            <b>NEXT</b>, <b>RICHMAN</b>, <b>Sariq Bola</b>,<b>Oqtepa Lavash</b>,{" "}
            <b>EVOS</b> и другие. Мы проводим рекламные услуги , смело беремся
            за сложные задачи и создаем невероятные проекты.
          </p>
          <p>
            Вы привыкли работать только с профессионалами, выбирать лучшее и не
            боитесь смелых импровизаций? Тогда мы нашли друг друга. Мы не ищем
            примитивных путей. Мы привыкли впечатлять наших клиентов. Мы
            уверены, что сможем впечатлить и Вас!
          </p>
          <p>
            Наша главная задача – быть самым уютным и красивым местом, где
            хочется осуществить свои мечты.
          </p>
          <p>
            Мы верим в доброту, красоту, профессионализм и любовь к своему делу!
          </p>
        </div>

        <div className="about_comments">
          <h1>Отзивы</h1>
          <div className="section-center">
            {people.map((person, personIndex) => {
              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article className={position} key={person.id}>
                  <img
                    className="person-img"
                    src={person.image}
                    alt={person.title}
                  />
                  <h4>{person.name}</h4>
                  <p className="title">{person.title}</p>
                  <p className="text">{person.quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
