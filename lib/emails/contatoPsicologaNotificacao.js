import mjml2html from "mjml";
import mailgun from "mailgun-js";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const criaEmailNotificaoAgendamento = ({ nome, email, mensagem }) =>
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

  const subject = "Fale com a Psicóloga";

  const data = {
    from: "Armazém Fit Store <naoresponda@devarmazem.p9.digital>",
    to: "julia.lucena@afsfranchising.com.br",
    cc: "daiany.nardi@afsfranchising.com.br",
    "h:Reply-To": contato.email,
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
