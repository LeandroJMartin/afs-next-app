import mjml2html from "mjml";
import mailgun from "mailgun-js";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const criaEmailNotificaoAgendamento = ({ nome, email, celular, mensagem }) =>
  mjml2html(`
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-image width="240px" src="https://www.armazemfitstore.com.br/static/img/logo-afs.png"></mj-image>
            <mj-divider border-color="#dfdfdf"></mj-divider>
            <mj-text font-size="20px" color="#396349" font-family="helvetica">Novo contato via site</mj-text>
            <mj-table font-size="18px" cellpadding="5px">
              <tr>
                <td>Nome</td>
                <td>${nome}</td>
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
            <mj-text font-size="18px">Mensagem: ${mensagem}</mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `);

const dispararEmailNotificacao = async contato => {
  const { html } = criaEmailNotificaoAgendamento(contato);

  const mg = mailgun({
    apiKey: process.env.MG_API_KEY,
    domain: process.env.MG_DOMAIN
  });

  const subject =
    contato.type === "contato"
      ? `Contato - ${contato.assunto}`
      : contato.assunto == "Assessoria de Imprensa"
      ? "Contato - Assessoria de Imprensa"
      : "Fale com a Nutri";

  const to =
    contato.type === "contato"
      ? "contato@armazemfitstore.com.br"
      : contato.assunto == "Assessoria de Imprensa"
      ? ["teresa.silva@2pro.com.br", "myrian.vallone@2pro.com.br"]
      : "esther@esthervitorazzi.com.br";

  const cc =
    contato.assunto == "Assessoria de Imprensa"
      ? "lucasq@armazemfitstore.com.br"
      : "leadsp9@armazemfitstore.com.br";

  const data = {
    from: "Armazém Fit Store <naoresponda@devarmazem.p9.digital>",
    to,
    cc,
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
