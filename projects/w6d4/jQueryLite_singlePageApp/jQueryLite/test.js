$(() => {
  // jQuery Tests
  let jStanza = $('.stanza');
  let jVerses = $('.stanza li');

  // jStanza.append(jVerses[0]);
  // jStanza.append($('<li>New Fish</li>'));

  // console.log(jStanza.children());

  // console.log(jStanza.parent());
  // console.log(jVerses.parent());

  // console.log(jStanza.find('li'));


  // jQuery Lite Tests
  let poem = $l('#one-fish-two-fish');
  let stanza = $l('.stanza');
  let verses = $l('.stanza li');
  let oneFish = verses.HTMLElements[0];
  let firstStanza = $l('#one');

  // stanza.append(oneFish);
  // stanza.append($l(stanza.HTMLElements[0]));
  // stanza.append(stanza);
  // stanza.append(verses);

  // console.log(poem.attr("class"));
  // verses.attr("class", "verse");

  // verses.addClass("verse");
  // verses.removeClass("verse");

  // console.log(stanza.children());

  // console.log(stanza.parent());
  // console.log(verses.parent());

  // console.log(poem.find('#one'));
  // console.log(stanza.find('li'));

  // $l('li').remove();
});
