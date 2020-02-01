import React from 'react'
import { Table, Divider, Tag, Button } from 'antd';
import './template.css'
class Templates extends React.Component {
  state = {
    array: [
      {
        Name: 'agency_admin',
        CreatedTimestamp: "2020-01-30T05:55:20.520Z"
      },
      {
        Name: 'agency_user',
        CreatedTimestamp: "2020-01-29T12:05:25.025Z"
      },
      {
        Name: 'client_req_admin',
        CreatedTimestamp: "2020-01-28T12:04:37.973Z"
      },
      {
        Name: 'client_req_client_confirmation',
        CreatedTimestamp: "2020-01-28T12:02:33.096Z"
      },
      {
        Name: 'contact_admin',
        CreatedTimestamp: "2020-01-28T12:32:10.645Z"
      },
      {
        Name: 'contact_confirmation_user',
        CreatedTimestamp: "2020-01-28T12:30:54.527Z"
      },
      {
        Name: 'talent_req_admin',
        CreatedTimestamp: "2020-01-28T10:59:06.711Z"
      },
      {
        Name: 'talent_req_talent_confirmation',
        CreatedTimestamp: "2020-01-28T11:02:55.841Z"
      },
      {
        Name: 'talent_req_admin',
        CreatedTimestamp: "2020-01-28T10:59:06.711Z"
      },
      {
        Name: 'talent_req_talent_confirmation',
        CreatedTimestamp: "2020-01-28T11:02:55.841Z"
      },
      {
        Name: 'talent_req_admin',
        CreatedTimestamp: "2020-01-28T10:59:06.711Z"
      },
      {
        Name: 'talent_req_talent_confirmation',
        CreatedTimestamp: "2020-01-28T11:02:55.841Z"
      },
      {
        Name: 'talent_req_admin',
        CreatedTimestamp: "2020-01-28T10:59:06.711Z"
      },
      {
        Name: 'talent_req_talent_confirmation',
        CreatedTimestamp: "2020-01-28T11:02:55.841Z"
      },
      {
        Name: 'talent_req_admin',
        CreatedTimestamp: "2020-01-28T10:59:06.711Z"
      },
      {
        Name: 'talent_req_talent_confirmation',
        CreatedTimestamp: "2020-01-28T11:02:55.841Z"
      },
      {
        Name: 'talent_req_admin',
        CreatedTimestamp: "2020-01-28T10:59:06.711Z"
      },
      {
        Name: 'talent_req_talent_confirmation',
        CreatedTimestamp: "2020-01-28T11:02:55.841Z"
      },
      {
        Name: 'talent_req_admin',
        CreatedTimestamp: "2020-01-28T10:59:06.711Z"
      },
      {
        Name: 'talent_req_talent_confirmation',
        CreatedTimestamp: "2020-01-28T11:02:55.841Z"
      },
      {
        Name: 'talent_req_admin',
        CreatedTimestamp: "2020-01-28T10:59:06.711Z"
      },
      {
        Name: 'talent_req_talent_confirmation',
        CreatedTimestamp: "2020-01-28T11:02:55.841Z"
      }
    ],

    columns: [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Created At',
        dataIndex: 'CreatedTimestamp',
        key: 'CreatedTimestamp',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Edit {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ]
  }
  render() {

    return (
      <div>
        <div className="button-left">
          <Button key="submit" type="primary" onClick={this.handleOk}>
            Create Template
          </Button>
        </div>
        <Table columns={this.state.columns} dataSource={this.state.array} />
      </div>
    )
  }

}

export default Templates
