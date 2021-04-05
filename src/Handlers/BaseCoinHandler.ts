import {Keychain} from "../Keychain";
import {BigNum} from "../BigNum";

export interface BaseCoinHandler {
  getTicker() : string;
  getName() : string;
  getIcon() : string;
  getDescription() : string;
  getLinks() : { [key: string]: string };
}

export interface NewTransaction {
  getBalanceAfter() : string
  getFeeDisplay() : string
  getFeeETA() : string
  getSummaryTable() : string
  send() : Promise<string>
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
  getFeeOptions () : Promise<[number]>
  validateAddress(addr : string) : boolean
  getBalance(addr : string) : Promise<BigNum>
  getIdenticonSeed(addr : string) : number
}



