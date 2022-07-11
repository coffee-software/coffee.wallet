import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {Widget} from "./Widget";
import {Https} from "../Core/Https";
import {fastTap} from "../Tools/Fasttap";

export class CoffeeChartWidget implements Widget {

    handler : BaseCoinHandler
    unit: string
    element: HTMLElement
    canvas: HTMLCanvasElement
    rangeSwitchers: { [range: string] : HTMLLIElement } = {}

    createRangeSwitcher(text: string, callback: ()=>void) : HTMLElement {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.appendChild(document.createTextNode(text));
        button.onclick = callback;
        fastTap(button);
        li.appendChild(button);
        this.rangeSwitchers[text] = li;
        return li;
    }

    constructor(handler : BaseCoinHandler, unit: string) {
        this.handler = handler;
        this.unit = unit;
        this.element = document.createElement('div');
        this.element.classList.add('chart');
        this.canvas = document.createElement('canvas');
        this.canvas.width = 100;
        this.canvas.height = 100;
        this.element.append(this.canvas);
        if (handler != null) {
            let rangeButtons = document.createElement('ul');
            rangeButtons.append(this.createRangeSwitcher('24h', this.setRange.bind(this, '24h')));
            rangeButtons.append(this.createRangeSwitcher('week', this.setRange.bind(this, 'week')));
            rangeButtons.append(this.createRangeSwitcher('month', this.setRange.bind(this, 'month')));
            rangeButtons.append(this.createRangeSwitcher('year', this.setRange.bind(this, 'year')));
            rangeButtons.append(this.createRangeSwitcher('all', this.setRange.bind(this, 'all')));
            this.element.append(rangeButtons);
        }
        this.canvas.style.width ='100%';
        this.canvas.style.height='200px';
        this.renderText('select range...');
    }

    setRange(range: string){
        for(var r in this.rangeSwitchers) {
            this.rangeSwitchers[r].classList.remove('active')
        }
        this.rangeSwitchers[range].classList.add('active');
        this.renderText('loading...');

        let path = '/history.json?code=' + this.handler.code + '&unit=' + this.unit + '&range=' + range;
        //TODO on error?
        Https.makeJsonRequest('api.wallet.coffee', path).then((result) => {
            if (Object.keys(result['points']).length == 0) {
                this.renderText('no data');
            } else {
                this.renderPoints(result['points']);
            }
        });
    }

    renderText(text: string) {
        let ctx = this.startRender();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
    }

    startRender() : CanvasRenderingContext2D {
        this.canvas.width  = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        let ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return ctx;
    }

    forceTwoDigits(i: number) : string {
        return (i < 10 ? '0' + i.toString() : i.toString());
    }

    getMagnitude(value: number): number {
        let magnitude = 0.001;
        while (magnitude < value) {
            magnitude *= 10;
        }
        magnitude = magnitude / 100;
        return magnitude;
    }

    valueStepsCount = 6;
    timeStepsCount = 7;

    getValueLabels(minValue : number, maxValue:number, magnitude:number): string[] {
        let ret:string[] = [];
        for (let i = 0; i < this.valueStepsCount; i++) {
            let valueStep = maxValue - (((maxValue - minValue) * i) / (this.valueStepsCount - 1));
            ret.push(valueStep.toFixed(Math.max(0, - (Math.log10(magnitude) - 1))));
        }
        return ret;
    }

    getTimeLabels(minTime : number, maxTime:number ): { [key: number] : string } {
        let ret:{ [key: number] : string } = {};
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        let hour = 1000 * 60 *60;
        let hoursDiff = ((maxTime - minTime) / hour);

        let step = 0;
        let allowedMonthDays : number[] = [];
        let allowedMonths : number[] = [];
        let formatter = null;
        if (hoursDiff < 30) {
            step = hour * 4;
            formatter = (date : Date) => this.forceTwoDigits(date.getHours()) + ':' + this.forceTwoDigits(date.getMinutes());
        } else if (hoursDiff < (24 * 8)) {
            step = hour * 24;
            formatter = (date : Date) => days[date.getDay()] + ' ' + date.getDate();
        } else if (hoursDiff < (24 * 100)) {
            step = hour * 24 * 5;
            formatter = (date : Date) => months[date.getMonth()] + ' ' + date.getDate();
        } else {
            step = hour * 24;
            allowedMonthDays = [1];
            if (hoursDiff < (24 * 600)) {
                allowedMonths = [0, 2, 4, 6, 8, 10];
                formatter = (date : Date) => months[date.getMonth()];
            } else if (hoursDiff < (24 * 1000)) {
                allowedMonths = [0, 6];
                formatter = (date : Date) => months[date.getMonth()] + ' ' + date.getFullYear();
            } else {
                allowedMonths = [0];
                formatter = (date : Date) => date.getFullYear().toString();
            }
        }
        let stepTime : number = Math.ceil(minTime / step) * step;
        while (stepTime < maxTime) {
            let stepDate = new Date(stepTime);
            if (allowedMonthDays.length && (allowedMonthDays.indexOf(stepDate.getDate()) == -1)) {
                stepTime += step;
                continue;
            }
            if (allowedMonths.length && (allowedMonths.indexOf(stepDate.getMonth()) == -1)) {
                stepTime += step;
                continue;
            }
            ret[stepTime] = formatter(stepDate);
            stepTime += step;
        }
        return ret;
    }

    renderPoints(points: { [ts: number] : number }) {

        let ctx = this.startRender();
        ctx.fillStyle = 'black';
        ctx.font = '8pt Arial';

        let minTime = -1;
        let maxTime = -1;
        let minValue = -1.0;
        let maxValue = -1.0;
        for (let key in points) {
            let time: number = +key;
            let value: number = +points[key];
            minTime = (minTime == -1 ? time : Math.min(minTime, time));
            maxTime = (maxTime == -1 ? time : Math.max(maxTime, time));
            minValue = (minValue == -1 ? value : Math.min(minValue, value));
            maxValue = (maxValue == -1 ? value : Math.max(maxValue, value));
        }

        let m = this.getMagnitude(maxValue);
        maxValue = Math.ceil(maxValue / m) * m;
        minValue = Math.floor(minValue / m) * m;

        let valueLabels = this.getValueLabels(minValue, maxValue, m);

        let textMargin = 4;
        let valueMargin = 0;
        for (let i = 0; i < valueLabels.length; i++) {
            valueMargin = Math.max(valueMargin, ctx.measureText(valueLabels[i]).width + (2 * textMargin));
        }

        let timeMargin = 0;
        let timeLabels = this.getTimeLabels(minTime, maxTime);
        for (var i in timeLabels) {
            timeMargin = Math.max(timeMargin, ctx.measureText(timeLabels[i]).width + (2 * textMargin));
        }

        let smallMargin = 5;
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#bbb';
        var chartWidth = this.canvas.width - smallMargin - valueMargin;
        var chartHeight = this.canvas.height - timeMargin - smallMargin;
        ctx.strokeRect(valueMargin, smallMargin, chartWidth, chartHeight);

        ctx.strokeStyle = 'black';
        ctx.save();
        ctx.textAlign="right";
        ctx.textBaseline="middle";
        let valueStepWidth = (this.canvas.height - timeMargin - smallMargin) / (valueLabels.length - 1);
        for (let i = 0; i < valueLabels.length; i++) {
            ctx.strokeStyle = '#ccc';
            ctx.beginPath();
            ctx.moveTo(valueMargin, smallMargin + (i * valueStepWidth));
            ctx.lineTo(this.canvas.width - smallMargin, smallMargin + (i * valueStepWidth));
            ctx.stroke();

            ctx.fillText(
                valueLabels[i],
                valueMargin - textMargin,
                smallMargin + (i * valueStepWidth)
            );
        }

        ctx.translate(valueMargin, this.canvas.height - timeMargin);
        ctx.rotate(-Math.PI/2);
        ctx.textAlign="right";
        ctx.textBaseline="middle";
        for (let time in timeLabels) {
            ctx.save();
            ctx.translate(0, chartWidth * ((parseInt(time) - minTime) / (maxTime - minTime)));
            ctx.strokeStyle = '#ccc';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(chartHeight, 0);
            ctx.stroke();
            ctx.fillText(timeLabels[time], -textMargin, 0);
            ctx.restore();
        }
        ctx.restore();
        let first = true;
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        for (let key in points) {
            var time: number = +key;
            var value: number = +points[key];
            let x = ((time - minTime) / (maxTime - minTime)) * (this.canvas.width - valueMargin - smallMargin) + valueMargin;
            let y = this.canvas.height - (((value - minValue) / (maxValue - minValue)) * (this.canvas.height - timeMargin - smallMargin)) - timeMargin;
            if (first) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            first = false;
        }
        ctx.stroke();
    }

}