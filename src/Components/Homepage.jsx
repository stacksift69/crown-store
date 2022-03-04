import React from 'react'
import './Homepage.styles.scss'

export default function Homepage() {
  return (
    <div className='homepage'>
          <div className='directory-menu div1'>
                <div className='menu-item'>
                      <div className='content'>
                            <h1 className='title'>Hats</h1>
                            <span className='subtitle'>Shop now</span>
                      </div>
                </div>  
          </div>
          <div className='directory-menu div2'>
                <div className='menu-item'>
                      <div className='content'>
                            <h1 className='title'>Jackets</h1>
                            <span className='subtitle'>Shop now</span>
                      </div>
                </div>
          </div>
          <div className='directory-menu div3'>
                <div className='menu-item'>
                      <div className='content'>
                            <h1 className='title'>Sneakers</h1>
                            <span className='subtitle'>Shop now</span>
                      </div>
                </div>
          </div>
          <div className='directory-menu div4'>
                <div className='menu-item'>
                      <div className='content'>
                            <h1 className='title'>Women</h1>
                            <span className='subtitle'>Shop now</span>
                      </div>
                </div>
          </div>
          <div className='directory-menu div5'>
                <div className='menu-item'>
                      <div className='content'>
                            <h1 className='title'>Men</h1>
                            <span className='subtitle'>Shop now</span>
                      </div>
                </div>
          </div>
    </div>
  )
}
