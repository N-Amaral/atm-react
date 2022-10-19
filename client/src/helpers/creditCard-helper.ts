export const CreditCards: Array<{
  id: number;
  cardName: string;
  cardNumber: string;
  cardPin: string;
  cardOperations: { deposits: string[]; withdrawls: string[]; transfers: string[]; payments: string[] };
}> = [
  {
    id: 0,
    cardName: "John Doe",
    cardNumber: "",
    cardPin: "1111",
    cardOperations: { deposits: [""], withdrawls: [""], transfers: [""], payments: [""] },
  },
  {
    id: 1,
    cardName: "Jane Doe",
    cardNumber: "",
    cardPin: "2222",
    cardOperations: { deposits: [""], withdrawls: [""], transfers: [""], payments: [""] },
  },
];
