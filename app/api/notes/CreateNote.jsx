'use client';

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();


    const create = async(e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8090/api/collections/notes/records',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content
            }),
        });

        setTitle('');
        setContent('');

        router.refresh();
    };
    

    return (
        <form onSubmit={create}>
            <div>
                <label>Title: </label>{" "}
                <input
                    type="text"
                    placeholder="Title"
                    title="Required"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Title: </label>{" "}
                <textarea
                    placeholder="Optional description"
                    title="Optional description"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div>
                <button type='submit'>Add Note</button>
            </div>
        </form>
    );
};

export default CreateNote;
