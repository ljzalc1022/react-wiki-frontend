import { useEffect, useState } from "react";
import axios from "axios";

function PageView({ match }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get(`/view/${match.params.title}`)
            .then(response => setContent(response.data))
            .catch(error => console.error(error));
    }, [match.params.title]);

    return (
        <div>
            <h1>{match.params.title}</h1>
            <div>{content}</div>
        </div>
    );
}

export default PageView;