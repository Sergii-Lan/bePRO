/**
 * Counter Application.
 * -------------------
 */

const PARAM_START = 'start';
const PARAM_PAUSE = 'pause';
const PARAM_PAUSE_CLASS = 'btn-success';

/** Timer */
var $timer, $counter, $milliseconds;

/** Buttons */
var $switchButton = document.getElementById('switch');
var $stopButton = document.getElementById('stop');

/** Wrappers */
var $millisecondsWrapper = document.getElementById('milliseconds');
var $timerWrapper = document.getElementById('timer');

/** Buttons Listeners */
$switchButton.addEventListener("click", switchCounter);
$stopButton.addEventListener("click", initApplication);

/** Init Application */
initApplication();