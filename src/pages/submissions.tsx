import { GetStaticProps } from 'next';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import YouTube from 'react-youtube';
import { Link } from '@material-ui/core';

function Submissions() {
  return (
    <div className="mx-auto w-full max-w-5xl flex flex-col">
      <h1 className="mt-8 text-2xl font-bold mx-4 lg:mx-0">
        Tutorial COBEP 2021 - Submissão do artigo final
      </h1>

      <div className="video-responsive mt-8">
        <YouTube
          videoId="8K64N9Wd0vM"
          opts={{
            playerVars: {},
          }}
        />
      </div>

      <div className="mt-4 mx-4 lg:mx-0">
        <span className="text-xl">Instruções:</span>

        <ul className="mt-2 mb-8 text-lg">
          <li>1. Entre no sistema de submissões: </li>
          <li className="mt-1">2. Confira todos seus dados no User Data</li>
          <ul className="ml-4">
            <li> - Lembre-se que a inscrição deve ser como AUTOR</li>
          </ul>
          <li className="mt-1">
            3. Efetue o pagamento, que pode ser realizado através de
          </li>
          <ul className="ml-4">
            <li> - Nota de Empenho</li>
            <li> - Cartão de Crédito </li>
            <li> - Boleto</li>
          </ul>
          <li className="mt-1">
            4. Verifique se o seu artigo atende as especificações informadas no
            website do evento
          </li>
          <li className="mt-1">
            5. Crie uma versão do pdf compatível com o IEEE Xplore utilizando o
            PDF eXpress, para isso:
          </li>
          <ul className="ml-4">
            <li>
              a. Acesse:{' '}
              <Link
                href="https://ieee-pdf-express.org/account/login"
                target="_blank"
              >
                https://ieee-pdf-express.org/account/login
              </Link>
            </li>
            <li> b. Crie uma conta</li>
            <ul className="ml-4">
              <li> - Conference ID: 53665X</li>
              <li> - Complete com seus dados</li>
            </ul>
            <li>
              c. Submeta o arquivo pdf do seu artigo no PDF eXpress para
              conversão
            </li>
            <li>
              d. Confira o status da submissão: se foi bem-sucedida ou se
              algumas alterações são necessárias.
            </li>
            <li>
              e. Uma versão pdf será gerada, verifique se está tudo correto
            </li>
          </ul>
          <li className="mt-1">
            6. Retorne para o sistema de submissões, e na aba Submissions{' '}
          </li>
          <ul className="ml-4">
            <li> a. Entre no seu artigo aceito</li>
            <li>
              b. Coloque o documento (mesmo usado no cadastro do sistema) do
              autor/coautor que efetuou o pagamento da inscrição
            </li>
            <li> c. Clique em: Submit or edit the final submission</li>
            <ul className="ml-4">
              <li> - Confira todos os dados de submissão</li>
              <li> - Adicione o arquivo pdf gerado PDF eXpress</li>
              <li> - Clique em Save</li>
            </ul>
            <li> d. Clique em: Copyright your article</li>
            <ul className="ml-4">
              <li> - Clique em Submit</li>
              <li> - Leia cuidadosamente, e preencha os dados necessário</li>
            </ul>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'footer',
      'common',
      'languageSwitcher',
      'submissions',
    ])),
  },
});

export default Submissions;
