export type PortfolioLegacyItemData = { comment: string, addr?: string, balance: number}
export type PortfolioItemData = { label: string, address?: string, balance?: number}

export function isPortfolioLegacyItemData(toBeDetermined: object): toBeDetermined is PortfolioLegacyItemData {
    return ('comment' in toBeDetermined);
}

export function isPortfolioItemData(toBeDetermined: object): toBeDetermined is PortfolioItemData {
    return ('label' in toBeDetermined);
}

export abstract class PortfolioItem {
    label: string
    protected constructor(label: string) {
        this.label = label
    }
    abstract getData() : PortfolioItemData

    static isBalance(toBeDetermined: PortfolioItem): toBeDetermined is PortfolioBalance {
        return !('address' in toBeDetermined);
    }
    static isAddress(toBeDetermined: PortfolioItem): toBeDetermined is PortfolioAddress {
        return ('address' in toBeDetermined);
    }

    public toString() : string {
        if (PortfolioItem.isAddress(this)) {
            return '[' + this.address.substring(0, 11) + '...]'
        } else if (PortfolioItem.isBalance(this)) {
            return this.balance + ' XXX'// + that.wallet.handler.code)
        }
    }
}

export class PortfolioBalance extends PortfolioItem {

    balance: number
    constructor(label: string, balance: number) {
        super(label)
        this.balance = balance;
    }

    getData(): PortfolioItemData {
        return { label: this.label, balance: this.balance };
    }

}

export class PortfolioAddress extends PortfolioItem {
    address: string

    constructor(label: string, address: string) {
        super(label)
        this.address = address
    }

    getData(): PortfolioItemData {
        return { label: this.label, address: this.address };
    }
}