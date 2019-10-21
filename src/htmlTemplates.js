import {buildPath} from './constants';
export const iconSet = `
<div class='iconset-vertical'>
    <div class='iconset-horizontal'>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Facebook.png'>
            <br>Facebook</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Messenger.png'>
            <br>Messenger</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Clock.png'>
            <br>Clock</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Camera.png'>
            <br>Camera</div>
    </div>
    <div class='iconset-horizontal'>
        <div class='iconitem '><img src='${buildPath}img/ikonit/Reittiopas.png'>
            <br>Reittiopas</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Calendar2.png'>
            <br>Calendar</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Spotify.png'>
            <br>Spotify</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/GarageBand.png'>
            <br>GarageBand</div>
    </div>
    <div class='iconset-horizontal'>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Gmail.png'>
            <br>Gmail</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/GoogleMaps.png'>
            <br>GoogleMaps</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Health.png'>
            <br>Health</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/iBooks.png'>
            <br>iBooks</div>
    </div>
    <div class='iconset-horizontal'>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Twitter.png'>
            <br>Twitter</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Instagram.png'>
            <br>Instagram</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Clock.png'>
            <br>Clock</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Camera.png'>
            <br>Camera</div>
    </div>
    <div class='iconset-horizontal'>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Safari.png'>
            <br>Safari</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/FaceTime.png'>
            <br>FaceTime</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/YouTube.png'>
            <br>YouTube</div>
        <div class='iconitem'><img src='${buildPath}img/ikonit/Music.png'>
            <br>Music</div>
    </div>
</div>
<div id='iPhoneDock' class='reittiopas iconset-horizontal'>
    <div class='iconitem'><img src='${buildPath}img/ikonit/Messages.png'>
        <br>Messages</div>
    <div class='iconitem'><img src='${buildPath}img/ikonit/Inbox.png'>
        <br>Inbox</div>
    <div class='iconitem'><img src='${buildPath}img/ikonit/Phone.png'>
        <br>Phone</div>
</div>`;

export const iMessage = (userPic, username) => `
<div class='imessage valkoinen'>
    <div class='ylapalkki'><i class='vasen fas fa-chevron-left'></i>
        <div class='keski'><img src=${userPic}>
            <br>${username}
            <i class='fas fa-chevron-right'></i></div>
    </div>
    <div id='commentscontainer'>
        <div id='comments'></div>
    </div>
    <div class='alapalkki'><img class='vasen' src='${buildPath}img/imessagecamera.jpg'><img class='vasen' src='${buildPath}img/imessagea.jpg'>
        <div class='formi'>
            <div class='napit'></div><img class='oikea' src='${buildPath}img/imessagesend.jpg'></div>
    </div>
</div>
`;

export const TwitterTweet = `<div class='twitter twiittaa'>
    <div class='ylapalkki'>
        <div><i class='fas fa-times'></i></div>
        <div id='ylapalkkiteksti'>
        </div>
    </div>
    <div class='contentcontainer'>
	<div class='metacontainer'>
		<div class='profiilikuva'><img src='${buildPath}img/instauser.jpg'></div><div class='form'><span class='statusform'></span></div>
	</div>
        <div class='postausteksti'></div>

    </div>
    <div class='alapalkki'><img src='${buildPath}img/twitterhome_active.jpg'><img src='${buildPath}img/twittersearch.jpg'><img src='${buildPath}img/twitterbell.jpg'><img src='${buildPath}img/twitterdm.jpg'></div>
    <div class='tykkaa'><img src='${buildPath}img/fb/thumb.png'><img src='${buildPath}img/fb/comment.png'><img src='${buildPath}img/fb/share.png'> </div>
</div>`;

export const TwitterYlapalkkiReadTweet = `<div><i class='fas fa-arrow-left'></i></div> <div id='ylapalkkiteksti'>Twiitti</div></div
	`;

export const TwitterCommentsContainer = `
<div class='toimintaikonit'><i class='far fa-comment'></i><i class='fas fa-retweet'></i><i class='far fa-heart'></i><i class='fas fa-share-alt'></i></div><div id='commentscontainer' class='twittercommentscontainer'></div>
`;

export const Clock = `
<div class='overlay alarm'><div id='clockWrapper'><div id='clock'><span class='hours'></span>:<span class='minutes'></span></div></div> </div>
`;

export const phoneCall = name => `
<div class='soitto'>
    <div class='soittaja'>${name}</div>
    <div class='ryhma'>
        <div class='pikkuikonit'>
            <div><img src='${buildPath}img/remindme.svg'>
                <br>Muistuta</div>
            <div><img src='${buildPath}img/message.svg'>
                <br>Viesti</div>
        </div>
        <div class='isotikonit'>
            <div class='pulse infinite iso aktiivinen decline'><img src='${buildPath}img/phone.svg'></div>
            <div class='pulse infinite iso accept'><img src='${buildPath}img/phone.svg'></div>
        </div>
        <div class='selitykset'>
            <div>Hylkää</div>
            <div>Vastaa</div>
        </div>
    </div>
</div>
`;
