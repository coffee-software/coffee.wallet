import {Keychain} from "../Keychain";
import {BigNum} from "../Core/BigNum";
import * as bip32 from "bip32";

export interface BaseCoinHandler {
  decimals : number
  testCoin: boolean
  onlineCoin: boolean
  code: string
  ticker: string
  name : string
  icon : string
  description : string
  links : { [key: string]: string }
}

export interface NewTransaction {
  handler: OnlineCoinHandler

  getLeftIcon() : string
  getLeftLabel() : string
  getRightIcon() : string
  getRightLabel() : string

  getBalanceAfter() : string
  getFeeDisplay() : string
  getFeeETA() : string
  getAmountDisplay() : string
  getRecipientDisplay() : string
  getSummary() : { [code: string] : string|Balance }
  send() : Promise<string>
  isValid() : boolean
}

export class NewTransactionWrapper implements NewTransaction {
  tx: NewTransaction
  handler: OnlineCoinHandler;

  constructor(tx: NewTransaction) {
    this.tx = tx;
    this.handler = tx.handler
  }

  getAmountDisplay(): string {
    return this.tx.getAmountDisplay();
  }

  getBalanceAfter(): string {
    return this.tx.getBalanceAfter();
  }

  getFeeDisplay(): string {
    return this.tx.getFeeDisplay();
  }

  getFeeETA(): string {
    return this.tx.getFeeETA();
  }

  getLeftIcon(): string {
    return this.tx.getLeftIcon();
  }

  getLeftLabel(): string {
    return this.tx.getLeftLabel();
  }

  getRecipientDisplay(): string {
    return this.tx.getRecipientDisplay();
  }

  getRightIcon(): string {
    return this.tx.getRightIcon();
  }

  getRightLabel(): string {
    return this.tx.getRightLabel();
  }

  getSummary(): { [p: string]: string|Balance } {
    return this.tx.getSummary();
  }

  async send(): Promise<string> {
    return await this.tx.send()
  }

  isValid(): boolean {
    return this.tx.isValid();
  }
}

export class Balance {
  handler: BaseCoinHandler
  amount: BigNum
  unconfirmed: BigNum
  constructor(handler: BaseCoinHandler, amount: BigNum, unconfirmed: BigNum = null) {
    this.handler = handler
    this.amount = amount
    this.unconfirmed = unconfirmed ? unconfirmed : new BigNum("0")
  }
  total() : BigNum {
    return this.amount.add(this.unconfirmed)
  }
  totalFloat() : number {
    return this.amount.add(this.unconfirmed).toFloat(this.handler.decimals)
  }
  equals(other: Balance) : boolean {
    return other.total().toString() === this.total().toString();
  }
}

export interface OnlineCoinHandler extends BaseCoinHandler {
  getPrivateKey(keychain: Keychain) : bip32.BIP32Interface
  getReceiveAddr(keychain: Keychain) : string
  prepareTransaction(
      keychain: Keychain|string,
      receiverAddr : string,
      amount : BigNum|"MAX",
      fee?: number,
  ) : Promise<NewTransaction>
  getFeeOptions () : Promise<number[]>
  validateAddress(addr : string) : boolean
  getOwnBalance(keychain: Keychain) : Promise<Balance>
  getBalance(addr : string) : Promise<Balance>
  getIdenticonSeed(addr : string) : number
  explorerLinkAddr(address : string) : string
  explorerLinkTx(txid : string) : string
  canSendViaMessage() : boolean
  newRandomPrivateKey() : string
  addressFromPrivateKey(pk: string) : string
  exportPrivateKey(keychain: Keychain) : string
}



