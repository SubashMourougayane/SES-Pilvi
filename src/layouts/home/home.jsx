import React from 'react';
import './home.css'


import { Layout, Menu, Icon } from 'antd';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Templates from '../templates/template';
import awsAccount from '../AWSAccount/awsAccount';
import settingPage from '../SettingPage/settingPage';

const { Header, Sider, Content } = Layout;


class Home extends React.Component {
    state = {
        collapsed: false,
    };

    componentDidMount = () => {
        let url = window.location.href;
        let path = url.split('/')[4];
     
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    routeChange = (route) => {
        this.props.history.push(`/home/${route}`)
    }
    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        SES
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        
                        <Menu.Item key="1" onClick={()=> {this.routeChange("templates")}}>
                            <Icon type="snippets" />
                            <span>Templates</span>
                        </Menu.Item>
                        <Menu.Item key="2"  onClick={()=> {this.routeChange("aws")}}>
                            <Icon type="user" />
                            <span>AWS Account</span>
                        </Menu.Item>
                        <Menu.Item key="3"  onClick={()=> {this.routeChange("settings")}}>
                            <Icon type="setting" />
                            <span>Settings</span>
                        </Menu.Item>
                       
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: '100vh',
                        }}
                    >
                        <Switch>
                            <Route path="/home/templates" component={Templates}  />
                            <Route path="/home/aws" component={awsAccount} />
                            <Route path="/home/settings" component={settingPage} />
                            <Redirect from="/home" to="/home/templates"></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Home