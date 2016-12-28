const Currencys = [
  {
    'name': '美元',
    'currency': 'USD'
  },
  {
    'name': '加拿大元',
    'currency': 'CAD'
  },
  {
    'name': '瑞士法郎',
    'currency': 'CHF'
  },
  {
    'name': '人民币(离岸)',
    'currency': 'CNH'
  },
  {
    'name': '丹麦克郎',
    'currency': 'DKK'
  },
  {
    'name': '港元',
    'currency': 'HKD'
  },
  {
    'name': '日元',
    'currency': 'JPY'
  },
  {
    'name': '挪威克郎',
    'currency': 'NOK'
  },

  {
    'name': '瑞典克郎',
    'currency': 'SEK'
  },
  {
    'name': '新加坡元',
    'currency': 'SGD'
  },
  {
    'name': '泰国铢',
    'currency': 'THB'
  },
  {
    'name': '澳元',
    'currency': 'AUD'
  },

  {
    'name': '欧罗',
    'currency': 'EUR'
  },
  {
    'name': '英镑',
    'currency': 'GBP'
  },
  {
    'name': '纽西兰元',
    'currency': 'NZD'
  }
]

module.exports = {
    getCurrencyByName : function(name){

        for(let i=0; i<Currencys.length;i++){
            if(Currencys[i]['name'] == name){
                return Currencys[i]['currency']
            }
        }
    }
}
