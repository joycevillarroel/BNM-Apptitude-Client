import styled from 'styled-components'

export type IVariation = 'primary' | 'secondary'

interface ICardContainerProps {
  variation: IVariation
}

export const CardContainer = styled.div`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.gray200};
`

export const SubContainer = styled.div`
  width: 300px;
  display: flex;
  padding-left: 16px;
  padding-top: 16px;
`

export const NameContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding-left: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
`

export const NameText = styled.text`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
`
export const CountContainer = styled.div`
  border-right: 3px solid ${({ theme }) => theme.black};
  padding-right: 8px;
`

export const Count = styled.text`
  color: ${({ theme }) => theme.black};
  width: 20px;
  font-size: 30px;
`
export const Percentile = styled.text<ICardContainerProps>`
  color: ${({ theme, variation }) => theme[variation]};
  font-size: 30px;
  padding-left: 16px;
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding-left: 16px;
`
export const IconText = styled.text`
  color: ${({ theme }) => theme.gray};
  font-size: 10px;
`
export const Icon = styled.img`
  width: 16px;
`

export const PerformaceBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  margin-top: 8px;
`

export const Performance = styled.text`
  color: ${({ theme }) => theme.gray200};
  font-size: 10px;
`
export const PerformanceNumber = styled.text<ICardContainerProps>`
  color: ${({ theme, variation }) => theme[variation]};
  font-size: 10px;
`
