import React from "react";
import { Container, Logo, LogoTitle } from "./styles";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import logocc from "../../public/icone.png";
import logoname from "../../public/logoname.png";

export default function Menu() {
  return (
    <Container>
      <div className="images--top">
        <Logo
          src={logocc}
          alt="Logo CoinCalc"
          layout="fixed"
          width={40}
          height={50}
        />
        <LogoTitle
          src={logoname}
          alt="Logo CoinCalc"
          layout="fixed"
          width={150}
          height={25}
        />
      </div>
      <div className="items--menu">
        <div className="btn--menu">
          <FontAwesomeIcon
            icon={faExchangeAlt}
            style={{ margin: "0 1.5rem 0 0" }}
          />
          <h1>Crypto to Coin</h1>
        </div>
        <div className="btn--menu">
          <FontAwesomeIcon
            icon={faExchangeAlt}
            style={{ margin: "0 1.5rem 0 0" }}
          />
          <h1>Crypto to Crypto</h1>
        </div>
        <div className="btn--menu">
          <FontAwesomeIcon
            icon={faExchangeAlt}
            style={{ margin: "0 1.5rem 0 0" }}
          />
          <h1>Coin to Coin</h1>
        </div>
      </div>
    </Container>
  );
}
