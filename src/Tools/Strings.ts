
if (!String.prototype.startsWith)
    String.prototype.startsWith = function (str) {
        return !!(str && this) && !this.lastIndexOf(str, 0);
    };

if (!String.prototype.endsWith)
    String.prototype.endsWith = function (str) {
        var offset = str && this ? this.length - str.length : -1;
        return offset >= 0 && this.lastIndexOf(str, offset) === offset;
    };

export class Strings {

    static shortAmount(floatValue: number, unit: string, maxchars: number): string {
        maxchars = maxchars - unit.length - 1;
        return floatValue.toString().substring(0, maxchars - 2) + '..&nbsp;' + unit;
    }

    static shortAddr(addr: string, maxchars: number): string {
        if (addr.length > maxchars) {
            var half = (maxchars - 3) / 2;
            return addr.substring(0, half + 1) + '...' + addr.substring(addr.length - half + 1, addr.length);
        } else {
            return addr;
        }
    }

    static slugify(str: string): string {
        let ret = '';
        for (let i = 0; i < str.length; i++) {
            let c = str[i].toLowerCase();
            if ('a' <= c && c <='z') {
                ret += c;
            } else if ('0' <= c && c <='9') {
                ret += c;
            } else {
                ret += '-';
            }
        }
        return ret.split('-').filter((s)=> s != '').join('-');
    }
}