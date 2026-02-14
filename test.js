$(document).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
    }

    envelope.click(openEnvelope);
    btn_open.click(openEnvelope);
    btn_reset.click(closeEnvelope);

});