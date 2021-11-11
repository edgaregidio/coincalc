import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  color: #fff;
  margin: 0;
  padding: 2rem;
  top: 0;
  background: #002821;
  min-width: 20rem;
  height: 100vh;

  .images--top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 4rem;
  }
  .items--menu {
    margin-top: 2rem;
    width: 85%;
  }
  .btn--menu {
    display: flex;
    margin: 1rem 0;
    align-items: center;
    cursor: pointer;

    h1 {
      font-size: 1.125rem;
    }
  }

  .btn--menu:hover {
  }
`;

export const Logo = styled(Image)``;
export const LogoTitle = styled(Image)``;
