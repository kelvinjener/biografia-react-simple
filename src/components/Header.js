import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenu } from "./MainMenu";

export const Header = () => (
  <HeaderContainer>
    <MainMenu />
    <div className="">
      <div className="cf ph2-ns">
        <div className="pv4 w-100">
          <div className="flex items-center justify-center">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGDetfQ2tIYOw/profile-displayphoto-shrink_200_200/0/1630742460398?e=1639612800&v=beta&t=Ik-heGSTw9Bdxv8S2OmM-FDd1ib3LNgNPdANrO8eM-I"
              className="br-100 h4 w4 "
              alt="avatar"
            />

            <div className="mh5">
              <h1 className="tl db f2 white mb4">Kelvin Jener de Lima</h1>
              <span className="tl f5 db lh-copy measure white">
              Pós graduação em andamento pela PUC Minas, em Arquitetura de Software Distribuídos, 
              pós graduado em Gestão de Projetos, Bacharel em Ciência da Computação pela Faculdade Pitágoras e técnico em Microinformática pelo SENAI-IEL, 
              atuo como analista de sistemas desde 2011, o qual desenvolvi e mantive várias aplicações Web utilizando tecnologias Microsoft, desde o ASP Clássico até o .NET Core.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </HeaderContainer>
);
