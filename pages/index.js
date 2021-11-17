import Layout from "../components/common/layout/Layout";
import HomePage from "../components/pages/home-page/HomePage";
import FetchAPI from '../utils/fetcher'

export default function Home(props) {
  return (
      <Layout>
          <HomePage {...props}/>
      </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
    try{
        const { data } = await FetchAPI.get('/users')
        return {
            users : data?.data || []
        }
    }catch(err){
        console.error(err)
    }
}


