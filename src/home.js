import React from 'react';
import axios from  'axios'
import "./home.css"

import {Input,Checkbox, message, Button} from "antd"
import {
    HomeOutlined,
    CompassOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
} from '@ant-design/icons';

class Home extends React.Component {
    constructor(props) {
        super(props);


    }

    onChange=(value)=>{
        console.log(value)
    }

    handleEmail=(event)=>{
        const {value}=event.target;
        this.setState({
            email:value
        })
        console.log(value)

    }
    handlePwd=(event)=>{
        const {value}=event.target;
        this.setState({
            password:value
        })
        console.log(value)

    }

    submit=()=>{
        const {email,password}=this.state;


        axios.post('https://clare1.ngrok.io/api/v1/login', {
            email,
            password
        })
            .then(function (response) {
                console.log("11",response)
                if(response.data.ok){
                    console.log("11",response)



                    //https://clare1.ngrok.io/api/v1/welcome



                    axios.get(`https://clare1.ngrok.io/api/v1/welcome/thisistoken`)
                        .then(function (response) {
                            console.log("11",response)

                        })
                        .catch(function (error) {
                            console.log(error);
                        });


                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    render() {
        console.log(this.props,111)

        return (
            <div className={"container"}>
               <div className={"left_box"}>
                   <img src={"./images/wemeet image_20231026141058744.png"}/>
               </div>
                <div className={"right_box"}>
                    <div className={"login_text"}>Login</div>
                    <div className={"email_text"}>Email</div>
                    <div className={"email_input"}><Input onChange={this.handleEmail} addonBefore={<HomeOutlined />} placeholder={"Enter your email"}/></div>
                    <div className={"password_text"}>Password</div>
                    <div className={"pwd_input"}><Input onChange={this.handlePwd} addonBefore={<CompassOutlined />} placeholder={"Enter your password"}/></div>
                    <div className={"check_Container"}>
                        <div><Checkbox onChange={this.onChange}>Remember me</Checkbox></div>
                        <div>Forgot password?</div>

                    </div>
                    <div><Button onClick={this.submit} style={{width:"100%",height:"3rem",marginBottom:"1rem",backgroundColor:"darkgreen"}} type="primary">login</Button></div>
                    <div>DO not have an account? Register here</div>
                </div>
            </div>
        );
    }
};


export default Home
