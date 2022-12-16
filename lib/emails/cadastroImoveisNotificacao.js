import mjml2html from "mjml";
import mailgun from "mailgun-js";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const criaEmailCadastroImoveis = ({
  nome,
  email,
  celular,
  telefone,
  cidade,
  uf,
  cep,
  endereco,
  numero,
  bairro,
  terreo,
  pavimento_um,
  pavimento_dois,
  nome_ofertante,
  imobiliaria,
  tipo_oferta,
  condominio,
  iptu,
  obs
}) =>
  mjml2html(`
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-image width="240px" src="https://www.armazemfitstore.com.br/static/img/logo-afs.png"></mj-image>
            <mj-divider border-color="#dfdfdf"></mj-divider>
            <mj-text font-size="20px" color="#396349" font-family="helvetica">Novo Cadastro de Imóvel</mj-text>
            <mj-table font-size="18px" cellpadding="5px">
              <tr>
                <td>Nome do Ofertante</td>
                <td>${nome_ofertante}</td>
              </tr>
              <tr>
                <td>imobiliaria</td>
                <td>${imobiliaria}</td>
              </tr>
              <tr>
                <td>Telefone</td>
                <td>${telefone}</td>
              </tr>
              <tr>
                <td>Celular</td>
                <td>${celular}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>${email}</td>
              </tr>
              <tr>
                <td>Data</td>
                <td>${format(new Date(), "dd 'de' MMMM 'de' yyyy", {
                  locale: ptBR
                })}</td>
              </tr>
            </mj-table>
            <mj-text font-size="20px" color="#396349" font-family="helvetica">Dados do Imóvel</mj-text>
            <mj-table font-size="18px" cellpadding="5px">
              <tr>
                <td>Nome</td>
                <td>${nome}</td>
              </tr>
              <tr>
                <td>Cidade/Estado</td>
                <td>${cidade}/${uf}</td>
              </tr>
              <tr>
                <td>CEP</td>
                <td>${cep}</td>
              </tr>
              <tr>
                <td>Logradouro</td>
                <td>${endereco}, ${numero}</td>
              </tr>
              <tr>
                <td>Bairro</td>
                <td>${bairro}</td>
              </tr>
            </mj-table>
            <mj-text font-size="20px" color="#396349" font-family="helvetica">Área Contruída (M²)</mj-text>
            <mj-table font-size="18px" cellpadding="5px">
              <tr>
                <td>Térreo</td>
                <td>${terreo}</td>
              </tr>
              <tr>
                <td>1 Pavimento</td>
                <td>${pavimento_um}</td>
              </tr>
              <tr>
                <td>2 Pavimento</td>
                <td>${pavimento_dois}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>${email}</td>
              </tr>
            </mj-table>
            <mj-text font-size="20px" color="#396349" font-family="helvetica">Valores</mj-text>
            <mj-table font-size="18px" cellpadding="5px">
              <tr>
                <td>Tipo de Oferta</td>
                <td>${tipo_oferta}</td>
              </tr>
              <tr>
                <td>Condomínio</td>
                <td>${condominio}</td>
              </tr>
              <tr>
                <td>IPTU Anual</td>
                <td>${iptu}</td>
              </tr>
              <tr>
                <td>Observações</td>
                <td>${obs}</td>
              </tr>
            </mj-table>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `);

const dispararEmailNotificacao = async contato => {
  const { html } = criaEmailCadastroImoveis(contato);

  const mg = mailgun({
    apiKey: process.env.MG_API_KEY,
    domain: process.env.MG_DOMAIN
  });

  const subject = "Cadastro de Imóvel";
  const to = "contato@armazemfitstore.com.br";

  const data = {
    from: "Armazém Fit Store <naoresponda@devarmazem.p9.digital>",
    to,
    cc: "leadsp9@armazemfitstore.com.br",
    bcc: "notificacaoleads@p9.digital",
    subject,
    html
  };

  const p = await mg
    .messages()
    .send(data)
    .then(
      d => {
        console.log(d);
        return d;
      },
      err => {
        console.log(err);
        return err;
      }
    );

  console.log(p);
};

export default dispararEmailNotificacao;
