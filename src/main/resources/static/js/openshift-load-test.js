/**
 * Created by Xue on 12/04/16.
 */
$(function () {
    $.getJSON('/resourceQuotaTest', function (data) {

        var processor = data.processor;
        var totalPhysicalMemory = data.totalPhysicalMemory;
        var loadAverage = data.loadAverage;
        var usedPhysicalMemory = data.usedPhysicalMemory;
        var freePhysicalMemory = data.freePhysicalMemory;
        var maxMemory = data.jvmMaxMemory;
        var totalMemory = data.jvmTotalMemory;
        var freeMemory = data.jvmFreeMemory;
        var currentThreadCount = data.currentThreadCount;
        var peakThreadCount = data.peakThreadCount;
        var daemonThread = data.daemonThread;
        var sessions = data.sessions;

        $('#sessions').text(sessions);
        $('#processor').text(processor);
        $('#totalPhysicalMemory').text(totalPhysicalMemory);
        $('#loadAverage').text(loadAverage);
        $('#usedPhysicalMemory').text(usedPhysicalMemory);
        $('#freePhysicalMemory').text(freePhysicalMemory);
        $('#maxMemory').text(maxMemory);
        $('#totalMemory').text(totalMemory);
        $('#freeMemory').text(freeMemory);
        $('#currentThreadCount').text(currentThreadCount);
        $('#peakThreadCount').text(peakThreadCount);
        $('#daemonThread').text(daemonThread);
    });
});
