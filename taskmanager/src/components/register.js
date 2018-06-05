import React, {Component} from 'react'
import {Form, Input, Row, Col, Button, Icon} from 'antd'

const {Item} = Form

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
}

class Register extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Row>
                <Col>
                    <Form layout="horizontal">
                        <Item label="Name" {...formItemLayout}>
                            <Input />
                        </Item>
                        <Item label="Last Name" {...formItemLayout}>
                            <Input />
                        </Item>
                        <Item label="User" {...formItemLayout}>
                            <Input />
                        </Item>
                        <Item label="Password" {...formItemLayout}>
                            <Input />
                        </Item>
                        <Item label="Avatar" {...formItemLayout}>
                            <Button type="dashed" style={{ width: '100%' }}>
                                <Icon type="plus" /> Add field
                            </Button>
                        </Item>
                        <Item style={{textAlign: 'right'}} wrapperCol={{span: 22}}>
                            <Button type="primary" style={{marginRight: 10}}>
                                <Icon type="save" /> Save
                            </Button>
                            <Button>
                                <Icon type="close" /> Cancel
                            </Button>
                        </Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Register
