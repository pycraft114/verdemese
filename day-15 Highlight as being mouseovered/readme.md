## 배운 것
* getBoundingClientRect() 는 기존의 offsetTop, Left가 부모를 기준으로 부터의 위치였다면, getBoundingClientRect() viewport에서의 상대적인 위치정보, 크기값을 property로 리턴한다.
* span element와 trigger의 크기와 위치정보를 이용하여, span element를 trigger와 동일한 크기와 위치로 이동시키는 형식.

* list와 nodelist의 차이점.  
  - Nodelist는 javascript api가 아닌 DOM api이다.
  - 그러므로, javascript 뿐만 아니라, 다른 언어에서도 Nodelist를 사용함으로써 DOM에 접근할 수 있다.
  -  constructor가 다르기 때문에, Nodelist는 Array constructor의 prototype에 존재하는 method들을 사용할 수 없다. (일부분 같은 method들이 존재함)
  - Array는 메모리에 저장되는 반면에(stack & heap), Nodelist는 DOM에서부터 가져오는 정보이므로, DOM의 정보의 변화에 따라 Nodelist가 자동으로 갱신된다.
  (querySelectorAll은 제외)
