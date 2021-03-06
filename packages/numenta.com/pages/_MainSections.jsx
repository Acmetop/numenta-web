// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import findIndex from 'lodash/findIndex'
import React from 'react'
import root from 'window-or-global'

import {hasSessionStorage} from 'numenta-web-shared-utils/lib/client'
import Section from 'numenta-web-shared-components/lib/Section'

import SectionNeuroscience
  from './neuroscience-research/_Section'
import SectionBusiness
  from './machine-intelligence-technology/licensing-and-partners/_Section'
import SectionCareers from './company/careers-and-team/_Section'
import SectionContact from './contact/_Section'
import SectionHome from './_Section'
import SectionMission from './company/mission-and-history/_Section'
import SectionNutshell
  from './machine-intelligence-technology/numenta-in-a-nutshell/_Section'
import SectionOpensource from './resources/open-source-community/_Section'
import SectionPapers from './resources/videos-podcasts-and-more/_Section'
import SectionTechnology from './machine-intelligence-technology/_Section'
import SectionPublications
  from './neuroscience-research/research-publications/_Section'

const MAIN_SECTION_LIST = [
  {
    component: <SectionHome key="sectionHome" />,
    title: 'Where Neuroscience Meets Machine Intelligence',
    url: '/',
  },
  {
    component: <SectionNutshell key="sectionNutshell" />,
    title: 'Numenta in a Nutshell',
    url: '/machine-intelligence-technology/numenta-in-a-nutshell/',
  },
  {
    component: <SectionMission key="sectionMission" />,
    title: 'Mission & History',
    url: '/company/mission-and-history/',
  },
  {
    component: <SectionNeuroscience key="sectionNeuroscience" />,
    title: 'Neuroscience Research',
    url: '/neuroscience-research/',
  },
  {
    component: <SectionPublications key="sectionPublications" />,
    title: 'Research Publications',
    url: '/neuroscience-research/research-publications/',
  },
  {
    component: <SectionTechnology key="sectionTechnology" />,
    title: 'Machine Intelligence Technology',
    url: '/machine-intelligence-technology/',
  },
  {
    component: <SectionOpensource key="sectionOpensource" />,
    title: 'Open Source Community',
    url: '/resources/open-source-community/',
  },
  {
    component: <SectionPapers key="sectionResources" />,
    title: 'Videos, Podcasts and More',
    url: '/resources/videos-podcasts-and-more/',
  },
  {
    component: <SectionBusiness key="sectionBusiness" />,
    title: 'Licensing & Partners',
    url: '/machine-intelligence-technology/licensing-and-partners/',
  },
  {
    component: <SectionCareers key="sectionCareers" />,
    title: 'Careers & Team',
    url: '/company/careers-and-team/',
  },
  {
    component: <SectionContact key="sectionContact" />,
    title: 'Contact',
    url: '/contact/',
  },
]

/**
 * Get the next MainSection in order.
 * @param {Object} current - MainSection object to use as `current`.
 * @public
 * @returns {Object} - Next MainSection in order after `current`.
 */
function getNextSection(current) {
  const nextIndex = findIndex(MAIN_SECTION_LIST, (item) => (
    current.key === item.component.key
  ))

  if (nextIndex >= 0) {
    return MAIN_SECTION_LIST[nextIndex + 1]
  }
  return null
}


/**
 * MainSections aggregator for Single-Page-App-style Homepage and Site.
 *  These are only shown to modern advanced clients and browsers, more details
 *  in `README.md`.
 */
const MainSections = ({current}) => {
  const details = {}
  const mainComponents = MAIN_SECTION_LIST.map(({component, title, url}) => {
    const {key} = component
    details[key] = {title, url}
    return component
  })
  const childrenWithProps = React.Children.map(
    mainComponents,
    (Component) => {
      const {key} = Component
      const {title, url} = details[key]
      const isHome = (key === 'sectionHome')
      const isStored = hasSessionStorage() &&
        (root.sessionStorage.getItem(url) === 'open')
      const open = (key === current.key) || isHome || isStored
      return (
        <Section
          headline={isHome}
          id={key}
          key={key}
          open={open}
          title={title}
          url={url}
        >
          {Component}
        </Section>
      )
    }
  )

  return (
    <div>
      {childrenWithProps}
    </div>
  )
}

MainSections.propTypes = {
  current: React.PropTypes.element.isRequired,
}

export {getNextSection, MAIN_SECTION_LIST, MainSections as default}
