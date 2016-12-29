const request = require('request')
const cheerio = require('cheerio')
const _ = require('lodash')
const Currency = require('./currency')

const getResult = function (cb) {
  request('https://www.bochk.com/whk/rates/exchangeRatesUSD/exchangeRatesUSD-input.action?lang=cn', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let $ = cheerio.load(body)
      let trs = $('html body #form-div form div table.form_table.import-data.second-right tr td')

      let tpl = {
        'title': '',
        'from': '',
        'to': '',
        'in': '0', // 买入
        'out': '0', // 卖出
      }
      let item = {}
      let result = []
      trs.each(function (index, ele) {
        let cell = $(this).text().trim()

        if (index % 3 === 0) {
          let tmp = cell.split('兑')

          item = _.clone(tpl)
          item.title = cell
          item.from = Currency.getCurrencyByName(tmp[0])
          item.to = Currency.getCurrencyByName(tmp[1])
        }
        if (index % 3 === 1) {
          // 买入
          item.in = cell
        }
        if (index % 3 === 2) {
          // 卖出
          item.out = cell
          result.push(item)
        }
      })

      if (cb) {
        cb(result)
      }
    }
  })
}

module.exports = {
  get: getResult
}
