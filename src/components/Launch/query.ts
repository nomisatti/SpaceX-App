import gql from 'graphql-tag';

export const QUERY_LAUNCH = gql`
        query launches {
            launches {
            flight_number
            launch_year
            mission_name
            launch_success
            upcoming
            is_tentative
            }
        }
`;