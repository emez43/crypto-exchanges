


const ex = [
    ['BINANCE', 'price',
        ["https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=TRXUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=SHIBUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=AVAXUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=DAIUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=WBTCUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=LINKUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=ATOMUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=LEOUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=UNIUSDT",
            "https://api.binance.com/api/v3/ticker/price?symbol=OKBUSDT",]
    ],
    ['HUOBI', 'tick.close',
        ["https://api.huobi.pro/market/detail/merged?symbol=btcusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=ethusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=bnbusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=xrpusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=adausdt",
            "https://api.huobi.pro/market/detail/merged?symbol=dogeusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=maticusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=solusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=dotusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=ltcusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=trxusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=shibusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=avaxusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=daiusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=wbtcusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=linkusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=atomusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=leousdt",
            "https://api.huobi.pro/market/detail/merged?symbol=uniusdt",
            "https://api.huobi.pro/market/detail/merged?symbol=okbusdt",]
    ],
    ['coinbase', "data.amount",
        ['https://api.coinbase.com/v2/prices/BTC-USD/spot',
            'https://api.coinbase.com/v2/prices/ETH-USD/spot',
            'https://api.coinbase.com/v2/prices/BNB-USD/spot',
            'https://api.coinbase.com/v2/prices/XRP-USD/spot']
    ],
    ['Bithub', "data.closing_price",
        ['https://api.bithumb.com/public/ticker/BTC',
            'https://api.bithumb.com/public/ticker/ETH',
            'https://api.bithumb.com/public/ticker/BNB',
            'https://api.bithumb.com/public/ticker/XRP']
    ]
]

const table = document.getElementById('table')

exch()
setInterval(exch, 1000)


 for (let i = 0; i < ex.length; i++) {
      console.log(ex[i][0])
     for (let j = 0; j < ex[i][2].length; j++) {
         //console.log(i,j)
         // console.log(ex[i][1])
         //console.log(ex[i][2][j])
     }
 }
function exch() {
    for (let i = 0; i < ex.length; i++) {
        for (let j = 0; j < ex[i][2].length; j++) {

            fetch(ex[i][2][j])
                .then(response => {
                    return  response.json() 
                console.log(response)
                    //return
                }
                )
                .then(data => {
                    //console.log(data)
                    const price = Number(_.get(data, ex[i][1])).toFixed(4)
                    //console.log(price)
                    const priceContainer = document.getElementById("price_" + [j] + '.' + [i]);
                    priceContainer.innerText = `${price}`;
                });
        }
    }
}

/*
//async/await
function exch() {
    for (let i = 0; i < ex.length; i++) {
        for (let j = 0; j < ex[i][2].length; j++) {
            getData()
        }}}

async function getData() {
    try {
        const response = await fetch(ex[i][2][j])
        const data = await response.json()
        //console.log(data)
        const price = Number(_.get(data, ex[i][1])).toFixed(4)
        //console.log(price)
        const priceContainer = document.getElementById("price_" + [j] + '.' + [i]);
        priceContainer.innerText = `${price}`;

    } catch (error) {
        console.error(error);
    }
}*/

