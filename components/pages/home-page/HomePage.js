import React, {useMemo} from 'react';
import styles from './HomePage.module.scss'
import User from "./user/User";
import FetchAPI from '../../../utils/fetcher'
import { useRouter } from 'next/router';

const HomePage = ({ users }) => {
    const router = useRouter()
    const data = useMemo(() => {
        return users && users.length ? users.map(user => ({
            id: user.id,
            name: user.name,
        })) : []
    }, [users])

    const deleteUserHandler = async (id) => {
        try{
            await FetchAPI.delete(`/users/${id}`, {
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`
                }
            })
            router.reload()
        }catch(err){
            console.error(err)
        }
    }

    const routeToUser = (id) => {
        router.push(`/user/${id}`)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.gridContainer}>
                {
                    data.map(user => (
                        <User
                            key={user.id}
                            {...user}
                            routeToUser={routeToUser}
                            deleteUserHandler={deleteUserHandler}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default HomePage;
