import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'

class SignedOut extends React.Component{

    render(){
        const {t}=this.props;
       return (
        <div>
            <Menu.Item>
                <Button as={NavLink} to="/login" >{t("Login")}</Button>
                <Button as={NavLink} to="/register" positive style={{ marginLeft:"0.5em" }}>{t("Register")}</Button>
            </Menu.Item>
            
        </div>
    ) 
    }
    
}
const SignedOutWithTranslation=withTranslation()(SignedOut);
export default SignedOutWithTranslation;