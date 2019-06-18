##배운 것

* pseudo class(::before, ::after)를 사용하여 모든 요소에 box-sizing: border-box property를 부여함
* min-height 100vh(viewport height-시각적으로 표시할 수 디스플레이) 최소높이를 브라우저의 높이와 똑같이 설정함.
* progress의 하위요소에 progress_filled class를 설정하고, flex-basis property를 사용하여 첫 요소에 한해서 flex의 비중을 설정하는 것을 이용하여, 진행 정도를 표현함.

* isSliding 변수에 boolean 값을 설정하고 mousedown, mousemove의 이벤트가 발생할 때 progress_filled의 flex-basis 값이 변하도록 하는 이벤트 핸들러를 설정함. (예외적으로 isSliding 변수와 관계없이 click을 했을 때 또한 flex-basis의 값이 변할 수 있도록 설정함)
* Vol(volumeButton) 표시를 클릭하면, 비디오의 볼륨이 mute됨과 동시에 volumeSlider의 value가 0이 되고, mute된 상태에서 다시 Vol 을 클릭하면 원래 설정된 값으로 돌아가게 함.
플레이어가 mute된 상태가 아니라면, getCurrentVolume 변수에 현재 volumeSlider 의 값을 저장해둔 뒤, 이것의 값을 0으로 만들고, 플레이어를 뮤트상태로 만듦.
