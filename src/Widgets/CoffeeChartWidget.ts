import {BaseCoinHandler} from "../Handlers/BaseCoinHandler";
import {Widget} from "./Widget";
import {Https} from "../Core/Https";
import {App} from "../App";
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
        let rangeButtons = document.createElement('ul');
        rangeButtons.append(this.createRangeSwitcher('24h', this.setRange.bind(this, '24h')));
        rangeButtons.append(this.createRangeSwitcher('week', this.setRange.bind(this, 'week')));
        rangeButtons.append(this.createRangeSwitcher('month', this.setRange.bind(this, 'month')));
        //rangeButtons.append(this.createRangeSwitcher('all', this.setRange.bind(this, 'all')));
        this.element.append(rangeButtons);

        this.canvas = document.createElement('canvas');
        this.canvas.width = 100;
        this.canvas.height = 100;

        this.element.append(this.canvas);
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

    formatDate (hoursDiff: number, date : Date) {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        if (hoursDiff < 30) {
            let h = date.getHours();
            let m = date.getMinutes();
            return this.forceTwoDigits(h) + ':' + this.forceTwoDigits(m);
        } else if (hoursDiff < (24 * 8)) {
            let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return days[date.getDay()] + ' ' + date.getDate();
        } else if (hoursDiff < (24 * 365)) {
            return months[date.getMonth()] + ' ' + date.getDate();
        } else {
            return months[date.getMonth()] + ' ' + date.getFullYear();
        }
    }

    getMagnitude(value: number): number {
        let magnitude = 0.1;
        while (magnitude < value) {
            magnitude *= 10;
        }
        magnitude = magnitude / 100;
        return magnitude;
    }

    renderPoints(points: { [code: number] : number }) {

        let ctx = this.startRender();
        let valueMargin = 65;
        let timeMargin = 36;
        let smallMargin = 5;
        /*ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.moveTo(valueMargin, smallMargin);
        ctx.lineTo(this.canvas.width - smallMargin, smallMargin);
        ctx.lineTo(this.canvas.width - smallMargin, this.canvas.height - timeMargin);
        ctx.lineTo(valueMargin, this.canvas.height - timeMargin);
        ctx.lineTo(valueMargin, smallMargin);
        ctx.stroke();*/

        //ctx.fillStyle = 'white';
        //ctx.fillRect(valueMargin, smallMargin, this.canvas.width - smallMargin, this.canvas.height - timeMargin);

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
        let minDateTime = new Date(minTime);
        let maxDateTime = new Date(maxTime);

        let m = this.getMagnitude(maxValue);

        maxValue = Math.ceil(maxValue / m) * m;
        minValue = Math.floor(minValue / m) * m;

        ctx.save();

        ctx.fillStyle = 'black';
        ctx.font = '8pt Arial';

        ctx.textAlign="right";
        ctx.textBaseline="middle";
        let valueStepsCount = 6;
        for (let i = 0; i < valueStepsCount; i++) {
            let valueStep = (
                maxValue - ((maxValue - minValue) * (i / (valueStepsCount - 1)))
            ).toString(); //TODO
            let valueStepClean = valueStep;
            do {
                valueStep = valueStepClean;
                valueStepClean = valueStep.replace('&nbsp;', ' ');
            } while (valueStepClean != valueStep);

            ctx.fillText(
                valueStepClean + ' ',
                valueMargin,
                smallMargin + ((this.canvas.height - timeMargin - smallMargin) * (i / (valueStepsCount - 1)))
            );
        }

        ctx.translate(valueMargin, this.canvas.height - timeMargin);
        ctx.rotate(-Math.PI/2);
        ctx.textAlign="right";
        ctx.textBaseline="middle";
        var difference = maxDateTime.getTime() - minDateTime.getTime();

        let dateStepsCount = 7;
        let hoursDiff = ((maxTime - minTime) / (1000 * 60 *60));
        for (let i = 0; i < dateStepsCount; i++) {
            let stepDate = new Date(minDateTime.getTime() + (difference * (i / (dateStepsCount - 1))));
            ctx.fillText(this.formatDate(hoursDiff, stepDate) + '  ', 0, 0);
            ctx.translate(0, (this.canvas.width - valueMargin - smallMargin) / (dateStepsCount - 1));
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