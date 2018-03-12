$('.block.toast.adblocker .block-content p').html("Beste bezoeker,<br><br>Wij zien dat u een adblocker gebruikt die ervoor zorgt dat u geen advertenties ziet op NU.nl.<br>Best wel een goed idee eigenlijk!<br>Gaan wij ook doen, reclames zijn ruk.");
$('.block.toast.adblocker').delay(3000).slideUp(function(){
    $(this).remove();
});