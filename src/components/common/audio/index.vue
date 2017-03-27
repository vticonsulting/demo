<template lang="pug">
  .vue-sound-wrapper
    .vue-sound__player
      .vui-button-group(role='group')
        a.vui-button.vui-button--neutral(@click='stop()', title='Stop')
          vui-icon(name='stop')
        a(@click='play()', title='Play', :class='playStyle')
          vui-icon(name='play')
        a(@click='pause()', title='Pause', :class='pauseStyle')
          vui-icon(name='pause')
        a.vui-button.vui-button--neutral.vue-sound__playback-time-wrapper(@click='setPosition', title='Time played : Total time')
          .vue-sound__playback-time-indicator(:style='progressStyle')
          span.vue-sound__playback-time-current {{currentTime}}
          span.vue-sound__playback-time-separator
          span.vue-sound__playback-time-total {{duration}}
        a.vui-button.vui-button--neutral(@click='download()')
          vui-icon(name='floppy-o')
        a(@click='mute()', :class='mutedStyle', title='Mute')
          vui-icon(name='volume-mute2')
        a.vui-button.vui-button--neutral(@mouseover='toggleVolume()', title='Volume')
          vui-icon(name='sliders')
      input.volume-slider(orient='vertical', v-model.lazy='volumeValue', @change='updateVolume()', v-show='hideVolumeSlider', type='range', min='0', max='100')
    audio(:id='playerId', ref='audiofile', :src='file', preload='auto', style='display:none;')

</template>

<script>
  const baseVolumeValue = 7.5
  const defaultButtonClass = 'vui-button vui-button--neutral'
  let audio, uuid

  const generateUUID = () => {
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, (c) => {
      var r = Math.random() * 16 | 0;
      c === 'x'
        ? r
        : (r & 0x3 | 0x8)
      return r.toString(16)
    })
     /* eslint-enable */
  }
  const convertTimeHHMMSS = (val) => {
    let hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
    return (hhmmss.indexOf('00:') === 0) ? hhmmss.substr(3) : hhmmss
  }
  const toggleActive = (className) => {
    return (className.indexOf('active') > -1) ? className.replace('active', '') : (className + ' active')
  }
  export default {
    name: 'vue-audio',
    props: {
      file: {
        type: String,
        default: null
      },
      autoPlay: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      duration () {
        return this.audio ? convertTimeHHMMSS(this.totalDuration) : ''
      },
      playerId () {
        return 'player-' + this.uuid
      }
    },
    data () {
      return {
        isMuted: false,
        loaded: false,
        playing: false,
        paused: false,
        mutedStyle: defaultButtonClass,
        playStyle: defaultButtonClass,
        pauseStyle: defaultButtonClass,
        progressStyle: '',
        currentTime: '00:00',
        uuid: 0,
        audio: undefined,
        totalDuration: 0,
        hideVolumeSlider: false,
        volumeValue: baseVolumeValue
      }
    },
    methods: {
      setPosition (e) {
        let tag = e.target
        if (!this.playing) return
        if (e.target.tagName === 'SPAN') {
          tag = e.target.parentElement
        }
        const pos = tag.getBoundingClientRect()
        const seekPos = (e.clientX - pos.left) / pos.width
        this.audio.currentTime = parseInt(this.audio.duration * seekPos)
      },
      updateVolume () {
        this.hideVolumeSlider = false
        this.audio.volume = this.volumeValue / 100
        if (this.volumeValue / 100 > 0) {
          this.isMuted = this.audio.muted = false
          this.mutedStyle = defaultButtonClass
        }
      },
      toggleVolume () {
        this.hideVolumeSlider = true
      },
      stop () {
        this.pauseStyle = this.playStyle = defaultButtonClass
        this.paused = this.playing = false
        this.audio.pause()
        this.audio.currentTime = 0
      },
      play () {
        if (this.playing) return
        this.paused = false
        this.pauseStyle = defaultButtonClass
        this.playStyle = toggleActive(this.playStyle)
        this.audio.play()
        this.playing = true
      },
      pause () {
        this.paused = !this.paused;
        (this.paused) ? this.audio.pause() : this.audio.play()
        this.pauseStyle = toggleActive(this.pauseStyle)
      },
      download () {
        this.audio.pause()
        window.open(this.file, 'download')
      },
      mute () {
        this.isMuted = !this.isMuted
        this.audio.muted = this.isMuted
        this.mutedStyle = toggleActive(this.mutedStyle)
        this.volumeValue = this.isMuted ? 0 : 75
      },
      _handleLoaded () {
        if (this.audio.readyState >= 2) {
          if (this.autoPlay) this.audio.play()
          this.loaded = true
          this.totalDuration = parseInt(this.audio.duration)
        } else {
          throw new Error('Failed to load sound file')
        }
      },
      _handlePlayingUI (e) {
        let currTime = parseInt(this.audio.currentTime)
        let percentage = parseInt((currTime / this.totalDuration) * 100)
        this.progressStyle = `width:${percentage}%;`
        this.currentTime = convertTimeHHMMSS(currTime)
      },
      _handlePlayPause (e) {
        if (e.type === 'pause' && this.paused === false && this.playing === false) {
          this.progressStyle = `width:0%;`
          this.currentTime = '00:00'
        }
      },
      init () {
        this.audio.addEventListener('timeupdate', this._handlePlayingUI)
        this.audio.addEventListener('loadeddata', this._handleLoaded)
        this.audio.addEventListener('pause', this._handlePlayPause)
        this.audio.addEventListener('play', this._handlePlayPause)
      },
      getAudio () {
        return this.$el.querySelectorAll('audio')[0]
      }
    },
    mounted () {
      this.uuid = generateUUID()
      this.audio = this.$el.querySelectorAll('audio')[0]
      this.init()
    },
    beforeDestroy () {
      this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
      this.audio.removeEventListener('loadeddata', this._handleLoaded)
      this.audio.removeEventListener('pause', this._handlePlayPause)
      this.audio.removeEventListener('play', this._handlePlayPause)
    }

  }
</script>

<style lang="scss" scoped>
    .vue-sound-wrapper {

    }
    .vue-sound__player {

    }
    .vue-sound__navigator {

    }
    .vue-sound__playback-time {

    }
    .vue-sound__playback-time-separator {

    }
    .vue-sound__playback-time-separator::after {
      content:' : ';
    }
    .vue-sound__playback-time-total {

    }
    .volume-slider {
        -webkit-appearance: slider-vertical;
        position: relative;
        height: 100px;
        top: -60px;
        left: 50px;
    }
    .vue-sound__playback-time-indicator {
        background: #aaa;
        height: 22px;
        position: absolute;
        z-index: -1;
        top:-1px;
        left: 0px;
    }
    .vue-sound__player .vue-sound__playback-time-wrapper {
        background: transparent;
    }
</style>
