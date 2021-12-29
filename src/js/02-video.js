import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onTimeUpdate, 1000));
   
function onTimeUpdate ({ seconds }) {
    localStorage.setItem(CURRENT_TIME, seconds)
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
