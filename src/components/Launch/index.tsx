import React from 'react' 
import {useLaunchesQuery} from '../../generated/graphql'
import Launch , {handleChnageProps} from './Launch'

const LaunchContainer = (props:handleChnageProps) => {
    const {data , loading , error } =  useLaunchesQuery()

    if(loading) {
        return <div> Loading ..</div>
    }

    if(error) {
        return <div> Some Error ..</div>
    }

    return (
        <Launch data={data} {...props} />

    )
}

export default LaunchContainer;