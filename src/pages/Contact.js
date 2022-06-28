import React from "react";
import "../style/Contact.css";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_wrapper">
        <h1>Адрес</h1>
        <div className="contact_back contact_adres">
          <div className="adres">
            <h3>Наш адрес:</h3>
            <b>Сергели-2, дом №1</b>
          </div>
          <div className="orientor">
            <h3>Ориентир:</h3>
            <b>Сергели Корзинка, Oqtepa Lavash</b>
          </div>
          <a
            href="https://taxi.yandex.uz/ru_uz/"
            target="_blank "
            className="taxi"
          >
            Вызвать такси
          </a>
        </div>
        <h1>Контактные номера</h1>
        <div className="contact_back contact_phone">
          <div className="phone">
            <h3>Бахадир</h3>
            <b>+99897 475-28-28</b>
          </div>
          <div className="phone">
            <h3>Ибрагим</h3>
            <b>+99897 333-44-32</b>
          </div>
          <div>
            <h3>Работаем </h3>
            <b>Без выходных</b>
          </div>
        </div>
        <h1>Социальные Мессенджеры</h1>
        <div className="contact_back contact_sotsional">
          <a href="https://t.me/ideal_dizayn" className="icon" target="_blank">
            <FaTelegram />
          </a>

          <a
            href="https://www.instagram.com/invites/contact/?i=1jtgr63uedyzk&utm_content=1wx6r6y"
            className="icon"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            className="icon"
            href="https://www.youtube.com/channel/UC7VOPH9OjlXhO6v5Xmrupdg"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
