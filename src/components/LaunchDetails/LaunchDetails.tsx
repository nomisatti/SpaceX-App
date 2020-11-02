import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import { ResponsiveEmbed, Carousel, Table } from 'react-bootstrap';
interface Props {
    data: LaunchInfoQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {

    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    if (!data.launch) {
        return <div>No Record Found for this Launch</div>
    }


    return (
        <div className="LaunchDetails">
            <h1>
                {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
            </h1>
            <hr />
            <div>{!!data.launch.links && !!data.launch.links.video_link && (
                <div>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="image/svg+xml" src={(data.launch.links.video_link).replace("watch?v=", "embed/")} />
                    </ResponsiveEmbed>
                </div>
            )} </div>
            <div>
                <hr />
                <h2> Launch Details</h2>
                <Table striped bordered hover>

                    <tbody>
                        <tr>
                            <td className="LaunchInfo_property">Mission Name</td>
                            <td>{data.launch.mission_name}</td>
                        </tr>
                        <tr>
                            <td className="LaunchInfo_property">Rocket Name</td>
                            <td>{data.launch.rocket?.rocket_name}</td>

                        </tr>
                        <tr>
                            <td className="LaunchInfo_property">Rocket Type</td>
                            <td>{data.launch.rocket?.rocket_type}</td>
                        </tr>
                        <tr>
                            <td className="LaunchInfo_property">Site Name</td>
                            <td>{data.launch.launch_site?.site_name}</td>
                        </tr><tr>

                            <td className="LaunchInfo_property">Launch Year</td>
                            <td>{data.launch.launch_year}</td>
                        </tr>
                        <tr>
                            <td className="LaunchInfo_property">Launch Success</td>
                            <td>{JSON.stringify(data.launch.launch_success)}</td>
                        </tr>
                        <tr>
                            <td className="LaunchInfo_property">Launch Article</td>

                            <td><a href={data.launch.links.article_link} target="_blank" rel="noreferrer" className='btn btn-primary'> Go To SpaceX Article</a></td>
                        </tr>
                        <tr>
                            <td className="LaunchInfo_property">Wikipedia Article</td>
                            <td><a href={data.launch.links.wikipedia} target="_blank" rel="noreferrer" className='btn btn-danger'> Go To Wikipedia Link</a></td>
                        </tr>
                        <tr>
                            <td className="LaunchInfo_property">Details</td>
                            <td>{data.launch.details}</td>
                        </tr>
                    </tbody>
                </Table>
                <hr />

                <h2> Launch Gallery </h2>
                {console.log("data.launch.links.flickr_images : " , data.launch.links.flickr_images)}
                {data.launch.links.flickr_images.length > 0 ? (
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {data.launch.links.flickr_images.map((image, i) => (
                            <Carousel.Item key={i}>
                                <img className="d-block w-100"
                                    src={image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>))}
                    </Carousel>
                ) : "No Images Found"
                }

            </div>

        </div>
    )

}



export default LaunchDetails