import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { appServer } from "./config";

function PageEdit({ history }) {
    const { title } = useParams();

    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${appServer}/view/${title}`)
            .then(response => {
                setContent(response.data.body);
                setLoading(false);
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    // edit a new page
                    setContent('');
                    setLoading(false);
                }
                console.error(error)
            })
    }, [title]);

    const handleSave = () => {
        axios.post(`${appServer}/save/${title}`, {body: content})
            .then(() => history.push(`/view/${title}`))
            .catch(error => console.error(error));
    };

    if (loading) {
        return (
            <div>
                <h1>Edit [{title}]</h1>
                <textarea
                    placeholder="loading..."
                    readOnly
                    rows="20"
                    cols="80"
                />
                <button>Save</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Edit [{title}]</h1>
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                rows="20"
                cols="80"
            />
            <button onClick={handleSave}>Save</button>
        </div>
    )
}

export default PageEdit;