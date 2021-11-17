import React from 'react';
import styles from './UserPage.module.scss'

const UserPage = ({ name, email, gender, status }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.infoField}>
                    <div>Name</div>
                    <div>{name}</div>
                </div>
                <div className={styles.infoField}>
                    <div>Email</div>
                    <div>{email}</div>
                </div>
                <div className={styles.infoField}>
                    <div>Gender</div>
                    <div>{gender}</div>
                </div>
                <div className={styles.infoField}>
                    <div>Status</div>
                    <div>{status}</div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
