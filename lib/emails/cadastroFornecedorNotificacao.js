import mjml2html from "mjml";
import mailgun from "mailgun-js";

const criaEmailCadastroFornecedor = ({
  razaoSocial,
  pessoa,
  cnpjCpf,
  nomeFantasia,
  endereco,
  numero,
  complemento,
  bairro,
  cidade,
  uf,
  pais,
  cep,
  nomeRepresante,
  celular,
  fixo,
  funcao,
  emailPedidos,
  site,
  instagram,
  facebook,
  tweeter,
  whatsapp,
  ramoAtividade,
  cnae,
  contribuinteIcms
}) =>
  mjml2html(`
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-image width="240px" src="https://www.armazemfitstore.com.br/static/img/logo-afs.png"></mj-image>
            <mj-divider border-color="#dfdfdf"></mj-divider>
            <mj-text font-size="20px" color="#396349" font-family="helvetica">Novo Cadastro de Fornecedor</mj-text>
            <mj-table font-size="18px" cellpadding="5px">
              <tr>
                <td>Razao Social</td>
                <td>${razaoSocial}</td>
              </tr>
              <tr>
                <td>Pessoa (F/J)</td>
                <td>${pessoa}</td>
              </tr>
              <tr>
                <td>CNPJ/CPF</td>
                <td>${cnpjCpf}</td>
              </tr>
              <tr>
                <td>Nome Fantasia</td>
                <td>${nomeFantasia}</td>
              </tr>
              <tr>
                <td>Ramo de Atividade</td>
                <td>${ramoAtividade}</td>
              </tr>
              <tr>
                <td>CNAE</td>
                <td>${cnae}</td>
              </tr>
              <tr>
                <td>Contribuinte ICMS</td>
                <td>${contribuinteIcms}</td>
              </tr>
              <tr>
                <td>Site</td>
                <td>${site}</td>
              </tr>
              <tr>
                <td>Nome Represante</td>
                <td>${nomeRepresante}</td>
              </tr>
              <tr>
                <td>Telefone Celular</td>
                <td>${celular}</td>
              </tr>
              <tr>
                <td>Telefone Fixo</td>
                <td>${fixo}</td>
              </tr>
              <tr>
                <td>Whatsapp</td>
                <td>${whatsapp}</td>
              </tr>
              <tr>
                <td>Função</td>
                <td>${funcao}</td>
              </tr>
              <tr>
                <td>Email para Pedidos</td>
                <td>${emailPedidos}</td>
              </tr>
            </mj-table>
            <mj-text font-size="20px" color="#396349" font-family="helvetica">Endereço do Fornecedor</mj-text>
            <mj-table font-size="18px" cellpadding="5px">
            <tr>
              <td>Endereço</td>
              <td>${endereco} ${numero}</td>
            </tr>
            <tr>
              <td>Bairro</td>
              <td>${bairro}</td>
            </tr>
            <tr>
              <td>CEP</td>
              <td>${cep}</td>
            </tr>
            <tr>
              <td>Complemento</td>
              <td>${complemento}</td>
            </tr>
            <tr>
              <td>Cidade</td>
              <td>${cidade} - ${uf} - ${pais}</td>
            </tr>
            </mj-table>
            <mj-text font-size="20px" color="#396349" font-family="helvetica">Redes Sociais</mj-text>
            <mj-table font-size="18px" cellpadding="5px">
              <tr>
                <td>Facebook</td>
                <td>${facebook}</td>
              </tr>
              <tr>
                <td>Instagram</td>
                <td>${instagram}</td>
              </tr>
              <tr>
                <td>Tweeter</td>
                <td>${tweeter}</td>
              </tr>
            </mj-table>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `);

const dispararEmailNotificacaoFornecedor = async fornecedor => {
  const { html } = criaEmailCadastroFornecedor(fornecedor);

  const mg = mailgun({
    apiKey: process.env.MG_API_KEY,
    domain: process.env.MG_DOMAIN
  });

  const subject = "Cadastro de Fornecedor";
  const to = "fornecedores@armazemfitstore.com.br";

  const data = {
    from: "Armazém Fit Store <naoresponda@devarmazem.p9.digital>",
    to,
    // cc,
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

export default dispararEmailNotificacaoFornecedor;
