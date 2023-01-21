# JavaScript JSON
## JSON 개념 정리와 활용방법 및 유용한 사이트 공유

> JSON은 무엇인지 기본개념부터 시작해서 자바스크립트에서 어떻게 활용할 수 있는지를 알아보자.

<br/>
<br/>

## HTTP(Hypertext Transfer Protocal)

    브라우저 위에서 동작하고 있는 웹사이트는 웹 어플리케이션과 같은 클라이언트들이 어떻게 서버와 통신할 수 있는지를 정리한 것이
    바로 HTTP이다. HTTP는 어떻게 이 HyperText를 서로 주고받을 수 있는지를 규약한 프로토콜의 하나이다.
    HTTP는 클라이언트가 서버에게 데이터를 request(요청)할 수 있고 서버는 클라이언트가 요청한 것에 따라서 그에 맞는 
    response(응답)을 클라이언트에게 보내주는 방식으로 진행되는 것을 의미한다. 여기서 하이퍼 텍스트는 웹사이트에서 
    이용되어지고 있는 hyperlink만 얘기하는 게 아니라 전반적으로 쓰여지고 있는 resources들(문서나 이미지 파일들)을
    다 포함해서 말하는 것이다. 

<br/>

## AJAX 
    이렇게 HTTP를 이용해서 서버에게 데이터를 요청해서 받아올 수 있는 방법으로는 AJAX가 있다.  AJAX란
    "Asynchronous JavaScript AndXML"의 약자이다. 이 AJAX는 웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술을 의미한다. 
    대표적인 예로는 XHR(XMLHttpRequest)가 있다. 이 Object는 브라우저 API에서 제공하는 Object 중 하나로 이 Object를 이용하면 
    간단하게 서버에게 데이터를 요청하고 받아올 수 있다. 최근 브라우저 api에 추가된 fetch() API를 이용하면 간편하게 데이터를 
    주고받을 수 있다. 무조건 신규 기술이 추가되었다고해서 함부로 사용할 수 없다. (fetch()는 역시 IE에서 지원x)
    AJAX와 XHR에서 반복적으로 등장하는 XML이란 HTML과 같은 마크업 언어중 하나이다. 태그들을 이용해서 데이터를 나타내는데, 
    HTML과 마찬가지로 데이터를 표현할 수 있는 방법중 하나이다. 서버와 데이터를 주고받을 때는 XML만 가능한가?  XML뿐만 아니라 다양한
    파일 포맷을 전달받을 수 있는데 그 중에서도 요즘엔 JSON을 많이 사용한다. 

<br/>

## JSON

    브라우저에서 서버와 통신을 할 때 우리는 새로 추가된 fetch라는 api를 사용할수도 있고 요즘에도 흔하게 많이
    쓰이는 XMLHttpRequest를 사용해서 서버와 통신할 수도 있다. XML을 사용하면 불필요한 태그들이 많이 들어가 파일 사이즈가 
    커질뿐 아니라 가독성도 좋지 않아 요즘엔 많이 사용하지 않고 최근엔 JSON을 많이 사용한다. JSON은
    "JavaScript Object Notation"의 약자로써 JavaScript Object와 관련된 파일인 것을 유추할 수 있다. 데이터 포멧 중 하나이다. 
    자바스크립트에서 Object를 보면 key와 value로 이루어져있는데 JSON도 마찬가지로 key와 value로 이루어졌다. JSON은 
    브라우저뿐만 아니라 모바일에서 서버와 데이터를 주고받을 때도 사용할 수 있다.

<br/>
<br/>

## JSON 특징
- simplest data interchange format
> 데이터를 주고받을 때 쓸 수 있는 가장 간단한 포맷.
- lightweigt text-based structure
> 텍스트를 기반으로 한 
- easy to read
> 사람 눈으로 읽기도 편하고
- key-value pairs
> 키와 벨류로 이루어진 포맷이고
- used for serialization and transmission of data between the network the network connection
> 데이터를 보통을 서버와 주고받을 때 serializatino(직렬화하다)을 위해서 사용한다. 직렬화하고 데이터를 전송할 때 사용됨.
- independent programming language and platform
> (가장 중요) 프로그래밍 언어나 플랫폼에 상관없이 사용할 수 있다.


<br/>

## JSON 공부 포인트

오브젝트를 어떻게 serializatino(직렬화)해서 JSON으로 변환할지 그리고 직렬화된 JSON을 어떻게 deserialize해서 다시 오브젝트로 변환할건지를 중점으로 공부하기!



<br/>
<br/>

## 유용한 사이트

- JSON Diff
> JSON 파일끼리 달라진 부분을 찾아줌. (디버깅 때 편리)

- JSON Beautifier
> 포맷을 예쁘게 정리해줌.

- JSON Parser
> JSON 파일을 Object형태로 확인해보고 싶을 때

- JSON Validator
> 유효한 JSON 데이터인지 체크해줌.

<br/>


<br/>
<br/>


