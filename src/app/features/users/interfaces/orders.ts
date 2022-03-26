export interface Orders {
    order: {
        Shoes?: {
            price: number;
            quantity: number;
            total: number;
        }
        Dresses?: {
            price: number;
            quantity: number;
            total: number;
        }
        Shirts?: {
            price: number;
            quantity: number;
            total: number;
        }
        Pants?: {
            price: number;
            quantity: number;
            total: number;
        }
    }
}


/*Will have to test this structure. I think it'd be better to use 2 interfaces*/



