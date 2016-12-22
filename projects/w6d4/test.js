$(() => {
  // jQuery Tests
  let jStanza = $('.stanza');
  let jVerses = $('.stanza li');

  // jStanza.append(jVerses[0]);
  // jStanza.append($('<li>New Fish</li>'));


  // jQuery Lite Tests
  let poem = $l('#one-fish-two-fish');
  let stanza = $l('.stanza');
  let verses = $l('.stanza li');
  let oneFish = verses.HTMLElements[0];

  // stanza.append(oneFish);
  // stanza.append($l(stanza.HTMLElements[0]));
  // stanza.append(stanza);
  // stanza.append(verses);

  // console.log(poem.attr("class"));
  // verses.attr("class", "verse");

  // verses.addClass("verse");
  // verses.removeClass("verse");
});
