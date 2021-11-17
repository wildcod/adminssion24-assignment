import React from 'react';
import styles from './User.module.scss'
import {Button, Card, Modal} from 'antd';

const User = ({ name, id, deleteUserHandler, routeToUser }) => {

    const Warning = () => {
        Modal.warning({
            title: 'Delete User',
            content: 'Are you sure?',
            maskClosable: true,
            okText: "Yes, I'm",
            async onOk () {
                deleteUserHandler(id)
            }
        });
    }

    return (
        <Card className={styles.wrapper}>
            <h2 onClick={() => {
                routeToUser(id)
            }}>{name}</h2>
            <Button onClick={Warning}>Delete</Button>
        </Card>
    );
};

export default User;
