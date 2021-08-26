export class PositionSizing {
        tickers : String
        exit : number
        risk : number
        shares : number
        total : number
        riskreward : number
        newcapital : number
        capital : number 
        entryprice : number 
        stoploss : number
    
        constructor (
        tickers : String,
        exit : number, 
        risk : number,
        shares : number,
        total : number,
        riskreward : number,
        newcapital : number,
        capital : number ,
        entryprice : number ,
        stoploss : number)
        
        {
        this.tickers = tickers
        this.exit = exit 
        this.risk = risk 
        this.shares = shares 
        this.total = total
        this.riskreward = riskreward
        this.newcapital = newcapital
        this.capital = capital
        this.entryprice = entryprice
        this.stoploss = stoploss
        }    
}
