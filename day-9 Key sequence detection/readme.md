## 배운 것

* splice() 의 음수 parameter를 사용했을 때 array의 뒤 쪽에서 부터 index를 인식한다는 점.
* keys.length - keyCode.length , 결과값 만큼의 갯수를 splice() 하여, 새로 입력되는 요소만 남을 수 있도록 함.

### execution context에 대해서

  * 아무것도 호출된 함수가 없을 때는 global execution context만 존재함.
  * 함수가 호출될 때 마다 새로운 execution context가 생성되고 그것이 global context위에 쌓임.
  * execution context가 생성될 때 creation phase와 execution phase로 나뉨.
  * creation phase의 요소? 에는 크게 3가지
    - variable object
    - scope chain
    - this

  1. variable object(VO)
    - global execution context의 VO는 window object.
    - 함수를 선언할 때 각각의 함수들이 자신을 지칭하는 property를 생성함.
    (execution phase 이전에 이미 함수는 정의 되어있다.)
    - 변수를 선언할 때 역시, 자신을 지칭하는 property를 생성함.
    (변수는 undefined로 생성되고, execution phase에서 값이 정의된다.)

  2. scope chain
    - 가장 위쪽에 있는 execition context는 아랫단계의 execution context에 선언된 변수나 함수를 순차적으로 참고할 수 있는데, 그 방향이 아랫단계의 excution context에서 윗 단계로의 참고는 불가능하다.

  3. this
    - default 값은 window.
    - 특정 대상에 method가 붙어있고, 그 method 내에서 this는 특정대상을 지칭한다.
    (그러나 this값이 고정 돼 있는 것은 아님.)
