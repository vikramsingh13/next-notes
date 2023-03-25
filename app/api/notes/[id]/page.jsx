const getNote = async (id) => {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${id}`,
        {
            next: { revalidate: 100 },
        }
    );

    const data = await res.json();
    return data;
};

const page = async ({ params }) => {
    const note = await getNote(params.id);
    return (
        <div>
            <div>notes/{note.id}</div>
            <p>{note.title}</p>
            <p>{note.content}</p>
            <p>{note.created}</p>
        </div>
    );
};

export default page;
