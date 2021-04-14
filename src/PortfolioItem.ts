export type PortfolioLegacyItemData = { comment: string, addr?: string, balance: number}
export type PortfolioItemData = { label: string, address?: string, balance: number}

export function isPortfolioLegacyItemData(toBeDetermined: object): toBeDetermined is PortfolioLegacyItemData {
    return ('comment' in toBeDetermined);
}

export function isPortfolioItemData(toBeDetermined: object): toBeDetermined is PortfolioItemData {
    return ('label' in toBeDetermined);
}

export abstract class PortfolioItem {
    label: string
    balance: number
    protected constructor(label: string, balance: number) {
        this.label = label
        this.balance = balance
    }
    abstract getData() : PortfolioItemData

    static isBalance(toBeDetermined: PortfolioItem): toBeDetermined is PortfolioBalance {
        return !('address' in toBeDetermined);
    }
    static isAddress(toBeDetermined: PortfolioItem): toBeDetermined is PortfolioAddress {
        return ('address' in toBeDetermined);
    }
}

export class PortfolioBalance extends PortfolioItem {

    constructor(label: string, balance: number) {
        super(label, balance)
    }

    getData(): PortfolioItemData {
        return { label: this.label, balance: this.balance };
    }

}

export class PortfolioAddress extends PortfolioItem {
    address: string

    constructor(label: string, address: string, balance: number) {
        super(label, balance)
        this.address = address
    }

    getData(): PortfolioItemData {
        return { label: this.label, address: this.address, balance: this.balance };
    }
}