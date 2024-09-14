import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GithubUser from './GithubUser'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GithubUser />
  </StrictMode>,
)
