import React from 'react' 
import {useLaunchInfoQuery} from '../../generated/graphql'
import LaunchDetails from './LaunchDetails'
import { Spinner } from 'react-bootstrap';

interface handleChnageProps {
    launch : number
}

const LaunchDetailsContainer = ({launch } : handleChnageProps) => {

    const {data , loading , error , refetch } = useLaunchInfoQuery({variables : {id:String(launch)}})

    React.useEffect(() => {
        refetch();
      }, [launch]);

      
    if(loading) {
        return <div>
            <Spinner animation="grow" />
        </div>
    }

    if(error) {
        return <div> Error ..</div>
    }

    return (
        <LaunchDetails data={data} />
    )
}

export default LaunchDetailsContainer;