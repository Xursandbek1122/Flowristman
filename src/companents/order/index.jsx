import React from "react";
import "./style.css";

import orderFlower from "../../image/Discount.png";

const Order = () => {
    return (
        <section className="order">
            <div className="container">
                <h2 className="order__title">Заказать уникальный букет</h2>
                <div className="order__content">
                    <form action="" className="order__content-form">
                        <input type="text" className="order__content-inp" placeholder="Ваше имя*" />
                        <input type="text" className="order__content-phone" placeholder="Ваш телефон*" />
                        <textarea name="" id="" className="order__content-text" placeholder="Ваша идея*"></textarea>
                        <div className="order__content-btns">
                            <button className="order__content-btn-file">+ Прикрепить файл</button>
                            <button className="order__content-btn">Отправить</button>
                        </div>
                    </form>
                    <img src={orderFlower} alt="orderFlower" className="order__content-img" />
                </div>
            </div>
        </section>
    )
}

export default Order