/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import actions from '../actions/shieldsPanelActions'

// Listen to onBlocked events and forward them to the resourceBlocked action
chrome.braveShields.onBlocked.addListener(function (detail) {
  actions.resourceBlocked(detail)
})