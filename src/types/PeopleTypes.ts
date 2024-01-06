// types.ts
type TDispatchPeopleAction = React.Dispatch<React.SetStateAction<IPeople["people"]>>;

export interface IPerson {
    name: string;
    img: string;
    age: number;
    note?: string;
}

export interface IPeople {
    people: IPerson[];
};

export interface IPropsAddToList extends IPeople {
    setPeople: TDispatchPeopleAction;
};

