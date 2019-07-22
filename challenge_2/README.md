
Historical BPI data
We offer historical data from our Bitcoin Price Index through the following endpoint:

`https://api.coindesk.com/v1/bpi/historical/close.json?currency=CHF&start=2019-01-01&end=2019-04-01`

?currency=EUR&start=[DATE]&end=[DATE]"

?index=[LRD] 
whats the difference between index and currency

?currency=[LRD]

?start=2019-01-01&end=2019-04-01

By default, this will return the previous 31 days' worth of data. This endpoint accepts the following optional parameters:

?index=[USD/CNY]The index to return data for. Defaults to USD.

?currency=<VALUE>The currency to return the data in, specified in ISO 4217 format. Defaults to USD.



?start=<VALUE>&end=<VALUE> Allows data to be returned for a specific date range. Must be listed as a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.
?for=yesterdaySpecifying this will return a single value for the previous day. Overrides the start/end parameter.


  { "currency": "CHF", "country": "Swiss Franc" },

   https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05


   Ethereum
   ETH

   0: 5540.1117
// 1: 5454.4483
// 2: 5160.64
// 3: 5241.025
// 4: 5247.24
// 5: 5266.3467
// 6: 5259.6267
// 7: 5378.6183
// 8: 5423.66
// 9: 5503.3017
// 10: 5775.8817
// 11: 5876.01
// 12: 5823.795
// 13: 5799.6167
// 14: 5861.5917
// 15: 6029.08
// 16: 6187.28
// 17: 6375.5617
// 18: 7184.64, 
// [6979.1317, 7801.2967, 7978.01, 8180.425, 7875.1633, 7376.8533, 7259.5067, 8189.3767, 7995.965, 7945.045, 7623.5133, 7875.9967]