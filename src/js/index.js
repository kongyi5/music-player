import './icons.js'

const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

class Player{
  constructor(node){
    this.root = typeof node === 'string' ? $(node) : node
    this.audio = new Audio()
    this.songList = []
    this.currentIndex = 0
    this.start()
    this.bind()
  }
  start(){
    fetch('https://jirengu.github.io/data-mock/huawei-music/music-list.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.songList = data
      })
  }
  bind(){
    const self = this
    this.root.querySelector('.btn-play-pause').onclick = function(){
      console.log(self.audio)
      self.playSong()
    }
  }
  playSong(){
    this.audio.src = this.songList[this.currentIndex].url
    this.audio.play()
  }
}

new Player('#player')