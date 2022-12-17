import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
{/*ovo nije pravi onClick nego po zelji napravljen event, tek ce u headercartbutton biti pravi built in onClick*/}
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="mealsImage"/>
        </div>
    </React.Fragment>
};

export default Header;
