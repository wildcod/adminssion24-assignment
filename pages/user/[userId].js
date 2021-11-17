import React from 'react';
import UserPage from "../../components/pages/user-page/UserPage";
import FetchAPI from '../../utils/fetcher'

const User = (props) => {
    return <UserPage {...props.result} />
};

User.getInitialProps = async (ctx) => {
    const { query: { userId } } = ctx
    try{
        if(userId){
            const { ok, data } = await FetchAPI.get(`/users/${userId}`)
            console.log('data', data)
            return {
                result: data?.data || {}
            }
        }else {
            return {
                result: {}
            }
        }
    }catch(err){
      console.error(err)
    }
}

export default User;
