import {Widget} from "./Widget";

export type PieChartItem = { shortLabel: string, longLabel: string, weight: number, color: string}

export class PieChartWidget implements Widget {

    data: PieChartItem[]
    element: HTMLElement
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    colors = [
        'rgb(202, 175, 123)',
        'rgb(208, 136, 113)',
        'rgb(180, 135, 113)',
        'rgb(216, 181, 105)',
        'rgb(198, 116, 103)',
        'rgb(206, 161, 105)',
        'rgb(220, 175, 143)'
    ]

    constructor(data : PieChartItem[]) {
        this.data = data;
        this.element = document.createElement('div');
        this.element.classList.add('pie-chart');
        this.canvas = document.createElement('canvas');
        this.canvas.width = 100;
        this.canvas.height = 100;
        this.element.append(this.canvas);
        this.canvas.style.width ='100%';
        this.canvas.style.height='200px';
    }

    startRender() {
        this.canvas.width  = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render() {
        this.startRender();
        let start = 0;
        let total = 0;
        let c = 0;
        for (var i = 0; i < this.data.length; i++) {
            total += this.data[i].weight;
        }
        for (i = 0; i < this.data.length; i++) {
            if (i == this.data.length - 1 && c == 0) {
                //make sure last color is different than first
                c = 1;
            }
            this.data[i].color = this.colors[c];
            this.drawSegment(this.data[i], start, total);
            c++;
            if (c>= this.colors.length) {
                c = 0;
            }
            start += this.data[i].weight;
        }
    }

    drawSegment(item: PieChartItem, start: number, total: number) {
        this.ctx.save();
        var centerX = Math.floor(this.canvas.width / 2);
        var centerY = Math.floor(this.canvas.height / 2);
        var radius = Math.floor(Math.min(this.canvas.width, this.canvas.height) / 2) * 0.8;

        var startingAngle = this.degreesToRadians((start / total) * 360 - 90.0);
        var arcSize = this.degreesToRadians((item.weight / total) * 360);
        var endingAngle = startingAngle + arcSize;

        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.arc(centerX, centerY, radius,
            startingAngle, endingAngle, false);
        this.ctx.closePath();


        this.ctx.fillStyle = item.color;
        this.ctx.fill();
        this.ctx.restore();

        this.drawSegmentLabel(item, start, total);
    }

    degreesToRadians(degrees : number) {
        return (degrees * Math.PI) / 180;
    }

    drawSegmentLabel(item: PieChartItem, start: number, total: number) {
        this.ctx.save();
        var x = Math.floor(this.canvas.width / 2);
        var y = Math.floor(this.canvas.height / 2);
        var angle = this.degreesToRadians((start / total) * 360 - 90);

        this.ctx.translate(x, y);
        this.ctx.rotate(angle);
        var dx = Math.floor(Math.min(this.canvas.width, this.canvas.height) * 0.5) * 0.8 - 10;
        var dy = Math.floor(this.canvas.height * 0.05);

        this.ctx.textAlign = "right";
        var fontSize = Math.floor(this.canvas.height / 25);
        this.ctx.font = fontSize + "pt Helvetica";

        this.ctx.fillText(item.shortLabel, dx, dy);

        this.ctx.restore();
    }
}