import {Keychain} from "../Keychain";
import {BigNum} from "../BigNum";

export interface BaseCoinHandler {
  testCoin: boolean
  ticker: string
  name : string
  icon : string
  description : string
  links : { [key: string]: string }
}

export interface NewTransaction {
  getBalanceAfter() : string
  getFeeDisplay() : string
  getFeeETA() : string
  getSummaryTable() : string
  send() : Promise<string>
}

export class Balance {
  amount: BigNum
  unconfirmed: BigNum
  constructor(amount: BigNum, unconfirmed: BigNum) {
    this.amount = amount
    this.unconfirmed = unconfirmed
  }
  total() : BigNum {
    return this.amount.add(this.unconfirmed)
  }
}

export interface OnlineCoinHandler extends BaseCoinHandler {
  getDecimals(keychain: Keychain) : number
  getReceiveAddr(keychain: Keychain) : string
  prepareTransaction(
      keychain: Keychain,
      receiverAddr : string,
      amount : BigNum,
      fee: number,
  ) : Promise<NewTransaction>
  getFeeOptions () : Promise<number[]>
  validateAddress(addr : string) : boolean
  getOwnBalance(keychain: Keychain) : Promise<Balance>
  getBalance(addr : string) : Promise<Balance>
  getIdenticonSeed(addr : string) : number
  explorerLinkAddr(address : string) : string
  explorerLinkTx(txid : string) : string
}



