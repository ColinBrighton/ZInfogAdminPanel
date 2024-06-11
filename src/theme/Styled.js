import styled from "styled-components";
import { THEME } from ".";

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${THEME.TABLET} {
    width: 750px;
  }

  @media ${THEME.LAPTOP} {
    width: 970px;
  }

  @media ${THEME.LAPTOPL} {
    width: 1170px;
  }
`

export const ContainerFluid = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`

export const Section= styled.section`
  position:relative;
`
