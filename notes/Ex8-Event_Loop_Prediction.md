# Event Loop Prediction explain the result

المصدر :  [youtube video](https://www.youtube.com/watch?v=eiC58R16hb8&t=5s)

بالبداية بتم تنفيذ الاكواد المتزامنة في الـ Call Stack 
 الـ`console.log("start")` تتنفذ فوراً وتنطبع النتيجة بالكونسول start
 الـ `setTimeout` تم إرسالها للـ Web APIs (بيئة المتصفح أو الـ Node.js)، وبمجرد ما خلص الوقت (0 ملي ثانية)، تم وضع callback الخاص بها في الـ **Macrotask Queue**.
 الـ `Promise.resolve().then()` تم وضع callback الخاص بها مباشرة في الـ **Microtask Queue** (لأنها ذات أولوية عالية).
الـ `console.log("end")` تنفذت فوراً وانطبعت $\rightarrow$ *لنتيجة:`end`.

من ناحية دور الـ Event Loop:
الاولية للـ Microtasks لا يذهب الى Macrotask Queue إلا إذا تأكد أن Microtask Queue فارغ تماماً.
وبالتالي فحص الـ Microtask Queue فا وجد callback الـ promise يوقم بسحبه وضعه بـ callstack 
وبالتالي اصبح الـMicrotask Queue فارغ  Macrotask Queue، فوجد فيه كولباك الـ `setTimeout`، فقام بسحبه ووضعه في الـ callstack لتنفيذه

فا اصبح التنفيذ كالتالي:

```js
//start
//end
//Promise
//setTimeout
```

