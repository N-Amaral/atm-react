export const operationList: {
  PT: {
    levantamentos: { opTitles: string[]; opValues: number[]; opRoutes: string[] };
    consultas: string[];
    transferencias: {};
    pagamentos: {};
    depositos: {};
    sair: {};
  };
} = {
  PT: {
    levantamentos: {
      opTitles: ["20 euros", "40 euros", "60 euros", "100 euros", "200 euros", "Outras importâncias", "Outras Operações"],
      opValues: [20, 40, 60, 100, 200],
      opRoutes: ["/confirm", "/depositos", "/menu"],
    },
    consultas: ["Consultas de Saldo", "Consulta de Movimentos de Conta", "Consulta de NIB e IBAN"],
    transferencias: {},
    pagamentos: {},
    depositos: {},
    sair: {},
  },
};
