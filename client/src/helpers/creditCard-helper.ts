export const CreditCards: Array<{
  cardName: string;
  cardNumber: string;
  cardPin: string;
  cardOperations: { deposits: string[]; withdrawls: string[]; transfers: string[]; payments: string[] };
}> = [
  {
    cardName: "John Doe",
    cardNumber: "002200003809980467200",
    cardPin: "1111",
    cardOperations: { deposits: [""], withdrawls: [""], transfers: [""], payments: [""] },
  },
  {
    cardName: "Jane Doe",
    cardNumber: "003500007850579556400",
    cardPin: "2222",
    cardOperations: { deposits: [""], withdrawls: [""], transfers: [""], payments: [""] },
  },
];
