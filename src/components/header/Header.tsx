import React from 'react'

import { ReactComponent as Logo } from 'img/icon.svg';
import { ReactComponent as Title } from 'img/title.svg';
import Button from './atomic/Button';
export default function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <Logo/>
            <Title/>
        </div>

    <div className="header_right">
      <Button text="Sign in" classname="sign-in-button"/>
      <Button text="Create free account" classname="create-account-button"/>
    </div>
    </div>
  )
}
