check-nested
============

Check for the existence of nested objects

```js

var checkNested = require('check-nested');

// Some data i don't control
var a = {
    b: {
        c: {
            d: 'Some data i need'
        }
    }
};

if (checkNested(a, 'a.b.c.d')) {
    console.log('Continue');
}
```

Credits: [CMS - Stackoverflow](http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key)
