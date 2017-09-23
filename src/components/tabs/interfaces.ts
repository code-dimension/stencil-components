export interface IStcTabData {
    select: () => void;
    unselect: () => void;
    column: string;
}

export interface IStcTabHeaderData extends IStcTabData {
    id: string;
}

export interface IStcTabContentData extends IStcTabData { }