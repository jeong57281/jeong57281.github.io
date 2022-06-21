---
title: 'JavaScript 메소드 사용법 정리' 
titleImage: '/img/thumbnail/js.png'
date: '2022-06-21'
tags: ['JavaScript']
---

> 필요할 때 참고해서 쓰되, 알고 사용하자는 의미에서 메소드 정리까지 함.

<br/>

## :heavy_plus_sign: 총 합 구하기 - reduce

```js
Array.reduce( function ( accumulator, currentValue, currentIndex, array ), initalValue )
```

* **callback**
  * **accumulator** : 누적값
  * **currentValue** : 요소 값
  * **currentIndex** (option) : 요소 인덱스
  * **array** (option) : 호출한 배열
* **initalValue** (option) : accumulator 의 초기값 (제공하지 않으면 배열의 첫 번째 요소 사용)

callback 함수는 4가지 인자를 받고, 반환 값을 accumulator 에 누적한다. 최종적으로 reduce 함수는 accumulator 를 반환.

```js:title=.js
const arr = [1, 2, 3, 4];
arr.reduce((s, c) => s+c, 0); // 10
```

<br/>

## :abc: 자릿수 맞추기 - padStart

```js
String.padStart( targetLength, padString )
```

* **targetLength** : 목표 문자열 길이
* **padString** (option) : 채워 넣을 문자열

항상 왼쪽부터 채워 나간다. <br/>
targetLength 보다 문자열이 길다면 그대로 반환한다.<br/>
padString 에 아무런 값도 주어지지 않으면 공백이 사용된다.<br/>
padString 이 목표 문자열 길이를 넘어서면 잘려 채워진다.

```js:title=.js
'0110'.padStart(8);    // "    0110"
'0110'.padStart(8, 0); // "00001110"
```

<br/>

## :arrows_clockwise: 진법 변환 10 to N - toString

```js
Number.toString( base )
```

* **base** : 변환할 진수의 밑수 (2진법의 경우 2)

```js:title=.js
const num = 7;
num.toString(2); // 111
```

<br/>

## :arrows_clockwise: 진법 변환 N to 10 - parseInt

```js
parseInt( string, base )
```

* **string** : 10진수로 변환할 (문자열) 진수
* **base** (option) : string 진수의 밑수 (string 이 2진법 문자열일 경우 2)

base 를 생략할 경우 default 값으로 string 진수의 밑수가 초기화 된다. (default 값이 10이 아님에 유의)

생략되었을 경우의 자세한 처리는 [공식문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt#%EC%84%A4%EB%AA%85)에 잘 설명되어 있다.

```js:title=.js
parseInt('0110', 2); // 6
```