export interface Donuts{
    count: number;
    results: IDonut[];
}

export interface IDonut {
    id: number;
    ref: string;
    name: string;
}

export interface Donut{
    id: number;
    name: string;
    calories: number;
    photo: string;
    
}

export const DONUTS: Donut[] = [
    { id: 1, name: 'Glazed', calories:260, photo:"https://grandcircusco.github.io/demo-apis/donuts/images/d1.jpg" },
    { id: 2, name: 'Chocolate Glazed', calories:360, photo:null },
    { id: 3, name: 'Boston Cream', calories:300, photo:"https://grandcircusco.github.io/demo-apis/donuts/images/d3.jpg" },
    { id: 4, name: 'Coconut Caramel Drizzle', calories:300, photo:null },
    { id: 5, name: 'Cream Cheese Filled', calories:320, photo:null },
    { id: 6, name: 'Cake', calories:340, photo:"https://grandcircusco.github.io/demo-apis/donuts/images/d6.jpg" },
    { id: 7, name: 'Cider Mill Plain', calories:240,photo:null },
    { id: 8, name: 'Cider Mill Cinnamin Sugar', calories:222, photo:"https://grandcircusco.github.io/demo-apis/donuts/images/d8.jpg" }
  ];
