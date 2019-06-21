## 배운 것
1. 글자가 박스 밖으로 빠져나가는 것을 (word-wrap: break-word
cursor: pointer) 두가지 property로 해결함.

2. cookie, localStorage 와 sessionStorage
  - cookie
    * cookie는 클라이언트와 서버간의 지속적인 데이터 교환을 위해 만들어진 저장소.
    * http로부터 서버에 대한 요청을 보낼 때, 서버는 요청 자체만으로는 어떤 클라이언트에 게서 요청되었는지 알 수 없다. 그러므로 클라이언트는 cookie에 자신의 데이터를 담아서 서버로 보내고, 서버는 이 cookie를 읽고 클라이언트를 파악한다.
    * 그러므로 cookie에는 클라이언트에 대한 정보가 담겨있는 상태이고, 동일한 클라이언트로부터 요청이 발생하면, 서버는 이 클라이언트에 대한 cookie를 클라이언트로 전송하여, 클라이언트는 사용자에게 더 빠른 데이터를 제공할 수 있게 해준다.(ex 로그인 상태 유지)
    * 그러나 cookie는 지속적인 데이터 교환때문에 계속해서(모든 요청마다) 클라이언트가 서버로 cookie를 보내야 하기 때문에 성능이 떨어질 수 있다.  

  - localStorage, sessionStorage  
    * 이러한 cookie의 문제점을 해결하기 위해서, localStorage와 sessionStorage에 데이터를 선택적으로 저장할 수 있다(서버에 데이터가 전송되는 것이 아닌, 클라이언트에 데이터를 저장하는 형식).
    * 두 저장소의 차이점은 데이터의 지속성이다. localStorage은 사용자가 localStorage를 비우지 않는 이상 클라이언트에 영구적으로 남아있다. sessionStorage는 클라이언트가 종료되면 데이터는 자동적으로 삭제된다.  
    * 모두 key-value의 형태이며, string으로 저장된다.

3. map()은 두번째 parameter로 index값을 받을 수 있다. 이 index값을 이용하여 추가되는 각 element에 data-index값을 설정하고 click 이벤트가 발생할 때 이 element를 특정할 수 있도록 함.

4. event delegation에 대해서 이론만 어느정도 알고있었지만, 상위 element(class-lists)에 event를 추가하고, event delegation을 통해 event가 발생한 element를 특정함으로써, 새로이 추가되는 리스트에도 이벤트를 등록시킬수 있게함.
