import ReactDOM from 'react-dom'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import App from './App'



ReactDOM.render(
  <>
    <App />

    {/*<Logo  style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />*/}
      <div>
          <img src="/logoMy.png" alt="img" style={{ position: 'absolute', bottom: 40, left: 40, width: 120 }}/>
      </div>

  </>,
  document.getElementById('root')
)
