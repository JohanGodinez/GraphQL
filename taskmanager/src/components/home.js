import React from 'react'
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import {Table, Button, Form} from 'antd'

const {Item} =  Form

const query = gql`{
    allUsers {
        _id
        name
        lastName
        userName
        password
        avatar
    }
}`

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  }, {
    title: 'User',
    dataIndex: 'userName',
    key: 'userName',
  }, {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  }, {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
}]

export default graphql(query)(
	({data: {allUsers=[], loading}}) => 
		<div>
			<Item>
				<Button type="primary">New</Button>
			</Item>
			<Table rowKey="_id" bordered dataSource={allUsers} columns={columns}/>
		</div>
)	