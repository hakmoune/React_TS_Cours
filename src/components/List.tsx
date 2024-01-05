import React from "react";
import '../App.css';

interface IProps {
    people: {
        name: string;
        img: string;
        age: number;
        note?: string;
    }[]
};

const List: React.FC<IProps> = ({ people }): JSX.Element => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return <li className="List" key={person.age}>
                <div className="List-header">
                    <img className="List-img" src={person.img} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
        })
    }

    return (
        <div>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

export default List;