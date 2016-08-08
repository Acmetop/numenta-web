import React from 'react'

import {trims} from '../../utils/shared'

import DefineItem from '../DefineItem'
import DefineList from '../DefineList'
import DefineTitle from '../DefineTitle'
import Logo from '../Logo'
import Spacer from '../Spacer'
import Tag from '../Tag'
import TextLink from '../TextLink'

import styles from './index.css'


const Glance = (props, context) => {
  const {config} = context
  const {links} = config
  const data = {
    About: trims`Numenta develops machine intelligence technology based on
            neocortical theory.`,
    Established: 'Feb 4, 2005',
    Location: 'Redwood City, CA',
    Employees: '15 — 20',
    Business: 'Licensing',
    Type: 'Private',
    Media: (
      <span>
        <TextLink to={links.in.blog}>Blog</TextLink>
        <Spacer />
        <TextLink to={links.in.events}>Events</TextLink>
        <Spacer />
        <TextLink to={links.in.newsletter}>Newsletter</TextLink>
        <Spacer />
        <TextLink to={links.in.press}>Press</TextLink>
      </span>
    ),
    Latest: (
      <TextLink to={links.in.htmstudio}>
        Numenta releases HTM Studio! <Tag>New</Tag>
      </TextLink>
    ),
  }
  let defs = []

  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      defs.push(
        <DefineTitle key={`DefineTitle-${key}`}>
          {key}
        </DefineTitle>
      )
      defs.push(
        <DefineItem key={`DefineItem-${key}`}>
          {data[key]}
        </DefineItem>
      )
    }
  }

  return (
    <aside className={styles.glance}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <DefineList direction="horizontal">
        {defs}
      </DefineList>
    </aside>
  )
}

Glance.contextTypes = {
  config: React.PropTypes.object,
}

export default Glance
