import Select from "react-select";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

export const SelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} searchable />
);

export const ToggleAdapter = ({
    input: { onChange, value },
    label,
    ...rest
}) => (
    <Switch
        label={label}
        value={!!value}
        onChange={(e, isInputChecked) => onChange(isInputChecked)}
        {...rest}
    />
);

export const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <TextField {...input} {...rest} />
);

export const mustBeNumber = (value) =>
    isNaN(value) ? "Insira um número" : undefined;

export const cities = [
    {
        nome: "Belo Horizonte",
    },
    {
        nome: "Abadia dos Dourados",
    },
    {
        nome: "Abaet\u00e9",
    },
    {
        nome: "Abre Campo",
    },
    {
        nome: "Acaiaca",
    },
    {
        nome: "A\u00e7ucena",
    },
    {
        nome: "\u00c1gua Boa",
    },
    {
        nome: "\u00c1gua Comprida",
    },
    {
        nome: "Aguanil",
    },
    {
        nome: "\u00c1guas Formosas",
    },
    {
        nome: "\u00c1guas Vermelhas",
    },
    {
        nome: "Aimor\u00e9s",
    },
    {
        nome: "Aiuruoca",
    },
    {
        nome: "Alagoa",
    },
    {
        nome: "Albertina",
    },
    {
        nome: "Al\u00e9m Para\u00edba",
    },
    {
        nome: "Alfenas",
    },
    {
        nome: "Alfredo Vasconcelos",
    },
    {
        nome: "Almenara",
    },
    {
        nome: "Alpercata",
    },
    {
        nome: "Alpin\u00f3polis",
    },
    {
        nome: "Alterosa",
    },
    {
        nome: "Alto Capara\u00f3",
    },
    {
        nome: "Alto Jequitib\u00e1",
    },
    {
        nome: "Alto Rio Doce",
    },
    {
        nome: "Alvarenga",
    },
    {
        nome: "Alvin\u00f3polis",
    },
    {
        nome: "Alvorada de Minas",
    },
    {
        nome: "Amparo do Serra",
    },
    {
        nome: "Andradas",
    },
    {
        nome: "Andrel\u00e2ndia",
    },
    {
        nome: "Angel\u00e2ndia",
    },
    {
        nome: "Ant\u00f4nio Carlos",
    },
    {
        nome: "Ant\u00f4nio Dias",
    },
    {
        nome: "Ant\u00f4nio Prado de Minas",
    },
    {
        nome: "Ara\u00e7a\u00ed",
    },
    {
        nome: "Aracitaba",
    },
    {
        nome: "Ara\u00e7ua\u00ed",
    },
    {
        nome: "Araguari",
    },
    {
        nome: "Arantina",
    },
    {
        nome: "Araponga",
    },
    {
        nome: "Arapor\u00e3",
    },
    {
        nome: "Arapu\u00e1",
    },
    {
        nome: "Ara\u00fajos",
    },
    {
        nome: "Arax\u00e1",
    },
    {
        nome: "Arceburgo",
    },
    {
        nome: "Arcos",
    },
    {
        nome: "Areado",
    },
    {
        nome: "Argirita",
    },
    {
        nome: "Aricanduva",
    },
    {
        nome: "Arinos",
    },
    {
        nome: "Astolfo Dutra",
    },
    {
        nome: "Atal\u00e9ia",
    },
    {
        nome: "Augusto de Lima",
    },
    {
        nome: "Baependi",
    },
    {
        nome: "Baldim",
    },
    {
        nome: "Bambu\u00ed",
    },
    {
        nome: "Bandeira",
    },
    {
        nome: "Bandeira do Sul",
    },
    {
        nome: "Bar\u00e3o de Cocais",
    },
    {
        nome: "Bar\u00e3o de Monte Alto",
    },
    {
        nome: "Barbacena",
    },
    {
        nome: "Barra Longa",
    },
    {
        nome: "Barroso",
    },
    {
        nome: "Bela Vista de Minas",
    },
    {
        nome: "Belmiro Braga",
    },
    {
        nome: "Belo Oriente",
    },
    {
        nome: "Belo Vale",
    },
    {
        nome: "Berilo",
    },
    {
        nome: "Berizal",
    },
    {
        nome: "Bert\u00f3polis",
    },
    {
        nome: "Betim",
    },
    {
        nome: "Bias Fortes",
    },
    {
        nome: "Bicas",
    },
    {
        nome: "Biquinhas",
    },
    {
        nome: "Boa Esperan\u00e7a",
    },
    {
        nome: "Bocaina de Minas",
    },
    {
        nome: "Bocai\u00fava",
    },
    {
        nome: "Bom Despacho",
    },
    {
        nome: "Bom Jardim de Minas",
    },
    {
        nome: "Bom Jesus da Penha",
    },
    {
        nome: "Bom Jesus do Amparo",
    },
    {
        nome: "Bom Jesus do Galho",
    },
    {
        nome: "Bom Repouso",
    },
    {
        nome: "Bom Sucesso",
    },
    {
        nome: "Bonfim",
    },
    {
        nome: "Bonfin\u00f3polis de Minas",
    },
    {
        nome: "Bonito de Minas",
    },
    {
        nome: "Borda da Mata",
    },
    {
        nome: "Botelhos",
    },
    {
        nome: "Botumirim",
    },
    {
        nome: "Br\u00e1s Pires",
    },
    {
        nome: "Brasil\u00e2ndia de Minas",
    },
    {
        nome: "Bras\u00edlia de Minas",
    },
    {
        nome: "Bras\u00f3polis",
    },
    {
        nome: "Bra\u00fanas",
    },
    {
        nome: "Brumadinho",
    },
    {
        nome: "Bueno Brand\u00e3o",
    },
    {
        nome: "Buen\u00f3polis",
    },
    {
        nome: "Bugre",
    },
    {
        nome: "Buritis",
    },
    {
        nome: "Buritizeiro",
    },
    {
        nome: "Cabeceira Grande",
    },
    {
        nome: "Cabo Verde",
    },
    {
        nome: "Cachoeira da Prata",
    },
    {
        nome: "Cachoeira de Minas",
    },
    {
        nome: "Cachoeira de Paje\u00fa",
    },
    {
        nome: "Cachoeira Dourada",
    },
    {
        nome: "Caetan\u00f3polis",
    },
    {
        nome: "Caet\u00e9",
    },
    {
        nome: "Caiana",
    },
    {
        nome: "Cajuri",
    },
    {
        nome: "Caldas",
    },
    {
        nome: "Camacho",
    },
    {
        nome: "Camanducaia",
    },
    {
        nome: "Cambu\u00ed",
    },
    {
        nome: "Cambuquira",
    },
    {
        nome: "Campan\u00e1rio",
    },
    {
        nome: "Campanha",
    },
    {
        nome: "Campestre",
    },
    {
        nome: "Campina Verde",
    },
    {
        nome: "Campo Azul",
    },
    {
        nome: "Campo Belo",
    },
    {
        nome: "Campo do Meio",
    },
    {
        nome: "Campo Florido",
    },
    {
        nome: "Campos Altos",
    },
    {
        nome: "Campos Gerais",
    },
    {
        nome: "Cana Verde",
    },
    {
        nome: "Cana\u00e3",
    },
    {
        nome: "Can\u00e1polis",
    },
    {
        nome: "Candeias",
    },
    {
        nome: "Cantagalo",
    },
    {
        nome: "Capara\u00f3",
    },
    {
        nome: "Capela Nova",
    },
    {
        nome: "Capelinha",
    },
    {
        nome: "Capetinga",
    },
    {
        nome: "Capim Branco",
    },
    {
        nome: "Capin\u00f3polis",
    },
    {
        nome: "Capit\u00e3o Andrade",
    },
    {
        nome: "Capit\u00e3o En\u00e9as",
    },
    {
        nome: "Capit\u00f3lio",
    },
    {
        nome: "Caputira",
    },
    {
        nome: "Cara\u00ed",
    },
    {
        nome: "Carana\u00edba",
    },
    {
        nome: "Caranda\u00ed",
    },
    {
        nome: "Carangola",
    },
    {
        nome: "Caratinga",
    },
    {
        nome: "Carbonita",
    },
    {
        nome: "Carea\u00e7u",
    },
    {
        nome: "Carlos Chagas",
    },
    {
        nome: "Carm\u00e9sia",
    },
    {
        nome: "Carmo da Cachoeira",
    },
    {
        nome: "Carmo da Mata",
    },
    {
        nome: "Carmo de Minas",
    },
    {
        nome: "Carmo do Cajuru",
    },
    {
        nome: "Carmo do Parana\u00edba",
    },
    {
        nome: "Carmo do Rio Claro",
    },
    {
        nome: "Carm\u00f3polis de Minas",
    },
    {
        nome: "Carneirinho",
    },
    {
        nome: "Carrancas",
    },
    {
        nome: "Carvalh\u00f3polis",
    },
    {
        nome: "Carvalhos",
    },
    {
        nome: "Casa Grande",
    },
    {
        nome: "Cascalho Rico",
    },
    {
        nome: "C\u00e1ssia",
    },
    {
        nome: "Cataguases",
    },
    {
        nome: "Catas Altas",
    },
    {
        nome: "Catas Altas da Noruega",
    },
    {
        nome: "Catuji",
    },
    {
        nome: "Catuti",
    },
    {
        nome: "Caxambu",
    },
    {
        nome: "Cedro do Abaet\u00e9",
    },
    {
        nome: "Central de Minas",
    },
    {
        nome: "Centralina",
    },
    {
        nome: "Ch\u00e1cara",
    },
    {
        nome: "Chal\u00e9",
    },
    {
        nome: "Chapada do Norte",
    },
    {
        nome: "Chapada Ga\u00facha",
    },
    {
        nome: "Chiador",
    },
    {
        nome: "Cipot\u00e2nea",
    },
    {
        nome: "Claraval",
    },
    {
        nome: "Claro dos Po\u00e7\u00f5es",
    },
    {
        nome: "Cl\u00e1udio",
    },
    {
        nome: "Coimbra",
    },
    {
        nome: "Coluna",
    },
    {
        nome: "Comendador Gomes",
    },
    {
        nome: "Comercinho",
    },
    {
        nome: "Concei\u00e7\u00e3o da Aparecida",
    },
    {
        nome: "Concei\u00e7\u00e3o da Barra de Minas",
    },
    {
        nome: "Concei\u00e7\u00e3o das Alagoas",
    },
    {
        nome: "Concei\u00e7\u00e3o das Pedras",
    },
    {
        nome: "Concei\u00e7\u00e3o de Ipanema",
    },
    {
        nome: "Concei\u00e7\u00e3o do Mato Dentro",
    },
    {
        nome: "Concei\u00e7\u00e3o do Par\u00e1",
    },
    {
        nome: "Concei\u00e7\u00e3o do Rio Verde",
    },
    {
        nome: "Concei\u00e7\u00e3o dos Ouros",
    },
    {
        nome: "C\u00f4nego Marinho",
    },
    {
        nome: "Confins",
    },
    {
        nome: "Congonhal",
    },
    {
        nome: "Congonhas",
    },
    {
        nome: "Congonhas do Norte",
    },
    {
        nome: "Conquista",
    },
    {
        nome: "Conselheiro Lafaiete",
    },
    {
        nome: "Conselheiro Pena",
    },
    {
        nome: "Consola\u00e7\u00e3o",
    },
    {
        nome: "Contagem",
    },
    {
        nome: "Coqueiral",
    },
    {
        nome: "Cora\u00e7\u00e3o de Jesus",
    },
    {
        nome: "Cordisburgo",
    },
    {
        nome: "Cordisl\u00e2ndia",
    },
    {
        nome: "Corinto",
    },
    {
        nome: "Coroaci",
    },
    {
        nome: "Coromandel",
    },
    {
        nome: "Coronel Fabriciano",
    },
    {
        nome: "Coronel Murta",
    },
    {
        nome: "Coronel Pacheco",
    },
    {
        nome: "Coronel Xavier Chaves",
    },
    {
        nome: "C\u00f3rrego Danta",
    },
    {
        nome: "C\u00f3rrego do Bom Jesus",
    },
    {
        nome: "C\u00f3rrego Fundo",
    },
    {
        nome: "C\u00f3rrego Novo",
    },
    {
        nome: "Couto de Magalh\u00e3es de Minas",
    },
    {
        nome: "Cris\u00f3lita",
    },
    {
        nome: "Cristais",
    },
    {
        nome: "Crist\u00e1lia",
    },
    {
        nome: "Cristiano Otoni",
    },
    {
        nome: "Cristina",
    },
    {
        nome: "Crucil\u00e2ndia",
    },
    {
        nome: "Cruzeiro da Fortaleza",
    },
    {
        nome: "Cruz\u00edlia",
    },
    {
        nome: "Cuparaque",
    },
    {
        nome: "Curral de Dentro",
    },
    {
        nome: "Curvelo",
    },
    {
        nome: "Datas",
    },
    {
        nome: "Delfim Moreira",
    },
    {
        nome: "Delfin\u00f3polis",
    },
    {
        nome: "Delta",
    },
    {
        nome: "Descoberto",
    },
    {
        nome: "Desterro de Entre Rios",
    },
    {
        nome: "Desterro do Melo",
    },
    {
        nome: "Diamantina",
    },
    {
        nome: "Diogo de Vasconcelos",
    },
    {
        nome: "Dion\u00edsio",
    },
    {
        nome: "Divin\u00e9sia",
    },
    {
        nome: "Divino",
    },
    {
        nome: "Divino das Laranjeiras",
    },
    {
        nome: "Divinol\u00e2ndia de Minas",
    },
    {
        nome: "Divin\u00f3polis",
    },
    {
        nome: "Divisa Alegre",
    },
    {
        nome: "Divisa Nova",
    },
    {
        nome: "Divis\u00f3polis",
    },
    {
        nome: "Dom Bosco",
    },
    {
        nome: "Dom Cavati",
    },
    {
        nome: "Dom Joaquim",
    },
    {
        nome: "Dom Silv\u00e9rio",
    },
    {
        nome: "Dom Vi\u00e7oso",
    },
    {
        nome: "Dona Eus\u00e9bia",
    },
    {
        nome: "Dores de Campos",
    },
    {
        nome: "Dores de Guanh\u00e3es",
    },
    {
        nome: "Dores do Indai\u00e1",
    },
    {
        nome: "Dores do Turvo",
    },
    {
        nome: "Dores\u00f3polis",
    },
    {
        nome: "Douradoquara",
    },
    {
        nome: "Durand\u00e9",
    },
    {
        nome: "El\u00f3i Mendes",
    },
    {
        nome: "Engenheiro Caldas",
    },
    {
        nome: "Engenheiro Navarro",
    },
    {
        nome: "Entre Folhas",
    },
    {
        nome: "Entre Rios de Minas",
    },
    {
        nome: "Erv\u00e1lia",
    },
    {
        nome: "Esmeraldas",
    },
    {
        nome: "Espera Feliz",
    },
    {
        nome: "Espinosa",
    },
    {
        nome: "Esp\u00edrito Santo do Dourado",
    },
    {
        nome: "Estiva",
    },
    {
        nome: "Estrela Dalva",
    },
    {
        nome: "Estrela do Indai\u00e1",
    },
    {
        nome: "Estrela do Sul",
    },
    {
        nome: "Eugen\u00f3polis",
    },
    {
        nome: "Ewbank da C\u00e2mara",
    },
    {
        nome: "Extrema",
    },
    {
        nome: "Fama",
    },
    {
        nome: "Faria Lemos",
    },
    {
        nome: "Fel\u00edcio dos Santos",
    },
    {
        nome: "Felisburgo",
    },
    {
        nome: "Felixl\u00e2ndia",
    },
    {
        nome: "Fernandes Tourinho",
    },
    {
        nome: "Ferros",
    },
    {
        nome: "Fervedouro",
    },
    {
        nome: "Florestal",
    },
    {
        nome: "Formiga",
    },
    {
        nome: "Formoso",
    },
    {
        nome: "Fortaleza de Minas",
    },
    {
        nome: "Fortuna de Minas",
    },
    {
        nome: "Francisco Badar\u00f3",
    },
    {
        nome: "Francisco Dumont",
    },
    {
        nome: "Francisco S\u00e1",
    },
    {
        nome: "Francisc\u00f3polis",
    },
    {
        nome: "Frei Gaspar",
    },
    {
        nome: "Frei Inoc\u00eancio",
    },
    {
        nome: "Frei Lagonegro",
    },
    {
        nome: "Fronteira",
    },
    {
        nome: "Fronteira dos Vales",
    },
    {
        nome: "Fruta de Leite",
    },
    {
        nome: "Frutal",
    },
    {
        nome: "Funil\u00e2ndia",
    },
    {
        nome: "Galil\u00e9ia",
    },
    {
        nome: "Gameleiras",
    },
    {
        nome: "Glaucil\u00e2ndia",
    },
    {
        nome: "Goiabeira",
    },
    {
        nome: "Goian\u00e1",
    },
    {
        nome: "Gon\u00e7alves",
    },
    {
        nome: "Gonzaga",
    },
    {
        nome: "Gouveia",
    },
    {
        nome: "Governador Valadares",
    },
    {
        nome: "Gr\u00e3o Mogol",
    },
    {
        nome: "Grupiara",
    },
    {
        nome: "Guanh\u00e3es",
    },
    {
        nome: "Guap\u00e9",
    },
    {
        nome: "Guaraciaba",
    },
    {
        nome: "Guaraciama",
    },
    {
        nome: "Guaran\u00e9sia",
    },
    {
        nome: "Guarani",
    },
    {
        nome: "Guarar\u00e1",
    },
    {
        nome: "Guarda-Mor",
    },
    {
        nome: "Guaxup\u00e9",
    },
    {
        nome: "Guidoval",
    },
    {
        nome: "Guimar\u00e2nia",
    },
    {
        nome: "Guiricema",
    },
    {
        nome: "Gurinhat\u00e3",
    },
    {
        nome: "Heliodora",
    },
    {
        nome: "Iapu",
    },
    {
        nome: "Ibertioga",
    },
    {
        nome: "Ibi\u00e1",
    },
    {
        nome: "Ibia\u00ed",
    },
    {
        nome: "Ibiracatu",
    },
    {
        nome: "Ibiraci",
    },
    {
        nome: "Ibirit\u00e9",
    },
    {
        nome: "Ibiti\u00fara de Minas",
    },
    {
        nome: "Ibituruna",
    },
    {
        nome: "Icara\u00ed de Minas",
    },
    {
        nome: "Igarap\u00e9",
    },
    {
        nome: "Igaratinga",
    },
    {
        nome: "Iguatama",
    },
    {
        nome: "Ijaci",
    },
    {
        nome: "Ilic\u00ednea",
    },
    {
        nome: "Imb\u00e9 de Minas",
    },
    {
        nome: "Inconfidentes",
    },
    {
        nome: "Indaiabira",
    },
    {
        nome: "Indian\u00f3polis",
    },
    {
        nome: "Inga\u00ed",
    },
    {
        nome: "Inhapim",
    },
    {
        nome: "Inha\u00fama",
    },
    {
        nome: "Inimutaba",
    },
    {
        nome: "Ipaba",
    },
    {
        nome: "Ipanema",
    },
    {
        nome: "Ipatinga",
    },
    {
        nome: "Ipia\u00e7u",
    },
    {
        nome: "Ipui\u00fana",
    },
    {
        nome: "Ira\u00ed de Minas",
    },
    {
        nome: "Itabira",
    },
    {
        nome: "Itabirinha de Mantena",
    },
    {
        nome: "Itabirito",
    },
    {
        nome: "Itacambira",
    },
    {
        nome: "Itacarambi",
    },
    {
        nome: "Itaguara",
    },
    {
        nome: "Itaip\u00e9",
    },
    {
        nome: "Itajub\u00e1",
    },
    {
        nome: "Itamarandiba",
    },
    {
        nome: "Itamarati de Minas",
    },
    {
        nome: "Itambacuri",
    },
    {
        nome: "Itamb\u00e9 do Mato Dentro",
    },
    {
        nome: "Itamogi",
    },
    {
        nome: "Itamonte",
    },
    {
        nome: "Itanhandu",
    },
    {
        nome: "Itanhomi",
    },
    {
        nome: "Itaobim",
    },
    {
        nome: "Itapagipe",
    },
    {
        nome: "Itapecerica",
    },
    {
        nome: "Itapeva",
    },
    {
        nome: "Itatiaiu\u00e7u",
    },
    {
        nome: "Ita\u00fa de Minas",
    },
    {
        nome: "Ita\u00fana",
    },
    {
        nome: "Itaverava",
    },
    {
        nome: "Itinga",
    },
    {
        nome: "Itueta",
    },
    {
        nome: "Ituiutaba",
    },
    {
        nome: "Itumirim",
    },
    {
        nome: "Iturama",
    },
    {
        nome: "Itutinga",
    },
    {
        nome: "Jaboticatubas",
    },
    {
        nome: "Jacinto",
    },
    {
        nome: "Jacu\u00ed",
    },
    {
        nome: "Jacutinga",
    },
    {
        nome: "Jaguara\u00e7u",
    },
    {
        nome: "Ja\u00edba",
    },
    {
        nome: "Jampruca",
    },
    {
        nome: "Jana\u00faba",
    },
    {
        nome: "Janu\u00e1ria",
    },
    {
        nome: "Japara\u00edba",
    },
    {
        nome: "Japonvar",
    },
    {
        nome: "Jeceaba",
    },
    {
        nome: "Jenipapo de Minas",
    },
    {
        nome: "Jequeri",
    },
    {
        nome: "Jequita\u00ed",
    },
    {
        nome: "Jequitib\u00e1",
    },
    {
        nome: "Jequitinhonha",
    },
    {
        nome: "Jesu\u00e2nia",
    },
    {
        nome: "Joa\u00edma",
    },
    {
        nome: "Joan\u00e9sia",
    },
    {
        nome: "Jo\u00e3o Monlevade",
    },
    {
        nome: "Jo\u00e3o Pinheiro",
    },
    {
        nome: "Joaquim Fel\u00edcio",
    },
    {
        nome: "Jord\u00e2nia",
    },
    {
        nome: "Jos\u00e9 Gon\u00e7alves de Minas",
    },
    {
        nome: "Jos\u00e9 Raydan",
    },
    {
        nome: "Josen\u00f3polis",
    },
    {
        nome: "Juatuba",
    },
    {
        nome: "Juiz de Fora",
    },
    {
        nome: "Juramento",
    },
    {
        nome: "Juruaia",
    },
    {
        nome: "Juven\u00edlia",
    },
    {
        nome: "Ladainha",
    },
    {
        nome: "Lagamar",
    },
    {
        nome: "Lagoa da Prata",
    },
    {
        nome: "Lagoa dos Patos",
    },
    {
        nome: "Lagoa Dourada",
    },
    {
        nome: "Lagoa Formosa",
    },
    {
        nome: "Lagoa Grande",
    },
    {
        nome: "Lagoa Santa",
    },
    {
        nome: "Lajinha",
    },
    {
        nome: "Lambari",
    },
    {
        nome: "Lamim",
    },
    {
        nome: "Laranjal",
    },
    {
        nome: "Lassance",
    },
    {
        nome: "Lavras",
    },
    {
        nome: "Leandro Ferreira",
    },
    {
        nome: "Leme do Prado",
    },
    {
        nome: "Leopoldina",
    },
    {
        nome: "Liberdade",
    },
    {
        nome: "Lima Duarte",
    },
    {
        nome: "Limeira do Oeste",
    },
    {
        nome: "Lontra",
    },
    {
        nome: "Luisburgo",
    },
    {
        nome: "Luisl\u00e2ndia",
    },
    {
        nome: "Lumin\u00e1rias",
    },
    {
        nome: "Luz",
    },
    {
        nome: "Machacalis",
    },
    {
        nome: "Machado",
    },
    {
        nome: "Madre de Deus de Minas",
    },
    {
        nome: "Malacacheta",
    },
    {
        nome: "Mamonas",
    },
    {
        nome: "Manga",
    },
    {
        nome: "Manhua\u00e7u",
    },
    {
        nome: "Manhumirim",
    },
    {
        nome: "Mantena",
    },
    {
        nome: "Mar de Espanha",
    },
    {
        nome: "Maravilhas",
    },
    {
        nome: "Maria da F\u00e9",
    },
    {
        nome: "Mariana",
    },
    {
        nome: "Marilac",
    },
    {
        nome: "M\u00e1rio Campos",
    },
    {
        nome: "Marip\u00e1 de Minas",
    },
    {
        nome: "Marli\u00e9ria",
    },
    {
        nome: "Marmel\u00f3polis",
    },
    {
        nome: "Martinho Campos",
    },
    {
        nome: "Martins Soares",
    },
    {
        nome: "Mata Verde",
    },
    {
        nome: "Materl\u00e2ndia",
    },
    {
        nome: "Mateus Leme",
    },
    {
        nome: "Mathias Lobato",
    },
    {
        nome: "Matias Barbosa",
    },
    {
        nome: "Matias Cardoso",
    },
    {
        nome: "Matip\u00f3",
    },
    {
        nome: "Mato Verde",
    },
    {
        nome: "Matozinhos",
    },
    {
        nome: "Matutina",
    },
    {
        nome: "Medeiros",
    },
    {
        nome: "Medina",
    },
    {
        nome: "Mendes Pimentel",
    },
    {
        nome: "Merc\u00eas",
    },
    {
        nome: "Mesquita",
    },
    {
        nome: "Minas Novas",
    },
    {
        nome: "Minduri",
    },
    {
        nome: "Mirabela",
    },
    {
        nome: "Miradouro",
    },
    {
        nome: "Mira\u00ed",
    },
    {
        nome: "Mirav\u00e2nia",
    },
    {
        nome: "Moeda",
    },
    {
        nome: "Moema",
    },
    {
        nome: "Monjolos",
    },
    {
        nome: "Monsenhor Paulo",
    },
    {
        nome: "Montalv\u00e2nia",
    },
    {
        nome: "Monte Alegre de Minas",
    },
    {
        nome: "Monte Azul",
    },
    {
        nome: "Monte Belo",
    },
    {
        nome: "Monte Carmelo",
    },
    {
        nome: "Monte Formoso",
    },
    {
        nome: "Monte Santo de Minas",
    },
    {
        nome: "Monte Si\u00e3o",
    },
    {
        nome: "Montes Claros",
    },
    {
        nome: "Montezuma",
    },
    {
        nome: "Morada Nova de Minas",
    },
    {
        nome: "Morro da Gar\u00e7a",
    },
    {
        nome: "Morro do Pilar",
    },
    {
        nome: "Munhoz",
    },
    {
        nome: "Muria\u00e9",
    },
    {
        nome: "Mutum",
    },
    {
        nome: "Muzambinho",
    },
    {
        nome: "Nacip Raydan",
    },
    {
        nome: "Nanuque",
    },
    {
        nome: "Naque",
    },
    {
        nome: "Natal\u00e2ndia",
    },
    {
        nome: "Nat\u00e9rcia",
    },
    {
        nome: "Nazareno",
    },
    {
        nome: "Nepomuceno",
    },
    {
        nome: "Ninheira",
    },
    {
        nome: "Nova Bel\u00e9m",
    },
    {
        nome: "Nova Era",
    },
    {
        nome: "Nova Lima",
    },
    {
        nome: "Nova M\u00f3dica",
    },
    {
        nome: "Nova Ponte",
    },
    {
        nome: "Nova Porteirinha",
    },
    {
        nome: "Nova Resende",
    },
    {
        nome: "Nova Serrana",
    },
    {
        nome: "Nova Uni\u00e3o",
    },
    {
        nome: "Novo Cruzeiro",
    },
    {
        nome: "Novo Oriente de Minas",
    },
    {
        nome: "Novorizonte",
    },
    {
        nome: "Olaria",
    },
    {
        nome: "Olhos-d\u0027\u00c1gua",
    },
    {
        nome: "Ol\u00edmpio Noronha",
    },
    {
        nome: "Oliveira",
    },
    {
        nome: "Oliveira Fortes",
    },
    {
        nome: "On\u00e7a de Pitangui",
    },
    {
        nome: "Orat\u00f3rios",
    },
    {
        nome: "Oriz\u00e2nia",
    },
    {
        nome: "Ouro Branco",
    },
    {
        nome: "Ouro Fino",
    },
    {
        nome: "Ouro Preto",
    },
    {
        nome: "Ouro Verde de Minas",
    },
    {
        nome: "Padre Carvalho",
    },
    {
        nome: "Padre Para\u00edso",
    },
    {
        nome: "Pai Pedro",
    },
    {
        nome: "Paineiras",
    },
    {
        nome: "Pains",
    },
    {
        nome: "Paiva",
    },
    {
        nome: "Palma",
    },
    {
        nome: "Palm\u00f3polis",
    },
    {
        nome: "Papagaios",
    },
    {
        nome: "Par\u00e1 de Minas",
    },
    {
        nome: "Paracatu",
    },
    {
        nome: "Paragua\u00e7u",
    },
    {
        nome: "Parais\u00f3polis",
    },
    {
        nome: "Paraopeba",
    },
    {
        nome: "Passa Quatro",
    },
    {
        nome: "Passa Tempo",
    },
    {
        nome: "Passa-Vinte",
    },
    {
        nome: "Passab\u00e9m",
    },
    {
        nome: "Passos",
    },
    {
        nome: "Patis",
    },
    {
        nome: "Patos de Minas",
    },
    {
        nome: "Patroc\u00ednio",
    },
    {
        nome: "Patroc\u00ednio do Muria\u00e9",
    },
    {
        nome: "Paula C\u00e2ndido",
    },
    {
        nome: "Paulistas",
    },
    {
        nome: "Pav\u00e3o",
    },
    {
        nome: "Pe\u00e7anha",
    },
    {
        nome: "Pedra Azul",
    },
    {
        nome: "Pedra Bonita",
    },
    {
        nome: "Pedra do Anta",
    },
    {
        nome: "Pedra do Indai\u00e1",
    },
    {
        nome: "Pedra Dourada",
    },
    {
        nome: "Pedralva",
    },
    {
        nome: "Pedras de Maria da Cruz",
    },
    {
        nome: "Pedrin\u00f3polis",
    },
    {
        nome: "Pedro Leopoldo",
    },
    {
        nome: "Pedro Teixeira",
    },
    {
        nome: "Pequeri",
    },
    {
        nome: "Pequi",
    },
    {
        nome: "Perdig\u00e3o",
    },
    {
        nome: "Perdizes",
    },
    {
        nome: "Perd\u00f5es",
    },
    {
        nome: "Periquito",
    },
    {
        nome: "Pescador",
    },
    {
        nome: "Piau",
    },
    {
        nome: "Piedade de Caratinga",
    },
    {
        nome: "Piedade de Ponte Nova",
    },
    {
        nome: "Piedade do Rio Grande",
    },
    {
        nome: "Piedade dos Gerais",
    },
    {
        nome: "Pimenta",
    },
    {
        nome: "Pingo-d\u0027\u00c1gua",
    },
    {
        nome: "Pint\u00f3polis",
    },
    {
        nome: "Piracema",
    },
    {
        nome: "Pirajuba",
    },
    {
        nome: "Piranga",
    },
    {
        nome: "Pirangu\u00e7u",
    },
    {
        nome: "Piranguinho",
    },
    {
        nome: "Pirapetinga",
    },
    {
        nome: "Pirapora",
    },
    {
        nome: "Pira\u00faba",
    },
    {
        nome: "Pitangui",
    },
    {
        nome: "Piumhi",
    },
    {
        nome: "Planura",
    },
    {
        nome: "Po\u00e7o Fundo",
    },
    {
        nome: "Po\u00e7os de Caldas",
    },
    {
        nome: "Pocrane",
    },
    {
        nome: "Pomp\u00e9u",
    },
    {
        nome: "Ponte Nova",
    },
    {
        nome: "Ponto Chique",
    },
    {
        nome: "Ponto dos Volantes",
    },
    {
        nome: "Porteirinha",
    },
    {
        nome: "Porto Firme",
    },
    {
        nome: "Pot\u00e9",
    },
    {
        nome: "Pouso Alegre",
    },
    {
        nome: "Pouso Alto",
    },
    {
        nome: "Prados",
    },
    {
        nome: "Prata",
    },
    {
        nome: "Prat\u00e1polis",
    },
    {
        nome: "Pratinha",
    },
    {
        nome: "Presidente Bernardes",
    },
    {
        nome: "Presidente Juscelino",
    },
    {
        nome: "Presidente Kubitschek",
    },
    {
        nome: "Presidente Oleg\u00e1rio",
    },
    {
        nome: "Prudente de Morais",
    },
    {
        nome: "Quartel Geral",
    },
    {
        nome: "Queluzito",
    },
    {
        nome: "Raposos",
    },
    {
        nome: "Raul Soares",
    },
    {
        nome: "Recreio",
    },
    {
        nome: "Reduto",
    },
    {
        nome: "Resende Costa",
    },
    {
        nome: "Resplendor",
    },
    {
        nome: "Ressaquinha",
    },
    {
        nome: "Riachinho",
    },
    {
        nome: "Riacho dos Machados",
    },
    {
        nome: "Ribeir\u00e3o das Neves",
    },
    {
        nome: "Ribeir\u00e3o Vermelho",
    },
    {
        nome: "Rio Acima",
    },
    {
        nome: "Rio Casca",
    },
    {
        nome: "Rio do Prado",
    },
    {
        nome: "Rio Doce",
    },
    {
        nome: "Rio Espera",
    },
    {
        nome: "Rio Manso",
    },
    {
        nome: "Rio Novo",
    },
    {
        nome: "Rio Parana\u00edba",
    },
    {
        nome: "Rio Pardo de Minas",
    },
    {
        nome: "Rio Piracicaba",
    },
    {
        nome: "Rio Pomba",
    },
    {
        nome: "Rio Preto",
    },
    {
        nome: "Rio Vermelho",
    },
    {
        nome: "Rit\u00e1polis",
    },
    {
        nome: "Rochedo de Minas",
    },
    {
        nome: "Rodeiro",
    },
    {
        nome: "Romaria",
    },
    {
        nome: "Ros\u00e1rio da Limeira",
    },
    {
        nome: "Rubelita",
    },
    {
        nome: "Rubim",
    },
    {
        nome: "Sabar\u00e1",
    },
    {
        nome: "Sabin\u00f3polis",
    },
    {
        nome: "Sacramento",
    },
    {
        nome: "Salinas",
    },
    {
        nome: "Salto da Divisa",
    },
    {
        nome: "Santa B\u00e1rbara",
    },
    {
        nome: "Santa B\u00e1rbara do Leste",
    },
    {
        nome: "Santa B\u00e1rbara do Monte Verde",
    },
    {
        nome: "Santa B\u00e1rbara do Tug\u00fario",
    },
    {
        nome: "Santa Cruz de Minas",
    },
    {
        nome: "Santa Cruz de Salinas",
    },
    {
        nome: "Santa Cruz do Escalvado",
    },
    {
        nome: "Santa Efig\u00eania de Minas",
    },
    {
        nome: "Santa F\u00e9 de Minas",
    },
    {
        nome: "Santa Helena de Minas",
    },
    {
        nome: "Santa Juliana",
    },
    {
        nome: "Santa Luzia",
    },
    {
        nome: "Santa Margarida",
    },
    {
        nome: "Santa Maria de Itabira",
    },
    {
        nome: "Santa Maria do Salto",
    },
    {
        nome: "Santa Maria do Sua\u00e7u\u00ed",
    },
    {
        nome: "Santa Rita de Caldas",
    },
    {
        nome: "Santa Rita de Ibitipoca",
    },
    {
        nome: "Santa Rita de Jacutinga",
    },
    {
        nome: "Santa Rita de Minas",
    },
    {
        nome: "Santa Rita do Itueto",
    },
    {
        nome: "Santa Rita do Sapuca\u00ed",
    },
    {
        nome: "Santa Rosa da Serra",
    },
    {
        nome: "Santa Vit\u00f3ria",
    },
    {
        nome: "Santana da Vargem",
    },
    {
        nome: "Santana de Cataguases",
    },
    {
        nome: "Santana de Pirapama",
    },
    {
        nome: "Santana do Deserto",
    },
    {
        nome: "Santana do Garamb\u00e9u",
    },
    {
        nome: "Santana do Jacar\u00e9",
    },
    {
        nome: "Santana do Manhua\u00e7u",
    },
    {
        nome: "Santana do Para\u00edso",
    },
    {
        nome: "Santana do Riacho",
    },
    {
        nome: "Santana dos Montes",
    },
    {
        nome: "Santo Ant\u00f4nio do Amparo",
    },
    {
        nome: "Santo Ant\u00f4nio do Aventureiro",
    },
    {
        nome: "Santo Ant\u00f4nio do Grama",
    },
    {
        nome: "Santo Ant\u00f4nio do Itamb\u00e9",
    },
    {
        nome: "Santo Ant\u00f4nio do Jacinto",
    },
    {
        nome: "Santo Ant\u00f4nio do Monte",
    },
    {
        nome: "Santo Ant\u00f4nio do Retiro",
    },
    {
        nome: "Santo Ant\u00f4nio do Rio Abaixo",
    },
    {
        nome: "Santo Hip\u00f3lito",
    },
    {
        nome: "Santos Dumont",
    },
    {
        nome: "S\u00e3o Bento Abade",
    },
    {
        nome: "S\u00e3o Br\u00e1s do Sua\u00e7u\u00ed",
    },
    {
        nome: "S\u00e3o Domingos das Dores",
    },
    {
        nome: "S\u00e3o Domingos do Prata",
    },
    {
        nome: "S\u00e3o F\u00e9lix de Minas",
    },
    {
        nome: "S\u00e3o Francisco",
    },
    {
        nome: "S\u00e3o Francisco de Paula",
    },
    {
        nome: "S\u00e3o Francisco de Sales",
    },
    {
        nome: "S\u00e3o Francisco do Gl\u00f3ria",
    },
    {
        nome: "S\u00e3o Geraldo",
    },
    {
        nome: "S\u00e3o Geraldo da Piedade",
    },
    {
        nome: "S\u00e3o Geraldo do Baixio",
    },
    {
        nome: "S\u00e3o Gon\u00e7alo do Abaet\u00e9",
    },
    {
        nome: "S\u00e3o Gon\u00e7alo do Par\u00e1",
    },
    {
        nome: "S\u00e3o Gon\u00e7alo do Rio Abaixo",
    },
    {
        nome: "S\u00e3o Gon\u00e7alo do Rio Preto",
    },
    {
        nome: "S\u00e3o Gon\u00e7alo do Sapuca\u00ed",
    },
    {
        nome: "S\u00e3o Gotardo",
    },
    {
        nome: "S\u00e3o Jo\u00e3o Batista do Gl\u00f3ria",
    },
    {
        nome: "S\u00e3o Jo\u00e3o da Lagoa",
    },
    {
        nome: "S\u00e3o Jo\u00e3o da Mata",
    },
    {
        nome: "S\u00e3o Jo\u00e3o da Ponte",
    },
    {
        nome: "S\u00e3o Jo\u00e3o das Miss\u00f5es",
    },
    {
        nome: "S\u00e3o Jo\u00e3o del Rei",
    },
    {
        nome: "S\u00e3o Jo\u00e3o do Manhua\u00e7u",
    },
    {
        nome: "S\u00e3o Jo\u00e3o do Manteninha",
    },
    {
        nome: "S\u00e3o Jo\u00e3o do Oriente",
    },
    {
        nome: "S\u00e3o Jo\u00e3o do Pacu\u00ed",
    },
    {
        nome: "S\u00e3o Jo\u00e3o do Para\u00edso",
    },
    {
        nome: "S\u00e3o Jo\u00e3o Evangelista",
    },
    {
        nome: "S\u00e3o Jo\u00e3o Nepomuceno",
    },
    {
        nome: "S\u00e3o Joaquim de Bicas",
    },
    {
        nome: "S\u00e3o Jos\u00e9 da Barra",
    },
    {
        nome: "S\u00e3o Jos\u00e9 da Lapa",
    },
    {
        nome: "S\u00e3o Jos\u00e9 da Safira",
    },
    {
        nome: "S\u00e3o Jos\u00e9 da Varginha",
    },
    {
        nome: "S\u00e3o Jos\u00e9 do Alegre",
    },
    {
        nome: "S\u00e3o Jos\u00e9 do Divino",
    },
    {
        nome: "S\u00e3o Jos\u00e9 do Goiabal",
    },
    {
        nome: "S\u00e3o Jos\u00e9 do Jacuri",
    },
    {
        nome: "S\u00e3o Jos\u00e9 do Mantimento",
    },
    {
        nome: "S\u00e3o Louren\u00e7o",
    },
    {
        nome: "S\u00e3o Miguel do Anta",
    },
    {
        nome: "S\u00e3o Pedro da Uni\u00e3o",
    },
    {
        nome: "S\u00e3o Pedro do Sua\u00e7u\u00ed",
    },
    {
        nome: "S\u00e3o Pedro dos Ferros",
    },
    {
        nome: "S\u00e3o Rom\u00e3o",
    },
    {
        nome: "S\u00e3o Roque de Minas",
    },
    {
        nome: "S\u00e3o Sebasti\u00e3o da Bela Vista",
    },
    {
        nome: "S\u00e3o Sebasti\u00e3o da Vargem Alegre",
    },
    {
        nome: "S\u00e3o Sebasti\u00e3o do Anta",
    },
    {
        nome: "S\u00e3o Sebasti\u00e3o do Maranh\u00e3o",
    },
    {
        nome: "S\u00e3o Sebasti\u00e3o do Oeste",
    },
    {
        nome: "S\u00e3o Sebasti\u00e3o do Para\u00edso",
    },
    {
        nome: "S\u00e3o Sebasti\u00e3o do Rio Preto",
    },
    {
        nome: "S\u00e3o Sebasti\u00e3o do Rio Verde",
    },
    {
        nome: "S\u00e3o Thom\u00e9 das Letras",
    },
    {
        nome: "S\u00e3o Tiago",
    },
    {
        nome: "S\u00e3o Tom\u00e1s de Aquino",
    },
    {
        nome: "S\u00e3o Vicente de Minas",
    },
    {
        nome: "Sapuca\u00ed-Mirim",
    },
    {
        nome: "Sardo\u00e1",
    },
    {
        nome: "Sarzedo",
    },
    {
        nome: "Sem-Peixe",
    },
    {
        nome: "Senador Amaral",
    },
    {
        nome: "Senador Cortes",
    },
    {
        nome: "Senador Firmino",
    },
    {
        nome: "Senador Jos\u00e9 Bento",
    },
    {
        nome: "Senador Modestino Gon\u00e7alves",
    },
    {
        nome: "Senhora de Oliveira",
    },
    {
        nome: "Senhora do Porto",
    },
    {
        nome: "Senhora dos Rem\u00e9dios",
    },
    {
        nome: "Sericita",
    },
    {
        nome: "Seritinga",
    },
    {
        nome: "Serra Azul de Minas",
    },
    {
        nome: "Serra da Saudade",
    },
    {
        nome: "Serra do Salitre",
    },
    {
        nome: "Serra dos Aimor\u00e9s",
    },
    {
        nome: "Serrania",
    },
    {
        nome: "Serran\u00f3polis de Minas",
    },
    {
        nome: "Serranos",
    },
    {
        nome: "Serro",
    },
    {
        nome: "Sete Lagoas",
    },
    {
        nome: "Setubinha",
    },
    {
        nome: "Silveir\u00e2nia",
    },
    {
        nome: "Silvian\u00f3polis",
    },
    {
        nome: "Sim\u00e3o Pereira",
    },
    {
        nome: "Simon\u00e9sia",
    },
    {
        nome: "Sobr\u00e1lia",
    },
    {
        nome: "Soledade de Minas",
    },
    {
        nome: "Tabuleiro",
    },
    {
        nome: "Taiobeiras",
    },
    {
        nome: "Taparuba",
    },
    {
        nome: "Tapira",
    },
    {
        nome: "Tapira\u00ed",
    },
    {
        nome: "Taquara\u00e7u de Minas",
    },
    {
        nome: "Tarumirim",
    },
    {
        nome: "Teixeiras",
    },
    {
        nome: "Te\u00f3filo Otoni",
    },
    {
        nome: "Tim\u00f3teo",
    },
    {
        nome: "Tiradentes",
    },
    {
        nome: "Tiros",
    },
    {
        nome: "Tocantins",
    },
    {
        nome: "Tocos do Moji",
    },
    {
        nome: "Toledo",
    },
    {
        nome: "Tombos",
    },
    {
        nome: "Tr\u00eas Cora\u00e7\u00f5es",
    },
    {
        nome: "Tr\u00eas Marias",
    },
    {
        nome: "Tr\u00eas Pontas",
    },
    {
        nome: "Tumiritinga",
    },
    {
        nome: "Tupaciguara",
    },
    {
        nome: "Turmalina",
    },
    {
        nome: "Turvol\u00e2ndia",
    },
    {
        nome: "Ub\u00e1",
    },
    {
        nome: "Uba\u00ed",
    },
    {
        nome: "Ubaporanga",
    },
    {
        nome: "Uberaba",
    },
    {
        nome: "Uberl\u00e2ndia",
    },
    {
        nome: "Umburatiba",
    },
    {
        nome: "Una\u00ed",
    },
    {
        nome: "Uni\u00e3o de Minas",
    },
    {
        nome: "Uruana de Minas",
    },
    {
        nome: "Uruc\u00e2nia",
    },
    {
        nome: "Urucuia",
    },
    {
        nome: "Vargem Alegre",
    },
    {
        nome: "Vargem Bonita",
    },
    {
        nome: "Vargem Grande do Rio Pardo",
    },
    {
        nome: "Varginha",
    },
    {
        nome: "Varj\u00e3o de Minas",
    },
    {
        nome: "V\u00e1rzea da Palma",
    },
    {
        nome: "Varzel\u00e2ndia",
    },
    {
        nome: "Vazante",
    },
    {
        nome: "Verdel\u00e2ndia",
    },
    {
        nome: "Veredinha",
    },
    {
        nome: "Ver\u00edssimo",
    },
    {
        nome: "Vermelho Novo",
    },
    {
        nome: "Vespasiano",
    },
    {
        nome: "Vi\u00e7osa",
    },
    {
        nome: "Vieiras",
    },
    {
        nome: "Virgem da Lapa",
    },
    {
        nome: "Virg\u00ednia",
    },
    {
        nome: "Virgin\u00f3polis",
    },
    {
        nome: "Virgol\u00e2ndia",
    },
    {
        nome: "Visconde do Rio Branco",
    },
    {
        nome: "Volta Grande",
    },
    {
        nome: "Wenceslau Braz",
    },
];

export default function Utils(){}
