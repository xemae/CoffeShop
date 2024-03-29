import React from "react";
import s from "../Combo.module.css"
import b from "../../styles/Buttons.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, showInfo} from "../../../reduxToolkit/toolkitSlice";

const ComboCards = () => {
    const cards = useSelector(state => state.toolkit.cards.filter(i => i.type === 'combo'))
    const dispatch = useDispatch()

    const Cards = cards.map(c =>
        <div key={c.id} className={s.comboCard}>
            <img src={c.image}/>
            <div className={s.cardContent}>
                <div className={s.cardTitle}>
                    <div className={s.cost}>
                        <h2>{c.price + '.00'}</h2>
                        <s>{c.lastPrice + '.00'}</s>
                    </div>
                    <h1>{c.title}</h1>
                </div>
                <div className={s.cardDescription}>
                    <p>{c.description}</p>
                </div>
            </div>
            <div className={s.buttons}>
                <button className={b.buy} onClick={() => dispatch(addToBasket(c))}>MUA NGAY</button>
                <button className={b.info} onClick={() => dispatch(showInfo(c))}>CHI TIẾT</button>
            </div>
        </div>
    )

    return (
        Cards
    )
}

export default ComboCards