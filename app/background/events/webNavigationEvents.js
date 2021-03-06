/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import actions from '../actions/webNavigationActions'

chrome.webNavigation.onBeforeNavigate.addListener(function ({tabId, url, frameId}) {
  const isMainFrame = frameId === 0
  actions.onBeforeNavigate(tabId, url, isMainFrame)
})
