export interface People{
    complete:IPerson[];
    tiny: Tiny[];
}

export interface IPerson {
    firstName:string;
    lastName:string;
    innovation:string;
    year:number;
}

export interface Tiny {
    name: string;
    invented: string;
    year: number;
}

