import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

import { appServer } from "./config";

function PageView() {
    const { title } = useParams();

    const [content, setContent] = useState('');
    const [isNewPage, setIsNewPage] = useState(false);

    useEffect(() => {
        console.log(`${appServer}/view/${title}`)

        axios.get(`${appServer}/view/${title}`)
            .then(response => setContent(response.data.body))
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 404) {
                        setIsNewPage(true);
                    }
                    else {
                        console.error('status code: ', error.response.status);
                    }
                } else if (error.request) {
                    console.error('no reponse available: ', error.request);
                } else {
                    console.error('error in setting up the request: ', error.message);
                }
            });
    }, [title]);

    if (isNewPage) {
        return <Navigate to={`/edit/${title}`}/>;
    }

    return (
        <div>
            <h1>{title}</h1>
            <div>{content}</div>
        </div>
    );
}

export default PageView;