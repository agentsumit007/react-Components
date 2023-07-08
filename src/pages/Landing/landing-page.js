import React from "react";
import MyButton from "../../components/Button/my-button";
import { Link } from "react-router-dom";
import './../../styles/pages/landing-page.scss';
import { useTranslation } from "react-i18next";

const LandingPage = () => {

    const { t, i18n } = useTranslation();
    const handleSwitchLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div className="landing-page-layout">
            <Link to={'/home'}>
                <MyButton type={'primary'} title={'Go to Home'}/>
            </Link>

            <MyButton type={'primary'} title={'Switch to English Language'} onClick={() => handleSwitchLanguage('en')}/>
            <MyButton type={'primary'} title={'Switch to Arabic Language'} onClick={() => handleSwitchLanguage('ar')}/>
        </div>
    )
}
export default LandingPage