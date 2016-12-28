## currency-rate [![Version](https://img.shields.io/npm/v/currency-rate.svg)](https://www.npmjs.com/package/currency-rate)
> 爬取 [中国银行-各类货币兑美元电汇牌价](https://www.bochk.com/whk/rates/exchangeRatesUSD/exchangeRatesUSD-input.action?lang=cn)的美元汇率

### Setup

```
$ npm install
```

### Test

```
$ node index.test.js
```


or checkout `index.test.js`

### Usage

```js
const currency_rate = require('./index')

currency_rate.get(function(result){
    console.log(result)
})

```

结果示例

```
[
  { title: '欧罗兑美元',
    from: 'EUR',
    to: 'USD',
    in: '1.0418000',
    out: '1.0480000' },
  { title: '英镑兑美元',
    from: 'GBP',
    to: 'USD',
    in: '1.2228300',
    out: '1.2311700' },
  { title: '纽西兰元兑美元',
    from: 'NZD',
    to: 'USD',
    in: '0.6906500',
    out: '0.6954500' } 
]    
````