import React from "react";
import s from "./Header.module.css"
import logo from "../../img/logo.svg"
import background from "../../img/background.png"
import {useDispatch, useSelector} from "react-redux";
import {showBasket} from "../../reduxToolkit/toolkitSlice";

const Header = () => {
    const {basketCounter} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

    return (
        <div className={s.header}>
            <img className={s.background} src={background}/>

            <div className={s.container}>
                <img className={s.logo} src={logo}/>
                <h1 className={s.text}>YOUR</h1>
                <h1 className={s.backgrounded}>PERSONALIZED</h1>
                <h1 className={s.text}>COFFEE</h1>
            </div>

            <div className={s.nav}>
                <button className={s.basket} onClick={() => dispatch(showBasket())}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="none"/>
                        <path
                            d="M4.31755 4.66388H17.7273C17.7677 4.66388 17.8045 4.67932 17.8424 4.69091L18.172 3.58959C18.2768 3.23936 18.5945 3 18.9546 3H20.5909C20.8168 3 21 3.18625 21 3.41598V4.2479C21 4.47763 20.8168 4.66388 20.5909 4.66388H19.5606L17.0045 13.2046L17.9592 14.337C18.3365 14.7846 18.5064 15.4013 18.3327 15.9637C18.1106 16.683 17.4863 17.1429 16.7664 17.1429H5.04544C4.81951 17.1429 4.63634 16.9566 4.63634 16.7269V15.895C4.63634 15.6652 4.81951 15.479 5.04544 15.479H16.7665L15.4697 13.9406C15.4371 13.9019 15.4131 13.8583 15.3884 13.8151H7.46083C6.82675 13.8151 6.24974 13.4428 5.97974 12.8594L3.12503 6.69125C3.04315 6.51374 3 6.31673 3 6.12131V6.0035C3 5.26369 3.5899 4.66388 4.31755 4.66388Z"/>
                        <path
                            d="M16.1786 21.0001C15.291 21.0001 14.5714 20.2805 14.5714 19.3929C14.5714 18.5053 15.291 17.7858 16.1786 17.7858C17.0662 17.7858 17.7857 18.5053 17.7857 19.3929C17.7857 20.2805 17.0662 21.0001 16.1786 21.0001Z"/>
                        <path
                            d="M6.53574 21.0001C5.64814 21.0001 4.9286 20.2805 4.9286 19.3929C4.9286 18.5053 5.64814 17.7858 6.53574 17.7858C7.42334 17.7858 8.14288 18.5053 8.14288 19.3929C8.14288 20.2805 7.42334 21.0001 6.53574 21.0001Z"/>
                    </svg>
                    <p className={s.counter}>{basketCounter}</p>
                </button>
                <ul>
                    <li><p>TRANG CHỦ</p></li>
                    <li><a href='/Header#coffee'>COFFEE</a></li>
                    <li><a href='/Header#benefits'>PHIN MẠ MÀU</a></li>
                    <li><a href='/Header#combo'>COMBO PHIN PHÊ</a></li>
                    <li><a href='/Header#giftset'>GIFTSET</a></li>
                    <li><a href='/Header#contacts'>LIÊN HỆ</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header