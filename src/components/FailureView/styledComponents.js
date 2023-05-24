import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureViewImg = styled.img`
  width: 70%;
  max-width: 300px;
`
export const FailureViewText = styled.h1`
  color: ${props => (props.isDark ? '#f1f1f1' : '#1e293b')};
  font-size: 20px;
`
export const FailureViewDesc = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
  font-size: 16px;
`
export const RetryBtn = styled.button`
  color: #f1f1f1;
  font-size: 16px;
  height: 40px;
  width: 80px;
  border-radius: 5px;
  background-color: #4f46e5;
`
import styled from 'styled-components'

export const GamingVideoItem = styled.li`
  width: 150px;
  margin-bottom: 60px;
  margin-right: 15px;
  @media (min-width: 576px) {
    width: 170px;
  }
  @media (min-width: 768px) {
    width: 250px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`
export const Title = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
`
export const Text = styled.p`
  color: #475569;
  font-weight: 400;
  font-size: 15px;
  margin: 0;
  line-height: 20px;
`
