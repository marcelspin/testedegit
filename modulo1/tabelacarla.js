// gerarClientesDOC.js
// Script Node.js para organizar clientes por bairro e gerar DOCX

const fs = require("fs");
const { Document, Packer, Paragraph, TextRun } = require("docx");

// Função para mapear logradouro → bairro
function identificarBairro(endereco) {
  endereco = endereco.toLowerCase();

  if (endereco.includes("ipanema")) return "Ipanema";
  if (endereco.includes("cavalhada")) return "Cavalhada";
  if (endereco.includes("otto niemeyer")) return "Tristeza";
  if (endereco.includes("baldoino bottini")) return "Ipanema";
  if (endereco.includes("nova ipanema")) return "Ipanema";
  if (endereco.includes("cap pedroso")) return "Restinga";
  if (endereco.includes("tramandaí")) return "Cristal";
  if (endereco.includes("juca batista")) return "Belém Novo";
  if (endereco.includes("lami")) return "Lami";
  if (endereco.includes("serraria")) return "Serraria";
  if (endereco.includes("mário sobroza")) return "Cristal";
  if (endereco.includes("lima e silva")) return "Centro Histórico";
  if (endereco.includes("getúlio vargas")) return "Cristal";
  if (endereco.includes("edgar pires de castro")) return "Cristal";

  return "Bairro não identificado";
}

// Aqui você insere TODOS os clientes do documento
// Exemplo inicial (adicione todos os registros do PDF)
const clientes = [
  {
    codigo: 2989,
    cliente: "Laura Libera Sotilli Roth",
    endereco: "Rua Baldoino Bottini, 191, Loteamento N Ipanema",
    cnpj: "02.250.069/0001-07",
  },
  {
    codigo: 29537,
    cliente: "Mercado Três Irmãos Ltda",
    endereco: "Rua Nova Ipanema, 140",
    cnpj: "41.715.973/0001-94",
  },
  {
    codigo: 8452,
    cliente: "Alexandre Tadeu Pessi e Cia Ltda",
    endereco: "Rua Cap. Pedroso, 5, Flor da Restinga",
    cnpj: "10.571.828/0001-53",
  },
  {
    codigo: 31958,
    cliente: "Mega Pizzas e Lanches Ltda",
    endereco: "Av. Cavalhada, 3670",
    cnpj: "42.464.193/0001-81",
  },
  {
    codigo: 34486,
    cliente: "Zenilda França Rotilli",
    endereco: "Rua Mário Sobroza, 210, Vila Monte Cristo",
    cnpj: "39.511.418/0001-07",
  },
  // ... continue adicionando todos os clientes do documento
];

// Adiciona campo bairro e ordena
clientes.forEach(c => c.bairro = identificarBairro(c.endereco));
clientes.sort((a, b) => a.bairro.localeCompare(b.bairro));

// Cria documento Word
const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          children: [new TextRun({ text: "Tabela de Clientes por Bairro", bold: true, size: 28 })],
          alignment: "center",
        }),
        ...clientes.map(c =>
          new Paragraph({
            children: [
              new TextRun({
                text: `Bairro: ${c.bairro} | Código: ${c.codigo} | Cliente: ${c.cliente} | Endereço: ${c.endereco} | CNPJ: ${c.cnpj}`,
                size: 24,
              }),
            ],
          })
        ),
      ],
    },
  ],
});

// Exporta para .docx
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("clientes.docx", buffer);
  console.log("Arquivo clientes.docx gerado com sucesso!");
});
