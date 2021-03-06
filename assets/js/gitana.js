// Generated by CoffeeScript 1.8.0
var Gitana, listUsers;

listUsers = {
  namnv609: '28229691230024',
  dinhhoanglong91: '25362694685287',
  nguyenthanhtung88: '28554407143539',
  tranluan91: '25996172785139',
  wataridori: '28554407143532'
};

Gitana = function() {
  var $issueTitle, asanaRefs, gitUser, issueText, resultText;
  gitUser = $("strong a.author:first").text().trim();
  $issueTitle = $('.js-issue-title');
  issueText = $issueTitle.text();
  asanaRefs = issueText.split(/\s/);
  resultText = "";
  $.each(asanaRefs, function(idx, asanaRef) {
    var refID;
    refID = asanaRef.split(/#/);
    if (refID.length > 1) {
      return resultText += "<a href='https://app.asana.com/0/" + listUsers[gitUser] + "/" + refID[1] + "' target='_blank'>" + asanaRef + "</a> ";
    } else {
      return resultText += "" + asanaRef + " ";
    }
  });
  return $issueTitle.html(resultText.trim());
};

Gitana();

$('.site').bind('DOMNodeInserted', function(e) {
  if ($(e.target).is('.issues-listing')) {
    return Gitana();
  }
});
