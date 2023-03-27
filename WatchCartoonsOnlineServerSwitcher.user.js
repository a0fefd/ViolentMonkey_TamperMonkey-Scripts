// ==UserScript==
// @name        Watch Cartoons Online Stream Server Switcher
// @namespace   Violentmonkey Scripts
// @match       https://watchcartoonsonline.eu/episode/*/
// @grant       none
// @version     1.0
// @author      nbslay
// @description Switches the Streaming Server to Hydrax (better loading) - 26/03/2023
// ==/UserScript==

if (window.location.search == "") {
  window.location.search = "server=openload";
}
