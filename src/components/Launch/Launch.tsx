import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import { ListGroup } from 'react-bootstrap';

export interface handleChnageProps {
    handleIdChange: (newId: number) => void
}

interface Props extends handleChnageProps {
    data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data, handleIdChange }) => {
  
const [activeClass , setActiveClass] = React.useState(0)

const handleClick = (launchObj , id) => {
    setActiveClass(id)
    handleIdChange(launchObj.flight_number)
}
    return (

        <div className="bg-light border-right vh-100" id="sidebar-wrapper">
            <div className="sidebar-heading">SpaceX Launches </div>
            <div className="list-group list-group-flush overflow-auto h-100">
                <ListGroup as="ul">
                        {data.launches?.map((launchObj, i) => {
                            return (
                                <ListGroup.Item key={i} onClick={() => handleClick(launchObj ,i)} className={activeClass === i ? 'active' : ''}   as="li">
                                 {launchObj?.mission_name} 
                                </ListGroup.Item> 
                            )
                        })}
                </ListGroup>
                <h3>Space X Launces</h3>

            </div>
        </div>
    )
}



export default Launch