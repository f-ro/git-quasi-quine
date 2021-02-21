import { Link, useParams } from 'react-router-dom'
import './header.css'

const HeaderLink = ({ page, selected }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1)
    let className = selected ? 'headerlink-no-link ' : ''
    className += 'headerlink-title'
    return <Link to={`/${page}`} className={className}>
              {title}
              <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>•</div>
           </Link>
}

const Header = () => {
    const home_txt = 'Greetings, click on the navigation bar above to display project information'
    const page = useParams().page || ''
    return  <div>
              <div className='header'>
                  <HeaderLink page='commits' selected={page === 'commits'}/>
                  <HeaderLink page='profile' selected={page === 'profile'}/>
                  <HeaderLink page='extra' selected={page === 'extra'}/>
              </div>
              {page === '' ? <div className='home-div'>${home_txt}</div> : ''}
            </div>
  }
  
  export default Header