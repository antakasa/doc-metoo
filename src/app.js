import $ from 'jquery';
import './date-fi-FI.js';
import * as texts from './texts.js';
import * as sounds from './sounds.js';
import * as htmlTemplates from './htmlTemplates.js';
import './css/fyndOverrides.css';
import './css/animate_custom.css';
import './css/fbmessenger.css';
import './css/fontawesome_all.css';
import './css/smartphone.css';
import './css/style.css';
import './css/yleArticleMock.css';
import {buildPath} from './constants';
import Typed from 'typed.js';
import yleArticleMock from './yleArticleMock.js';
import './helpers';
export const startApp = () => {
  const {
    alarm,
    ding,
    tada,
    notsku,
    shutter,
    tock,
    sms,
    beginRecordSound,
    endRecordSound,
    ringtone,
    ReceivedMessage,
    SentMessage,
    soitto,
    soitto2,
    evilLaugh,
    incomingSuspense,
    raptor,
  } = sounds;
  let viive,
    myVar,
    loppuisku,
    soivabiisi,
    valinta,
    ruutuminsat,
    torkutus,
    suihku,
    polku,
    intervalli;

  let mones = 0;
  let delay1s = 'delay-1s';
  let delay2s = 'delay-2s';
  let delay3s = 'delay-3s';
  let delay4s = 'delay-4s';
  let delay5s = 'delay-5s';

  $('#parentWrapper').append("<div id='trigger'></div>");

  // start from screen0
  screen7();

  function screen0() {
    $('#mainWrapper').html(htmlTemplates.iconSet);
    createFullScreenMessage(
      texts.screen0.body,
      texts.screen0.startButton,
      screen1,
    );
  }

  function screen1() {
    createFullScreenMessage(
      texts.screen1.body,
      texts.screen1.startButton,
      screen2,
    );
  }
  function screen2() {
    // if fullscreen message present remove it
    $('.ruutu0').remove();

    const {username, keskustelu} = texts.screen3;
    createNotification('Messages', username, keskustelu[0].viesti, screen3);
  }

  function screen3() {
    const {username, userpic, keskustelu} = texts.screen3;
    $('#mainWrapper').html(htmlTemplates.iMessage(userpic, username));
    showMessage(0, keskustelu);
    $('#trigger').one('click', function() {
      $('#button_message1').one('click', function() {
        screen4('a');
        console.log('button1');
      });
      $('#button_message2').one('click', function() {
        screen4('b');
        console.log('button2');
      });
    });
  }

  function screen4(option) {
    $('#mainWrapper').html(htmlTemplates.TwitterTweet);
    const {textAOption, textBOption} = texts.screen4;
    let teksti = option === 'a' ? textAOption : textBOption;
    kirjoita(teksti, true, 'fb', 30, screen5);
  }

  function screen5() {
    setTimeout(function() {
      $('.typed-cursor').hide();
      $('.ylapalkki').addClass('twit');
      $('.ylapalkki').html(htmlTemplates.twitterYlapalkkiReadTweet);
      $('.contentcontainer').append(htmlTemplates.TwitterCommentsContainer),
        tock.play();
      showTwitterMessage(1, texts.screen5.keskustelu, null, null, onReady);
      function onReady() {
        setTimeout(function() {
          const {username, userpic, viesti} = texts.screen5.notification;
          createNotification('Messages', username, viesti, screen6);
        }, 3000);
      }
    }, 1000);
  }

  function screen6() {
    const {username, userpic, keskustelu, notificationMessage} = texts.screen6;
    $('#mainWrapper').html(htmlTemplates.iMessage(userpic, username));
    showMessage(0, keskustelu, null, chatReady);
    function chatReady() {
      createNotification('Twitter', username, notificationMessage, screen7);
    }
  }

  function screen7() {
    $('#mainWrapper').html(htmlTemplates.TwitterTweet);
    $('.typed-cursor').hide();
    $('.ylapalkki').addClass('twit');
    $('.ylapalkki').html(htmlTemplates.twitterYlapalkkiReadTweet);
    $('.contentcontainer').append(htmlTemplates.TwitterCommentsContainer),
      tock.play();
    showTwitterMessage(0, texts.screen7.keskustelu, null, null, onReady);
    function onReady() {
      screen8();
    }
  }

  function screen8() {
    const {notifications} = texts.screen8;
    let i = 0;
    const notificationFlood = window.setInterval(e => {
      const {media, userName, message} = notifications[i];
      createNotification(media, userName, message, null);
      //  if (i === 5) screen12();
      if (i === notifications.length - 1) {
        window.clearInterval(notificationFlood);
        slideUpNotification();
      }
      i++;
    }, 1000);
    window.setTimeout(() => {
      $('#mainWrapper').html(htmlTemplates.Clock);
      clockCounterAutomatic(10, 0, 150, 4000, onReady);
    }, 4000);

    function onReady() {
      const optionButtons = {
        html: `
<div>
    <button id="button_message1">${texts.screen8.optionA}
    </button>
    <button id="button_message2">${texts.screen8.optionB}
    </button>
</div>
	  `,
        listeners: function() {
          $('#button_message1').one('click', function() {
            screen9('a');
          });

          $('#button_message2').one('click', function() {
            screen9('b');
          });
        },
      };
      console.log('as');
      window.setTimeout(
        () =>
          createFullScreenMessage(
            texts.screen8.question,
            null,
            null,
            optionButtons,
          ),
        1000,
      );
    }
  }

  function screen9(option) {
    $('#mainWrapper').html(htmlTemplates.TwitterTweet);
    const {textAOption, textBOption} = texts.screen9;
    let teksti = option === 'a' ? textAOption : textBOption;
    kirjoita(teksti, true, 'fb', 30, screen10);
  }

  function screen10(option) {
    setTimeout(function() {
      $('.typed-cursor').hide();
      $('.ylapalkki').addClass('twit');
      $('.ylapalkki').html(htmlTemplates.twitterYlapalkkiReadTweet);
      $('.contentcontainer').append(htmlTemplates.TwitterCommentsContainer),
        tock.play();
      showTwitterMessage(1, texts.screen10.keskustelu, null, null, onReady);
      function onReady() {
        screen11();
      }
    }, 2000);
  }

  function screen11() {
    $('#mainWrapper').html(htmlTemplates.iconSet);
    const {notifications} = texts.screen11;
    let i = 0;
    const notificationFlood = window.setInterval(e => {
      const {media, userName, message} = notifications[i];
      createNotification(media, userName, message, null);
      if (i === 5) screen12();
      if (i === notifications.length - 1) {
        window.clearInterval(notificationFlood);
        slideUpNotification();
      }
      i++;
    }, 1000);
  }

  function screen12() {
    // https://codepen.io/savant/pen/idbAh
    $('#mainWrapper').html(htmlTemplates.Clock);

    // clockCounterAutomatic(lähtötunti, lähtöminuutit, kuinka monta minuuttia kello etenee, rullaamisen kesto)
    clockCounterAutomatic(10, 0, 60, 4000);
    setTimeout(screen13, 4000);
  }

  function screen13() {
    hideNotification();

    const {puhelinnro1, puhelinnro2, puhelinnro3} = texts.screen12;
    call1();
    function call1() {
      receivePhoneCall(puhelinnro1, evilLaugh, call2);
    }

    function call2() {
      receivePhoneCall(puhelinnro2, raptor, call3);
    }

    function call3() {
      receivePhoneCall(puhelinnro3, incomingSuspense, screen15());
    }
  }

  function screen15() {
    yleArticleMock();
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////// KIERRÄTYSFUNKTIOT ////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  function createFullScreenMessage(
    bodyText,
    buttonText,
    onOKClick,
    optionButtons,
  ) {
    $('.ruutu0').remove();
    $('#mainWrapper').append(
      `<div class='ruutu0 center'>
  <div>
        <p>${bodyText}</p>

      ${
        optionButtons
          ? optionButtons.html
          : `<button id="button0_0">${buttonText}</button>` /* if there is  no option buttons, show ok button*/
      }
  </div>
</div>`,
    );
    // listeners
    if (!optionButtons) $('#button0_0').one('click', onOKClick);
    if (optionButtons && optionButtons.listeners) optionButtons.listeners();
  }

  function createNotification(media, username, message, onClick) {
    $('.notsku').remove();
    let iconSrc;
    if (media === 'Messages') iconSrc = buildPath + 'img/ikonit/Messages.png';
    if (media === 'Twitter') iconSrc = buildPath + 'img/ikonit/Twitter.png';
    if (media === 'Messenger') iconSrc = buildPath + 'img/ikonit/Messenger.png';
    if (media === 'Gmail') iconSrc = buildPath + 'img/ikonit/Gmail.png';
    $('#notificationWrapper').html(`
<div class='notsku'>
    <div class='sovellus'><img src=${iconSrc}>${media}</div>
    <div class='notskuwrapper'>
        <div class='otsikko'>${username}
        </div>
        <div class='viesti'>${message}
        </div>
    </div>
</div>`);
    slideDownNotification();
    $('#notificationWrapper').off('click');
    $('#notificationWrapper').on('click', function(e) {
      if (onClick) onClick();
      slideUpNotification();
    });
  }

  function receivePhoneCall(caller, audio, onReady) {
    $('#mainWrapper').prepend(htmlTemplates.phoneCall(caller));

    ringtone.currentTime = 0;
    ringtone.loop = true;
    ringtone.play();

    $('.accept').one('click', function() {
      ringtone.pause();
      $('.decline').off();
      audio.play();
      audio.duration;
      $('.soitto .accept').hide();
      $('.soitto .decline').removeClass('aktiivinen');
      $('.soitto .selitykset').hide();
      $('.soittaja').append(
        "<div class='aika'><span class='hours'>00</span>:<span class='minutes'>59</span></div>",
      );
      numberCounter(0, 59000);
      setTimeout(function() {
        $('.soitto').hide();
        onReady();
      }, audio.duration * 1000);
      $('.ryhma .pikkuikonit').html(
        "<div class='answered'><div><i class='fas fa-microphone-slash'></i>mykistä</div><div><i class='fas fa-th'></i>näppäimistö</div><div><i class='fas fa-volume-up'></i>kaiutin</div><div><i class='fas fa-plus'></i>lisää puhelu</div><div><i class='fas fa-video'></i>FaceTime</div><div><i class='fas fa-user'></i>yhteystiedot</div></div>",
      );
    });
    $('.decline').one('click', function() {
      ringtone.pause();
      $('.soitto').hide();
      onReady();
    });
  }

  function showTwitterMessage(
    currentIteration,
    messages,
    userPath,
    mentions,
    onReady,
  ) {
    let viesti, efekti, viive;
    console.log('==== showTwitterMessage ====');
    // JOS KESKUSTELUSSA ON VIELÄ KOMMENTTEJA
    if (currentIteration < messages.length) {
      //// POLUT ////
      if (userPath === 'toka') {
        viesti = messages[currentIteration].viesti2;
      } else {
        viesti = messages[currentIteration].viesti;
      }

      viive = messages[currentIteration].viive;
      setTimeout(function() {
        if (currentIteration === 0 && mentions != 'mentions') {
          $('#mainWrapper .metacontainer').html(
            "<div class='profiilikuva'><img src='" +
              messages[currentIteration].userpic +
              "'></div><div class='nimijahandle'><div class='nimi'>" +
              messages[currentIteration].username +
              "</div><div class='handle'>" +
              messages[currentIteration].userhandle +
              '</div></div>',
          );
          $('#mainWrapper .postausteksti').html(
            messages[currentIteration].viesti,
          );
        } else {
          tock.play();
          // $(".formi .napit").html("");
          $('#mainWrapper .twittercommentscontainer').append(
            "<div class='vastaus'>" +
              "<div class='profiilikuva'><img src='" +
              messages[currentIteration].userpic +
              "'></div>" +
              "<div class='vastauspostaus'>" +
              "<div class='nimijahandle'><div class='nimi'>" +
              messages[currentIteration].username +
              "</div><div class='handle'>" +
              messages[currentIteration].userhandle +
              '</div></div>' +
              "<div class='viesti'>" +
              messages[currentIteration].viesti +
              '</div>' +
              '</div></div>',
          );
          // $("#mainWrapper .postausteksti").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>");
        }
        scrollComments();
        // $('#commentscontainer').animate({scrollTop: $("#comments").offset().top});

        // JOS VIESTIN JÄLKEEN KYSYTÄÄN VAIHTOEHTOJA
        if (messages[currentIteration].button1) {
          showButtons();
        } else {
          showTwitterMessage(
            currentIteration + 1,
            messages,
            userPath,
            null,
            onReady,
          );
          return;
        }
      }, viive);
    }
    // JOS KESKUSTELU OHI
    else {
      $('#trigger').trigger('click');
      if (onReady && typeof onReady === 'function') onReady();
      return;
    }

    function showButtons() {
      const button1text = messages[currentIteration].button1;
      const button2text = messages[currentIteration].button2;
      $('.alapalkki').prepend(
        "<button class='animated delay-1s fadeInUpBig' id='button_message1'>" +
          button1text +
          "</button><button class='animated fadeInUpBig' id='button_message2'>" +
          button2textextt +
          '</button>',
      );

      // BUTTONIEN ANIMOINTI
      $('alapalkki .animated').one('animationend', function() {
        $('.formi .animated')
          .removeClass('fadeInUpBig')
          .addClass('pulse infinite');
      });

      $('#button_message1').one('click', function() {
        polku = 'eka';
        showTwitterMessage(
          currentIteration + 1,
          messages,
          polku,
          null,
          onReady,
        );
        return;
      });
      $('#button_message2').one('click', function() {
        polku = 'toka';
        showTwitterMessage(
          currentIteration + 1,
          messages,
          polku,
          null,
          onReady,
        );
        return;
      });
    }
  }

  function showMessage(obj1, obj2, obj3, onReady) {
    let viesti, efekti, viive, button1, button2;
    polku = 'eka'; // nollaa polun, jotta vanha polku ei sekoita uutta keskustelua
    console.log('==== showMessage ====');
    console.log('polku ', obj3);
    // JOS KESKUSTELUSSA ON VIELÄ KOMMENTTEJA
    if (obj1 < obj2.length) {
      //// POLUT ////
      if (obj3 === 'toka') {
        viesti = obj2[obj1].viesti2;
      } else {
        viesti = obj2[obj1].viesti;
      }

      // JOS VASEN, NIIN ANIMOI
      if (obj2[obj1].oikeavasen === 'vasen' && obj1 != 0) {
        efekti = 'slideInLeft';
        setTimeout(function() {
          $('#mainWrapper #comments').append(
            "<div class='imessagecomment " +
              obj2[obj1].oikeavasen +
              ' animated ' +
              efekti +
              " veryfast'><div class='messagebubble vika " +
              obj2[obj1].oikeavasen +
              "'><i class='eka fas fa-circle'></i> <i class='toka fas fa-circle'></i> <i class='kolmas fas fa-circle'></i></div><div>",
          );
          //  document.querySelector('#comments').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
          scrollComments();
        }, 300);
      } else {
        efekti = 'slideInRight';
      }

      viive = obj2[obj1].viive;

      setTimeout(function() {
        $('.formi .napit').html('');
        if (obj2[obj1].oikeavasen === 'vasen' && obj1 === 0) {
          $('#mainWrapper #comments').append(
            "<div class='imessagecomment vasen'><div class='messagebubble vasen'>" +
              viesti +
              '</div></div>',
          );
        } else if (obj2[obj1].oikeavasen === 'vasen') {
          // $("#mainWrapper #comments .imessagecomment.vasen").last().removeClass("animated");
          $('#mainWrapper #comments .messagebubble.vika')
            .last()
            .addClass('slideInLeft animated veryfast');
          $('#mainWrapper #comments .messagebubble.vika')
            .last()
            .html(viesti)
            .removeClass('vika');
          ReceivedMessage.play();
        } else if (obj2[obj1].oikeavasen === 'oikea') {
          SentMessage.play();
          $('#mainWrapper #comments').append(
            "<div class='imessagecomment " +
              obj2[obj1].oikeavasen +
              ' animated ' +
              efekti +
              " veryfast'><div class='messagebubble " +
              obj2[obj1].oikeavasen +
              "'>" +
              viesti +
              '</div><div>',
          );
        }
        scrollComments();
        // $('#commentscontainer').animate({scrollTop: $("#comments").offset().top});
        // document.querySelector('#comments').scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });

        if (obj2[obj1].button1) {
          button1 = obj2[obj1].button1;
          button2 = obj2[obj1].button2;

          // JOS ON YLEINEN KYSYMYS EIKÄ VIESTI TOISELTA KÄYTTÄJÄLTÄ eli  "oikeavasen": "none"
          if (obj2[obj1].kysymys) {
            console.log('on kysymys');
            $('#mainWrapper').append(
              "<div class='ruutu0 center'><div><p>" +
                obj2[obj1].kysymys +
                "</p><button id='button_message1'>" +
                button1 +
                "</button><button id='button_message2'>" +
                button2 +
                '</button></div></div>',
            );
            $('#trigger').trigger('click');
          } else {
            $('.formi .napit').prepend(
              "<button class='animated delay-1s fadeInUpBig' id='button_message1'>" +
                button1 +
                "</button><button class='animated fadeInUpBig' id='button_message2'>" +
                button2 +
                '</button>',
            );

            $('.formi .animated').one('animationend', function() {
              $('.formi .animated')
                .removeClass('fadeInUpBig')
                .addClass('pulse infinite');
            });

            $('#button_message1').one('click', function() {
              polku = 'eka';
              showMessage(obj1 + 1, obj2, polku, onReady);
              return;
            });
            $('#button_message2').one('click', function() {
              polku = 'toka';
              showMessage(obj1 + 1, obj2, polku, onReady);
              return;
            });
          }
        } else {
          showMessage(obj1 + 1, obj2, polku, onReady);
          return;
        }
      }, viive);
    }
    // JOS KESKUSTELU OHI
    else {
      onReady();
      return;
    }
  }

  function numberCounter(obj1, obj2) {
    $('.minutes').each(function() {
      $(this)
        .prop('Counter', obj1)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: obj2,
            easing: 'linear',
            step: function(now) {
              const minsat = Math.ceil(now);
              if (minsat.toString().length < 2) {
                // Integer of less than two digits
                let now = '0' + minsat; // Prepend a zero!
              } else {
                now = minsat;
              }
              $(this).text(now);
            },
          },
        );
    });
  }
  // clockCounterAutomatic(lähtötunti, lähtöminuutit, kuinka monta minuuttia kello etenee, rullaamisen kesto)
  function clockCounterAutomatic(
    lahtotunnit,
    lahtominsat,
    etenevatminuutit,
    kesto,
    onReady,
  ) {
    $('.hours').text(lahtotunnit);
    $('.minutes').text(lahtominsat);
    // intervalli = (obj4/obj3);
    //minsat = obj2;

    console.log('lähtötunti ', lahtotunnit);
    console.log('lähtöminuutit ', lahtominsat);
    console.log('etenee minuuttia ', etenevatminuutit);
    console.log('intevalli ', kesto / etenevatminuutit);

    let tempMinsat = etenevatminuutit;

    myVar = 0;
    myVar = setInterval(function() {
      lahtominsat++;
      tempMinsat--;
      if (lahtominsat === 60) {
        lahtominsat = 0;
        lahtotunnit++;
        $('.hours').text(lahtotunnit);
      }
      if (lahtominsat.toString().length < 2) {
        // Integer of less than two digits
        ruutuminsat = '0' + lahtominsat; // Prepend a zero!
        $('.minutes').text(ruutuminsat);
      } else {
        $('.minutes').text(lahtominsat);
      }

      if (tempMinsat === 0) {
        window.clearInterval(myVar);
        if (onReady && typeof onReady === 'function') onReady();
        return;
      }
    }, kesto / etenevatminuutit);
  }

  function likeCounter(obj1, obj2) {
    $('.likes').text(obj2);
    $('.likes').each(function() {
      $(this)
        .prop('Counter', obj1)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2200,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now));
            },
          },
        );
    });
  }

  function slideDownNotification() {
    $('#notificationWrapper').removeClass();
    $('#notificationWrapper').addClass('slideInDown animated faster');
    notsku.currentTime = 0;
    notsku.play();
    vibrate(200);
  }
  function slideUpNotification() {
    $('#notificationWrapper').addClass('slideOutUp animated ');
    $('#notificationWrapper').one('animationend', function() {
      $('#notificationWrapper').removeClass();
      $('#notificationWrapper').addClass('above');
    });
  }

  function hideNotification() {
    $('#notificationWrapper').addClass('hide');
  }

  function slideLeftNotification() {
    $('#notificationWrapper').addClass('slideOutLeft animated faster');
  }

  function kirjoita(obj1, obj2, obj3, obj4, onReady) {
    const options = {
      strings: obj1,
      showCursor: obj2,
      smartBackspace: true,
      typeSpeed: obj4,
      startDelay: 1000,
      backSpeed: 30,
      onStart: (arrayPos, self) => {
        console.log('NAP');
      },
      onComplete: self => {
        console.log('=== kirjoitus valmis ====');
        onReady();
      },
    };
    const typed = new Typed('.statusform', options);
  }

  function vibrate(obj1) {
    if (typeof window.navigator.vibrate == 'undefined') {
      console.log('=== EI VÄRISE ===');
    } else {
      window.navigator.vibrate(obj1);
      console.log('=== VÄRISEE ===');
    }
  }
  function scrollComments() {
    console.log('==== scrollComments ====');
    // $('#commentscontainer').animate({scrollTop: $("#comments").offset().top},100);
    $('#commentscontainer').animate(
      {scrollTop: $('#commentscontainer')[0].scrollHeight},
      100,
    );
    return;
  }
};
