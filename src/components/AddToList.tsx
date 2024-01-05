import React, { useState } from "react";

interface IState {
    people: {
        name: string;
        img: string;
        age: number;
        note?: string;
    }[],
    person: {
        name: string;
        img: string;
        age: number;
        note?: string;
    }
};

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>;
    people: IState["people"];
};

const AddToList: React.FC<IProps> = ({ setPeople, people }): JSX.Element => {
    const [person, setPerson] = useState<IState["person"]>({
        name: "",
        img: "",
        age: 0,
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        setPeople([
            ...people,
            person
        ]);

        // Clear form's inputs
        setPerson({
            name: "",
            img: "",
            age: 0,
            note: ""
        });
    }

    return (<div className="AddToList">
        <input
            type="text"
            placeholder="Name"
            className="AddToList-input"
            name="name"
            value={person.name}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Age"
            className="AddToList-input"
            name="age"
            value={person.age}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Image URL"
            className="AddToList-input"
            name="img"
            value={person.img}
            onChange={handleChange}
        />
        <textarea
            placeholder="Note"
            className="AddToList-input"
            name="note"
            value={person.note}
            onChange={handleChange}
        />
        <button
            className="AddToList-btn"
            onClick={handleClick}
        >
            Add To List
        </button>
    </div>)
}

export default AddToList;