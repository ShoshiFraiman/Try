interface Agent {
    id: string;
    amount: {
        currency: string;
        amount:number;
        formatted:string
        symbol: string
    }
    customer: {
        id: string,
        type: { value: string }
    }
    title: string;
}