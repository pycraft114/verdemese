##배운 것

### prototype
* primitive data(string, number, boolean, null, undeifined)를 제외한 모든 data를 object라고 한다.
* javascript는 prototype 기반 언어이다. 즉, javascript의 모든 object는 prototype property를 가지고있다.
* object는 object 자신의 prototype에 포함하지 않는다.
* construtor에 의해서 만들어진 object를 instance라고 한다.
* prototype 상속은 상위의 prototype이 method나 property를 가지고 있어도 이것이 상속되어 특정(하단) object에서도 이것을 호출할 수 있는 것을 의미함. 이 상속은 상속이 시작되는 prototype부터 최하단의 prototype까지 진행됨.
* prototype chain이란, 특정 object에 대해서 method나 property를 호출할 때, 가장 처음 이것이 이 object에 속해있는 것인지 확인하고, 만약 아니라면, 그 object를 포함하고 있는 prototype을 확인, 또한 그 상위의 ptototype을 확인을 반복하는 것으로 이 작업은 null을 반환할 때 까지 계속된다.

ex)

function People(name, age) {
  this.name = name;
  this.age = age;
}

const verde = new People('verde', 24);

=> verde는 People constructor가 가지는 prototype안의 instance이다.

People.prototype.examProperty = "test";

=> verde에게 상속되어 verde 또한 examProperty라는 property를 가진다.

verde.hasOwnProperty(examProperty); // return false

=> verde가 소유하고 있는 자신의 property가 아닌 상속받은 property 이기 때문에 false.

###copy vs reference
* primitive data를 포함하는 변수는, 카피한 data를 변수 자신 안에 가두기 때문에 카피의 피객체의 값이 바뀌어도 변하지 않는다.

ex) let pri1 = 100;
    let pri2 = pri1;
    pri1 = 200;
    console.log(pri1, pri2) // return 200 100

* object와(를) 연관된? 지칭하는? 변수는 실제로 object를 포함하고 있지않다. 복사하여 가두는 것이 아닌, 실제의 데이터를 참고한다.     

ex) let obj1 = [1, 2, 3];
    let obj2 = obj1;
    obj1 = [2, 3, 4];
    console.log(obj1, obj2); // return [2, 3, 4] [2, 3, 4]
