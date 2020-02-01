import React from 'react'
import { Row, Col, Modal, Button, Loading, Input } from 'antd';
import './awsAccount.css';
class awsAccount extends React.Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
            loading: false,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {

        return (

            <div>
                <Row>
                    <Col className="aws-column-1" xs={{ span: 2, offset: 1 }} lg={{ span: 6, offset: 2 }} onClick={this.showModal}>

                        <div className="aws-col-center-icon">
                            <img className="aws-col-img" src="https://image.flaticon.com/icons/svg/1237/1237946.svg" alt="" srcset="" />
                        </div>

                    </Col>
                    {/* DYNAMIC LOAD CARDS */}
                    <Col className="aws-column" xs={{ span: 2, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                        Col
                    </Col>
                    <Col className="aws-column" xs={{ span: 2, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                        Col
                    </Col>

                </Row>










                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    <div className="modalInput">
                        <Input placeholder="Name" />
                    </div>

                    <div className="modalInput">
                        <Input placeholder="Access Key" />
                    </div>

                    <div className="modalInput">
                        <Input placeholder="Secret Key" />
                    </div>

                </Modal>

            </div>
        )
    }
}

export default awsAccount;