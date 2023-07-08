import React from "react";
import './../../styles/components/button.scss';
import { useTranslation } from "react-i18next";

// This is a custom button component
const MyButton = ({type, title, onClick}) => {
    const { t } = useTranslation();
    
    return (
        <button className={`btn ${type}`} onClick={onClick}>{t(title)}</button>
    )
}

export default MyButton