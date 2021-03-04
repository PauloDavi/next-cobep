import Image from 'next/image';
import { Card, Grid, Typography } from '@material-ui/core';
import { useTranslation } from '../../i18n';
import { GetStaticProps } from 'next';
import Head from 'next/head';

const Models = () => {
  const { t } = useTranslation('models');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className="mt-24">
        <h1 className="text-gray-600 text-6xl sm:text-8xl text-center">
          {t('MODELS_LABEL')}
        </h1>
        <div className="mt-5mb-5 w-full px-8 py-5 text-white text-md leading-none">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="flex justify-center">
                <Card elevation={5} className="px-5 pb-8 pt-5 h-full max-w-lg">
                  <div className="text-xl font-bold text-center mb-5">
                    <Typography variant="h5" color="secondary">
                      {t('PAPERS_LABEL')}
                    </Typography>
                  </div>
                  <p className="text-lg font-semibold">
                    Instruções de elaboração do resumo
                  </p>
                  <p className="mt-5">
                    Os autores devem enviar o resumo com coluna simples,
                    espaçamento simples e no máximo quatro (4) páginas (as
                    referências não contam nas 4 páginas), resumindo o artigo
                    proposto. O resumo deve incluir as principais equações,
                    figuras, tabelas e referências conforme apropriado, mas sem
                    nomes de autores ou afiliações. Os resumos que não estiverem
                    em conformidade com esses requisitos serão rejeitados sem
                    revisão. Os resumos devem indicar claramente os objetivos do
                    trabalho, sua importância no avanço do estado da arte e os
                    métodos e resultados específicos em detalhes suficientes.
                    Todos os resumos passarão por um processo duplo-cego de
                    revisão por pares para garantir uma revisão confidencial e
                    justa.
                  </p>
                  <p className="mt-5">
                    Os autores que desejarem publicar seus artigos na Biblioteca
                    Digital IEEE Xplore, devem enviar os artigos da versão final
                    estendida. (Modelo a ser disponibilizado)
                  </p>
                  <p className="mt-5">
                    Consulte o site da conferência para obter uma lista
                    detalhada de tópicos técnicos e o método de envio de resumo.
                  </p>
                  <p className="mt-8 font-semibold">
                    Recapitulação dos requisitos - certifique-se de que:
                  </p>
                  <ul className="list-inside list-disc">
                    <li className="mt-2">
                      O resumo não inclui nomes ou afiliações dos autores
                    </li>
                    <li className="mt-2">
                      O resumo tem no máximo quatro (4) páginas
                    </li>
                    <li className="mt-2">O resumo com coluna simples</li>
                    <li className="mt-2">
                      O resumo com espaçamento de linha simples
                    </li>
                    <li className="mt-2">
                      O resumo usa fontes de pelo menos 11pt (de preferência
                      12pt)
                    </li>
                    <li className="mt-2">
                      O resumo é enviado por meio do Portal de envio de resumos.
                      O prazo de envio de resumos pode ser consultado no site.
                    </li>
                  </ul>
                  <p className="mt-8 font-semibold">Modelos</p>
                  <ul className="list-inside list-disc">
                    <li className="mt-2">
                      <a
                        href="/documents/COBEP2021_Digest_Template_word.docx"
                        download="COBEP2021_Digest_Template_word.docx"
                        className="underline text-yellow-600"
                      >
                        modelo.docx
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="/documents/COBEP-digest-latex-template.zip"
                        download="COBEP-digest-latex-template.zip"
                        className="underline text-yellow-600"
                      >
                        modelo.tex
                      </a>
                    </li>
                  </ul>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="flex justify-center">
                <Card
                  elevation={5}
                  className="text-center px-5 pb-8 pt-5 h-full max-w-lg w-full"
                >
                  <div className="text-xl text-center mb-5">
                    <Typography variant="h5" color="secondary">
                      {t('TUTORIALS_LABEL')}
                    </Typography>
                  </div>
                  <p>Em breve...</p>
                  {/* <p className="mt-5">{t('TUTORIALS_SECONDARY_TEXT_LABEL')}</p> */}
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['models', 'common'],
    },
  };
};

export default Models;
