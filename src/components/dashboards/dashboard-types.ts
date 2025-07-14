export type SensorData = {
    dissolvedOxygen: number;
    ph: number;
    tds: number;
    temperature: number;
    timestamp: string;
    turbidity: number;
    dissolvedOxygenStatus: Status;
    phStatus: Status;
    tdsStatus: Status;
    temperatureStatus: Status;
    turbidityStatus: Status;
};

export type Status = "good" | "alarming" | "critical";

export type SensorType = "temperature" | "ph" | "tds" | "dissolvedOxygen" | "turbidity" | "all";

export const explanations: Record<string, string> = {
    "Temperatura":
        "A temperatura da água influencia diretamente a vida no ecossistema aquático. É um dos fatores mais importantes porque afeta tanto a quantidade de oxigénio que pode ser dissolvido na água como o funcionamento do corpo dos seres vivos, como peixes, plantas e microrganismos.\n\n" +
        "A temperatura é medida em graus Celsius (ºC), uma unidade que indica o quão quente ou fria está a água. Valores muito altos ou muito baixos afetam o equilíbrio biológico.\n\n" +
        "Se a água estiver demasiado quente, há menos oxigénio disponível, o que pode sufocar os peixes. Se estiver muito fria, os processos biológicos (como a alimentação e reprodução) tornam-se mais lentos, afetando o equilíbrio do ecossistema.\n\n" +
        "Para ambientes tropicais como o Lago da Comunidade do Catalão, a temperatura ideal situa-se entre 24 ºC e 30 ºC. Fora desse intervalo, a água pode tornar-se imprópria para a fauna e flora locais, além de afetar o seu uso para lazer ou outras atividades humanas.",

    "pH":
        "O pH indica se a água é ácida, neutra ou básica. Esta medida é fundamental porque muitos organismos aquáticos sobrevivem apenas dentro de um intervalo específico de pH.\n\n" +
        "O pH não tem unidade; é uma escala numérica que vai de 0 a 14. Valores abaixo de 7 indicam acidez, 7 é neutro, e acima de 7 indica alcalinidade.\n\n" +
        "Um pH demasiado ácido (baixo) ou demasiado básico (alto) pode ser tóxico para peixes e plantas aquáticas. Também pode indicar contaminação por produtos químicos ou resíduos industriais.\n\n" +
        "O intervalo ideal de pH para ecossistemas de água doce é entre 6,5 e 8,5. Fora deste intervalo, a água pode tornar-se prejudicial à vida aquática e inadequada para consumo humano.",

    "TDS":
        "O TDS mede a quantidade de minerais, sais e outras partículas dissolvidas na água. Estes sólidos podem vir de fontes naturais ou da atividade humana, como fertilizantes, esgotos e resíduos industriais.\n\n" +
        "É medido em partes por milhão (ppm), o que indica quantas partes de sólidos existem por milhão de partes de água. Quanto maior o valor, mais concentrada está a água.\n\n" +
        "Valores muito baixos podem significar que a água tem poucos nutrientes essenciais para plantas aquáticas. Por outro lado, valores muito altos podem indicar poluição, tornando a água imprópria para beber, cozinhar ou regar.\n\n" +
        "O intervalo ideal situa-se geralmente entre 100 e 500 ppm para manter a qualidade ecológica e a utilidade da água para consumo humano ou agrícola.",

    "Oxigénio Dissolvido":
        "Este parâmetro mede a quantidade de oxigénio disponível na água. Os peixes e outros seres vivos respiram esse oxigénio através das brânquias ou da pele, sendo essencial para a sua sobrevivência.\n\n" +
        "É medido em miligramas por litro (mg/L), o que representa a quantidade de oxigénio dissolvido em cada litro de água. Quanto maior o valor, mais oxigénio está disponível.\n\n" +
        "Se os níveis forem muito baixos, os organismos aquáticos podem morrer por falta de ar. Níveis excessivamente altos também podem causar problemas, como a formação de bolhas de gás nos tecidos dos peixes.\n\n" +
        "O intervalo ideal para a maioria dos ecossistemas tropicais de água doce está entre 5 e 8 mg/L, o que indica uma boa qualidade da água e garante um ambiente saudável para a fauna aquática.",

    "Turbidez":
        "A turbidez mede o quão clara ou turva está a água, ou seja, a quantidade de partículas em suspensão como lama, areia, restos de plantas ou poluição.\n\n" +
        "É medida em NTU (Unidades Nefelométricas de Turbidez), que indicam a quantidade de luz que é desviada pelas partículas na água — quanto maior o valor, mais turva está a água.\n\n" +
        "Uma água muito turva bloqueia a luz solar, dificultando a fotossíntese das plantas aquáticas. Também pode entupir as brânquias dos peixes e estar associada a riscos microbiológicos.\n\n" +
        "Idealmente, a turbidez deve ser reduzida para que a água seja considerada limpa e segura tanto para os ecossistemas como para o uso humano.",
};

export type PeriodOption = '1h' | '3h' | '6h' | '12h' | '1d' | '3d' | '7d' | '30d' | '90d' | '180d' | '1y';

export const COLORS: Record<SensorType, string> = {
    temperature: "#ff7300",
    ph: "#8884d8",
    tds: "#00C49F",
    dissolvedOxygen: "#0088FE",
    turbidity: "#FF0000",
    all: "#000000",
};

export const LABELS: Record<SensorType, string> = {
    temperature: "Temperatura (ºC)",
    ph: "pH",
    tds: "TDS (ppm)",
    dissolvedOxygen: "Oxigénio Dissolvido (mg/L)",
    turbidity: "Turbidez (NTU)",
    all: "Todos os Parâmetros",
};