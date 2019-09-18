import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as serviceWorker from './serviceWorker'
import { ThingListProvider } from './contexts/ThingListContext'
import { ThingProvider } from './contexts/ThingContext'
import App from './components/App/App'
import './index.css'

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

import {
  faPenAlt,
  faBookOpen,
  faStar as fasStar,
  faGift,
  faGlobeAmericas,
  faComment,
  faListUl,
  faListOl,
  faQuoteLeft,
  
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGift, // logo
  faListUl, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft,
  farStar,
  fasStar,
)

const router = (
  <BrowserRouter>
    <ThingListProvider>
      <ThingProvider>
        <App />
      </ThingProvider>
    </ThingListProvider>
  </BrowserRouter>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)

serviceWorker.unregister()
