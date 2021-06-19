import React from 'react';
import LanguageSelector from '../Components/Translator/LanguageSelector';
import {withTranslation} from "react-i18next";

class SignUpPage extends React.Component {

    

    render() {
        const {i18n}= this.props;
        const {t}=this.props;
        return (
            <div className="signup-form">
                <h1 className="text-center">{t('Sign Up')}</h1>
                <p style={{color:"#818"}} class="hint-text">{t("Create your account. It's free and only takes a minute.")}</p>
                <div className="form-group">
                </div>
                <LanguageSelector></LanguageSelector>
            </div>
        );
    }
}


const UserSignupPageWithTranslation=withTranslation()(SignUpPage);

export default UserSignupPageWithTranslation;