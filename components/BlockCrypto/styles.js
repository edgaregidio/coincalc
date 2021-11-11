import styled from "styled-components";

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #fff; */
  min-width: 2.2rem;
  min-height: 2.2rem;
  border-radius: 50%;
  display: flex;
  flex-direction: center;
  align-items: center;
  align-self: center;
  margin-right: 1rem;
  overflow: hidden;

  h1 {
    font-size: 1rem;
  }

  .avatar--Crypto {
    border-radius: 50%;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 2rem;

  h1,
  h2,
  h3,
  p {
    margin-right: 0.5rem;
  }

  h2 {
    font-size: 1.125rem;
  }

  h3 {
    text-transform: uppercase;
    /* margin-left: 5rem; */
  }
  p {
    color: #6b6b6b;
    font-weight: 500;
  }
`;
