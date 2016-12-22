$(() => {
  // jQuery Tests
  let jStanza = $('.stanza');
  let jVerses = $('.stanza li');

  // jStanza.append(jVerses[0]);
  // jStanza.append($('<li>New Fish</li>'));


  // jQuery Lite Tests
  let stanza = $l('.stanza');
  let verses = $l('.stanza li');
  let oneFish = verses.HTMLElements[0];

  // stanza.append(oneFish);
  // stanza.append($l(stanza.HTMLElements[0]));
  // stanza.append(stanza);
  // stanza.append(verses);
});
