# Tap Tap Revolution

[Live Demo](https://eractus.github.io/tapTapRevolution/)

Tap Tap Revolution(TTR) was created as a homage to the classic Dance Dance Revolution(DDR), built using HTML Canvas and vanilla Javascript. 

The app was developed on a roughly 5-6 day timeframe.

## Features
<ul>
  <li>Single page game that utilizes HTML Canvas to allow dynamic arrow sprites to smoothly move up the screen.</li>
  <li>Collision detection and keypress event listeners allow players to register "taps".</li>
  <li>Mute icon toggles background music off and on.</li>
</ul>

### Dynamic Arrow Sprites and Static Arrow Receivers

Background music, which can be toggled on and off at any time, queues the game as arrow sprites begin to glide up the screen. Using collision detection between the dynamic and static arrows' x,y positions as well as event listeners on keycodes for respective keys, players can interactively accumulate points for successfully registering the arrows. A counter also keeps track of your combo streaks and more points are awarded as your streak increases. These elements combine to create a fully immersive and interactive gaming experience.

![Live Demo](https://github.com/Eractus/tapTapRevolution/blob/master/assets/gameplay.gif)

## Project Design

TTR was designed to focus on the functionality of properly registering arrows within an acceptable range of vertical distance from the respective static arrow. Thereafter, styling was prioritized to create the same vibes and feel as the original game.


## Possible future features

<ul>
  <li>Game start/pause/reset.</li>
  <li>Animation upon successful arrow registration.</li>
  <li>Multiplayer.</li>
</ul>
