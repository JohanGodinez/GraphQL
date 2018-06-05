import React from "react"
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import {Layout, Menu, Icon} from 'antd'
import Home from '../components/home'
import Register from '../components/register'

const { Header, Content, Sider } = Layout

export default () => (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider>
            <div className="logo"/>
            <Router>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span><Link to="/" style={{textDecoration: 'none', color: '#fff'}}>Home</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span><Link to="/register" style={{textDecoration: 'none', color: '#fff'}}>Register</Link></span>
                    </Menu.Item>
                </Menu>
            </Router>
        </Sider>
        <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: 16 }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </Router>
            </div>
        </Content>
        </Layout>
    </Layout>
)