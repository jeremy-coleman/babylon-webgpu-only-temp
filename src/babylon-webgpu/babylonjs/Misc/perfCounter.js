import { PrecisionDate } from './precisionDate.js';

/**
 * This class is used to track a performance counter which is number based.
 * The user has access to many properties which give statistics of different nature.
 *
 * The implementer can track two kinds of Performance Counter: time and count.
 * For time you can optionally call fetchNewFrame() to notify the start of a new frame to monitor, then call beginMonitoring() to start and endMonitoring() to record the lapsed time. endMonitoring takes a newFrame parameter for you to specify if the monitored time should be set for a new frame or accumulated to the current frame being monitored.
 * For count you first have to call fetchNewFrame() to notify the start of a new frame to monitor, then call addCount() how many time required to increment the count value you monitor.
 */
class PerfCounter {
    /**
     * Creates a new counter
     */
    constructor() {
        this._startMonitoringTime = 0;
        this._min = 0;
        this._max = 0;
        this._average = 0;
        this._lastSecAverage = 0;
        this._current = 0;
        this._totalValueCount = 0;
        this._totalAccumulated = 0;
        this._lastSecAccumulated = 0;
        this._lastSecTime = 0;
        this._lastSecValueCount = 0;
    }
    /**
     * Returns the smallest value ever
     */
    get min() {
        return this._min;
    }
    /**
     * Returns the biggest value ever
     */
    get max() {
        return this._max;
    }
    /**
     * Returns the average value since the performance counter is running
     */
    get average() {
        return this._average;
    }
    /**
     * Returns the average value of the last second the counter was monitored
     */
    get lastSecAverage() {
        return this._lastSecAverage;
    }
    /**
     * Returns the current value
     */
    get current() {
        return this._current;
    }
    /**
     * Gets the accumulated total
     */
    get total() {
        return this._totalAccumulated;
    }
    /**
     * Gets the total value count
     */
    get count() {
        return this._totalValueCount;
    }
    /**
     * Call this method to start monitoring a new frame.
     * This scenario is typically used when you accumulate monitoring time many times for a single frame, you call this method at the start of the frame, then beginMonitoring to start recording and endMonitoring(false) to accumulated the recorded time to the PerfCounter or addCount() to accumulate a monitored count.
     */
    fetchNewFrame() {
        this._totalValueCount++;
        this._current = 0;
        this._lastSecValueCount++;
    }
    /**
     * Call this method to monitor a count of something (e.g. mesh drawn in viewport count)
     * @param newCount the count value to add to the monitored count
     * @param fetchResult true when it's the last time in the frame you add to the counter and you wish to update the statistics properties (min/max/average), false if you only want to update statistics.
     */
    addCount(newCount, fetchResult) {
        if (!PerfCounter.Enabled) {
            return;
        }
        this._current += newCount;
        if (fetchResult) {
            this._fetchResult();
        }
    }
    /**
     * Start monitoring this performance counter
     */
    beginMonitoring() {
        if (!PerfCounter.Enabled) {
            return;
        }
        this._startMonitoringTime = PrecisionDate.Now;
    }
    /**
     * Compute the time lapsed since the previous beginMonitoring() call.
     * @param newFrame true by default to fetch the result and monitor a new frame, if false the time monitored will be added to the current frame counter
     */
    endMonitoring(newFrame = true) {
        if (!PerfCounter.Enabled) {
            return;
        }
        if (newFrame) {
            this.fetchNewFrame();
        }
        let currentTime = PrecisionDate.Now;
        this._current = currentTime - this._startMonitoringTime;
        if (newFrame) {
            this._fetchResult();
        }
    }
    _fetchResult() {
        this._totalAccumulated += this._current;
        this._lastSecAccumulated += this._current;
        // Min/Max update
        this._min = Math.min(this._min, this._current);
        this._max = Math.max(this._max, this._current);
        this._average = this._totalAccumulated / this._totalValueCount;
        // Reset last sec?
        let now = PrecisionDate.Now;
        if ((now - this._lastSecTime) > 1000) {
            this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount;
            this._lastSecTime = now;
            this._lastSecAccumulated = 0;
            this._lastSecValueCount = 0;
        }
    }
}
/**
 * Gets or sets a global boolean to turn on and off all the counters
 */
PerfCounter.Enabled = true;

export { PerfCounter };
