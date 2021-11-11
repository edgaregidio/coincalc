import React from "react";
import { Block, Avatar } from "./styles";

export default function BlockCrypto({ name, symbol, image, currentprice }) {
  return (
    <Block>
      <Avatar>
        {/* <AvatarCrypto
            src={image}
            objectFit={"cover"}
            // layout={"fixed"}
            alt="teste"
            sizes={"2vw"}
            className={"avatar--Crypto"}
          /> */}
        <img src={image} alt="imagem da cripto" />
      </Avatar>

      <h2>{name}</h2>
      <h3>({symbol})</h3>
      <p>${currentprice}</p>
    </Block>
  );
}
