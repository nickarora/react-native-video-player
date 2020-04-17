# React Native Video Player

A React Native video player with a few controls. This player uses
react-native-video for the video playback.

This is a fork of [Cornedor's react-native-video-player](https://github.com/cornedor/react-native-video-player)

## Why was this forked?

The original repo had some long standing issues that were gaining no traction.  Making contributions to the original repo was difficult because it was written as one large javascript class; this made tackling bugs and adding additional features difficult.  By contrast, this version has been entirely written in typescript using separate components where appropriate.  It has the added benefit of working seemlessly with typescript projects. 

In order to ensure it is a drop in replacement, all of the original props have been maintained.

## Installation

In addition to `react` and `react-native` you will need to install additional peer dependencies:

```
yarn add react-native-video-player react-native-video react-native-vector-icons
```

Afterward, please make sure you follow the linking instructions provided by [react-native-video](https://github.com/react-native-community/react-native-video) and [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

## Props

| Prop                    | Description                                                                                 |
|-------------------------|---------------------------------------------------------------------------------------------|
| video                   | The video source to pass to react-native-video.                                             |
| thumbnail               | An Image source to use as thumbnail before the video gets loaded.                           |
| endThumbnail            | An Image source to use as thumbnail after the video has ended.                           |
| videoWidth              | Width of the video to calculate the player size.                                            |
| videoHeight             | Height of the video to calculate the player size.                                           |
| duration                | Duration can not always be figured out (e.g. when using hls), this can be used as fallback. |
| autoplay                | Start the video automatically.                                                              |
| defaultMuted            | Start the video muted, but allow toggling.                                                  |
| muted                   | Start the video muted and hide the mute toggle button.                                      |
| controlsTimeout         | Timeout when to hide the controls.                                                          |
| disableControlsAutoHide | Disable auto hiding the controls.                                                           |
| disableFullscreen       | Disable the fullscreen button.                                                              |
| loop                    | Loop the video after playback is done.                                                      |
| resizeMode              | The video's resizeMode. defaults to contain and is passed to react-native-video.            |
| hideControlsOnStart     | Hides the controls on start video.                                                          |
| endWithThumbnail        | Returns to the thumbnail after the video ends. If an `endThumbnail` image is not specified then the image specified in `thumbnail` is shown.                                              |
| disableSeek             | Disable video seeking.                                                                      |
| pauseOnPress            | Automatically pause/play when pressing the video player anywhere.                           |
| fullScreenOnLongPress   | Automatically show video on fullscreen when doing a long press.                             |
| onStart                 | Callback for when the start button is pressed.                                              |
| onPlayPress             | Callback for when the play button is pressed.                                               |
| onHideControls          | Callback for when the controls are being hide.                                              |
| onShowControls          | Callback for when the controls are being shown.                                             |
| customStyles            | The player can be customized in this object, see customStyles for the options.              |

All other props are passed to the react-native-video component.

### customStyles

 - wrapper
 - video
 - controls
 - playControl
 - controlButton
 - controlIcon
 - playIcon
 - seekBar
 - seekBarFullWidth
 - seekBarProgress
 - seekBarKnob
 - seekBarBackground
 - thumbnail
 - playButton
 - playArrow
 - videoWrapper

## Methods

| Method                  | Props           | Description                                                               |
|-------------------------|-----------------|---------------------------------------------------------------------------|
| seek                    | time: float     | Seek the player to the given time.                                        |
| stop                    |                 | Stop the playback and reset back to 0:00.                                 |
| pause                   |                 | Pause the playback.                                                       |
| resume                  |                 | Resume the playback.                                                      |

## Development

Clone this repo and run `yarn install`; this will install the dev dependencies and trigger an install of peer dependencies.  Make changes to `src` and run `yarn build` before submitting a PR.