// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

import IconArrow from 'react-icons/lib/fa/caret-right'
import React from 'react'

import Strong from '../Strong'
import TextLink from '../TextLink'

import styles from './index.css'


/**
 *
 */
const NextSection = ({title, url}) => (
  <div className={styles.nextSection}>
    <Strong>Next:</Strong> {' '}
    <TextLink to={url}>
      {title} <IconArrow />
    </TextLink>
  </div>
)

NextSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
}

export default NextSection
