import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, Menu } from 'semantic-ui-react'
const LanguageSelector = props => {
    const { i18n } = useTranslation();
    return (

        <Dropdown item text='Language'>
            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>i18n.changeLanguage("tr")} >Turkish</Dropdown.Item>
                <Dropdown.Item onClick={()=>i18n.changeLanguage("en")} >English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    );
};

export default LanguageSelector;