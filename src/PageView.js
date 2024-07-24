import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { appServer } from "./config";

function PageView() {
    const { title } = useParams();

    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get(`${appServer}/view/${title}`)
            .then(response => setContent(response.data))
            .catch(error => console.error(error));
    }, [title]);

    return (
        <div>
            <h1>{title}</h1>
            <div>{content}</div>
        </div>
    );
}

export default PageView;