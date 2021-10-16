import { ReadMoreContainer } from "../../styles/ReadMoreContainer";
import { useEffect, useState } from "react";
import { BlogList } from "./BlogList";

export const Blog = () => {
  const blogItemsContainer = [
    {
      id: "1",
      title: "Setembro/2021 - O início de mais uma pós graduação",
      text: "Mais um degrau da vida profissional começa a ser construído. Uma nova pós graduação é iniciada. Desta vez em uma das maiores Instituição Educacional do Brasil. Kelvin inicia a pós graduação em, Arquitetura de Software Distribuído, pela PUC Minas.",
    },
    {
      id: "2",
      title: "Agosto/2021 - Kelvin se junta a StartBio",
      text: "Kelvin foi convidado para compor o board da empresa StartBio e assumir o cargo de Software Engineering Lead. A Startbio Tecnologia é uma empresa jovem, arrojada e colaborativa focada no desenvolvimento de soluções especializadas em plataformas biométricas, “digital onboarding”, soluções “streaming”, assinaturas digitais, integrações sistêmicas e criptografia em renomadas corporações e instituições governamentais.",
    },
    {
      id: "3",
      title: "Outubro/2020 - Kelvin se torna um Take.Ser",
      text: "Kelvin se torna um Take.Ser ao se juntar ao time de Plataforma/Flow Building como SE. A Take é uma empresa focada em mensageria e na prospecção de outras empresas através de contatos inteligentes e chatbot. Através da plataforma BLiP, possibilita a construção, gestão e evolução dos mesmos e possui diversas integrações para ajudar e acelerar o processo"
    }
  ];

  return (
    <section>
      <h1 className="mv4 f2 black">Últimas do Blog</h1>
      <BlogList list={blogItemsContainer}></BlogList>
      <ReadMoreContainer>
        <a href="#">Ver tudo</a>
      </ReadMoreContainer>
    </section>
  );
};
