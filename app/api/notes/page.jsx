import Link from "next/link";
import CreateNote from "./CreateNote";

const getNotes = async() => {
    const res = await fetch(
        "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
        {cache: 'no-store'}
    );
    const data = await res.json();
    return data.items;
}

export const NotesPage = async () => {
    const notes = await getNotes();
    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes && notes.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>
            <CreateNote />
        </div>
    );
};

const Note = ({ note }) => {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/api/notes/${id}`}>
            <div>
                <p>{title}</p>
                <p>{content}</p>
                <p>{created}</p>
            </div>
        </Link>
    );
};

export default NotesPage;
