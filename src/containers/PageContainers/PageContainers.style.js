import styled from 'styled-components';

export const PageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const InnerPageContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  `;

