import styled from 'styled-components'

export const MetricTableContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const SessionButtons = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.black};
  align-items: self-end;
  padding-left: 1rem;
`

export const SessionButton = styled.div`
  margin-left: 1rem;
`

export const SessionCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  align-items: space-between;
  justify-content: space-between;
  flex-flow: row wrap;
`
