import { Layout, ModuleDetail, QueryResult } from "../components";
import React from "react";
import { useQuery, gql } from "@apollo/client"

const GET_MODULE = gql`
    query ModulesTrack($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
        id
        title
        modules {
        id
        title
        length
        }
    }
    module(id: $moduleId) {
        id
        title
        length
        videoUrl
        content
    }
    }
`;

const Module = ({ trackId, moduleId }) => {
    const { loading, error, data } = useQuery(GET_MODULE, {
        variables: { trackId, moduleId }
    });

    return (
        <Layout fullWidth>
            <QueryResult error={error} loading={loading} data={data}>
                <ModuleDetail track={data?.track} module={data?.module}></ModuleDetail>
            </QueryResult>
        </Layout>);
}

export default Module;