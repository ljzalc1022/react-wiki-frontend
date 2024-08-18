import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { appServer } from "./config";

function PageView() {
    const { title } = useParams();

    const [content, setContent] = useState('');

    useEffect(() => {
        console.log(`${appServer}/view/${title}`)

        axios.get(`${appServer}/view/${title}`)
            .then(response => setContent(response.data.body))
            .catch(error => {
                if (error.response) {
                    if (error.response.status == 404) {
                        // TODO redirect to /edit/${title}
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

    return (
        <div>
            <h1>{title}</h1>
            <div>{content}</div>
        </div>
    );
}

export default PageView;