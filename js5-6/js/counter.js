/**
 * Init Application.
 * -----------------
 */
function initApplication() {

    $counter = 0;
    $milliseconds = 0;

    /** Counter: STOP */
    clearInterval($timer);

    /** Switch Button to: START position */
    $switchButton.classList.remove(PARAM_PAUSE);
    $switchButton.classList.add(PARAM_START);
    $switchButton.innerHTML = PARAM_START;

    /** Clear Wrappers */
    renderCounter();
}


/**
 * Switch Counter.
 * ---------------
 */
function switchCounter() {

    var $classList = $switchButton.classList;

    /** Counter: SWITCH */
    if ($classList.contains(PARAM_START)) {
        startCounter();
    } else {
        pauseCounter();
    }
}


/**
 * Start Counter.
 * --------------
 */
function startCounter() {

    /** Switch Button to: PAUSE position */
    $switchButton.innerHTML = PARAM_PAUSE;
    $switchButton.classList.remove(PARAM_START);
    $switchButton.classList.add(PARAM_PAUSE);

    /** Run Timer */
    $timer = setInterval(function () {

        /** Increment Counters */
        $counter++;
        $milliseconds++;

        /** Reset Local Counter */
        if ($milliseconds.toString().length > 3) {
            $milliseconds = 0;
        }

        /** Render HTML Layout */
        renderCounter();

    }, 1);
}


/**
 * Pause Counter.
 * --------------
 */
function pauseCounter() {

    /** Counter: PAUSE */
    clearInterval($timer);

    /** Switch Button to: START position */
    $switchButton.innerHTML = PARAM_START;
    $switchButton.classList.remove(PARAM_PAUSE);
    $switchButton.classList.add(PARAM_START);
}


/**
 * Render Counter Layout.
 * ----------------------
 */
function renderCounter() {

    /** Calc Timer Parts */
    var $seconds = Math.floor($counter / 1000) % 60;
    var $minutes = Math.floor($counter / 60000) % 60;
    var $hours = Math.floor($counter / 3600000) % 24;

    /** Formatting Timer Parts */
    $seconds = strPad('00', $seconds);
    $minutes = strPad('00', $minutes);
    $hours = strPad('00', $hours);

    /** Render Data */
    $millisecondsWrapper.innerHTML = strPad('000', $milliseconds);
    $timerWrapper.innerHTML = $hours + ':' + $minutes + ':' + $seconds;
}


/**
 * Number Padding.
 * ---------------
 */
function strPad($mask, $number) {
    $number = $number.toString();
    return $mask.substring(0, $mask.length - $number.length) + $number;
}