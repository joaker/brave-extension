/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import {bindActionCreators} from 'redux'
import store from '../store'
import * as newTabPageActions from '../../actions/newTabPageActions'
export default bindActionCreators(newTabPageActions, store.dispatch)
