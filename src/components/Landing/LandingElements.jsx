import styled from "styled-components";

export const LandingWrapper = styled.div`
  
color: #fff;
position: relative;
display: flex;
min-height:100%;
position:fixed;
overflow-y:scroll;
scrollbar:hidden;
overflow-x:hidden;

  @media (max-width: 1024px) {
    transform: scale(0.8) transform(200px);
  }
  @media (max-width: 800px) {
    transform: scale(0.7) transform(600px);
  }
  @media (max-width: 600px) {
    transform: scale(0.5) transform(-100px);
    right: auto;
    left: 50%;
    height: 100%;
    margin-left: -600px;
  }
  @media (max-width: 375px) {
    transform: scale(0.5) transform(-50px);
    width:375px;

  }
}
`;

export const Content = styled.div`
  position: absolute;
  top: 30px;
  flex-direction: column;
  gap: 70px;
  scrollbar:hidden;

  @media (max-width: 1024px) {
    transform: scale(0.8) transform(200px);
  }
  @media (max-width: 800px) {
    transform: scale(0.7) transform(600px);
  }
  @media (max-width: 600px) {
    transform: scale(0.5) transform(-100px);
    right: auto;
    left: 50%;
    margin-left: -600px;
  }
  @media (max-width: 375px) {
    transform: scale(0.5) transform(-50px);
    width:375px;

  }
  p {
    line-height: 1.8;
    font-size: 1.05rem;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    border-radius: 20px;
    width: 650px;
    height: 420px;
    display: flex;
    margin-top: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(244, 213, 4, 0.37);
    backdrop-filter: blur(15px);

    margin: 50px 30px 0 680px;
    width:680px;
    padding:20px ;


    @media (max-width: 1024px) {
      margin: 1rem;
    width:57rem;
    padding:20px ;
    color: #fff;
    
    }
    @media (max-width: 800px) {
      margin: 1rem;
    width:42rem;
    padding:20px ;
    color: #fff;
    }
    @media (max-width: 600px) {
      margin: 1rem;
    width:23rem;
    padding:20px ;
    height: 36rem;
    color: #fff;
    font-size: 1.25rem;
    height:50rem;
    margin-top:0rem;

    }
    @media (max-width: 375px) {
      transform: scale(0.5) transform(-50px);
      width:23rem;
      height: 10rem;
  
    }
  }

  h1{
    margin: 70px 30px 0 800px;
    font-size: 1.75rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 100px;
  align-items: center;
  padding: 0;
  margin: 0 30px 0 100px;
  font-size: 1rem;
  flex-direction: row;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 50px;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 8px 20px;
    border-radius: 14px;

    // &:hover {
    //   border: 1px solid rgba(255, 255, 255, 0.5);
    // }
  }
`;
