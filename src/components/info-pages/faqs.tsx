import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './info.css';

const faqs = [
  {
    question: 'O que é este projeto?',
    answer: 'Este projeto consiste num sistema inteligente para monitorizar a qualidade da água de um lago. Utiliza sensores para recolher dados relevantes e apresenta as informações em tempo real, de forma clara e acessível, através de uma aplicação digital.'
  },
  {
    question: 'Que parâmetros da água são medidos?',
    answer: 'São medidos cinco elementos fundamentais: temperatura, pH (acidez da água), oxigénio dissolvido, sólidos dissolvidos totais (TDS) e condutividade elétrica. Estes indicadores ajudam a avaliar a saúde do ecossistema aquático.'
  },
  {
    question: 'Onde está a ser utilizado este sistema?',
    answer: 'O sistema encontra-se em funcionamento num lago na região de Catalão, no estado do Amazonas. A tecnologia utilizada permite que seja facilmente adaptado a outros locais com características semelhantes.'
  },
  {
    question: 'Como é que os dados são transmitidos?',
    answer: 'A informação recolhida pelos sensores é enviada através de ondas de rádio (tecnologia LoRa) para um pequeno computador (Raspberry Pi), que está instalado em terra firme. Esse computador recebe os dados e transmite-os para a aplicação, onde são atualizados em tempo real.'
  },
  {
    question: 'É necessário acesso à internet para funcionar?',
    answer: 'Não. A comunicação entre o dispositivo e o servidor é feita por rádio, sem depender da internet. No entanto, a visualização remota dos dados poderá requerer ligação à rede.'
  },
  {
    question: 'O sistema precisa de estar ligado à eletricidade?',
    answer: 'Não é necessário. O equipamento é auto-sustentável, sendo alimentado por energia solar, o que lhe permite funcionar de forma autónoma e ecológica durante longos períodos.'
  },
  {
    question: 'Quem pode aceder aos dados?',
    answer: 'Qualquer pessoa com acesso ao sistema pode consultar os dados recolhidos. A apresentação dos dados foi pensada para ser intuitiva, mesmo para utilizadores com pouca experiência em tecnologia.'
  },
  {
    question: 'Porque é importante monitorizar a qualidade da água?',
    answer: 'A monitorização contínua da água permite identificar problemas ambientais com antecedência, ajudando a proteger a fauna, a flora e as comunidades humanas que dependem desses recursos. Também contribui para a tomada de decisões mais informadas em projetos ambientais e políticas públicas.'
  },
  {
    question: 'Este sistema pode ser utilizado noutros locais?',
    answer: 'Sim. A arquitetura do projeto foi desenvolvida para ser modular e flexível, o que facilita a sua implementação noutros lagos, rios ou até em tanques de aquacultura.'
  },
  {
    question: 'Como posso saber mais ou colaborar com o projeto?',
    answer: 'Estamos disponíveis para parcerias e colaborações com instituições, comunidades e investigadores interessados. Poderá entrar em contacto connosco através da secção de contacto da aplicação.'
  }
];

export default function FAQS() {
  return (
    <div className="faq-section">
      <Typography variant="h4" gutterBottom>
        Perguntas Frequentes (FAQ)
      </Typography>
      <Box className="faq-container">
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </div>
  );
}
