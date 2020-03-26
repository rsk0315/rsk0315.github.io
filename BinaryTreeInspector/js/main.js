'use strict';

// see https://stackoverflow.com/questions/32841295/mousedown-vs-mousedown-in-fabric-js

function parse(s) {
    let edges = new Map();
    let vertices = new Map();

    let parEdges = new Map();
    let children = new Set();
    for (let si of s.trim().split('\n')) {
        let [v, e, description] = si.match(/([^:]+) (\S+) ?(.*)/).slice(1);
        let [left, right, parent] = e.match(/\[([^:]*):([^:]*)(?::([^:]*))?\]/).slice(1);
        edges.set(v, [left, right]);
        vertices.set(v, {description});
        children.add(left);
        children.add(right);
        if (typeof parent !== 'undefined') parEdges.set(v, parent);
    }

    for (let v of edges.keys()) {
        let [l, r] = edges.get(v);
        let lp = parEdges.get(l);
        let rp = parEdges.get(r);
        if (typeof lp !== 'undefined' && lp != v) throw new Error('inconsistent links');
        if (typeof rp !== 'undefined' && rp != v) throw new Error('inconsistent links');
    }

    let root;
    {
        let tmp = Array.from(vertices.keys()).filter(e => !children.has(e));
        if (tmp.length != 1) throw new Error('non-unique root');
        root = tmp[0];
    }

    // queue-like operations
    let head = 0;
    let sx = $('#canvas').width() / 2;
    let sy = 30;
    let dx = 100;
    let dy = 50;
    let q = [[root, [sx, sy], 0]];  // [id, [x, y], depth]
    while (head < q.length) {
        let [v, [x, y], d] = q[head++];
        vertices.get(v).x = x;
        vertices.get(v).y = y;
        let [l, r] = edges.get(v);
        if (l !== '0x0') q.push([l, [x - dx / Math.pow(2, d), y + dy], d+1])
        if (r !== '0x0') q.push([r, [x + dx / Math.pow(2, d), y + dy], d+1])
    }

    return [vertices, edges];
}

const RADIUS = 10;
let canvas;

function draw(vertices, edges) {
    canvas.clear();
    let tip = new fabric.Textbox('', {
        left: 0,
        top: 0,
        width: 1000,
        selectable: false,
        fontSize: 16,
        fill: 'red',
    });
    canvas.add(tip);

    for (let v of edges.keys()) {
        let sx = vertices.get(v).x + RADIUS;
        let sy = vertices.get(v).y + RADIUS;
        for (let c of edges.get(v)) {
            if (c != '0x0') {
                let tx = vertices.get(c).x + RADIUS;
                let ty = vertices.get(c).y + RADIUS;
                canvas.add(new fabric.Line(
                    [sx, sy, tx, ty], {
                        stroke: 'black',
                        strokeWidth: 2,
                        selectable: false,
                    }
                ));
            }
        }
    }

    for (let v_ of vertices.keys()) {
        let v = vertices.get(v_);
        let circ = new fabric.Circle({
            left: v.x,
            top: v.y,
            fill: 'black',
            radius: RADIUS,
            selectable: false,
        });
        circ.on('mouseover', function() {
            tip.set('left', v.x);
            tip.set('top', v.y - 20);
            tip.set('text', v.description);
            canvas.renderAll();
        });
        // circ.on('mousedown', function() {
        //     $('#textarea').val(v.description);
        // });
        canvas.add(circ);
    }
}

/*
  こんな感じの入力をもらう

  0x7fc5c14027a0 [0x7fc5c1402940:0x0] 5
  0x7fc5c1402940 [0x0:0x0] 4
  0x7fc5c14028f0 [0x7fc5c14028a0:0x7fc5c14027a0] 3
  0x7fc5c14028a0 [0x7fc5c14027f0:0x0] 2
  0x7fc5c14027f0 [0x0:0x0] 1

  親のチェックもありならこんな感じ

  0x7fb08ec027a0 [0x7fb08ec02940:0x0:0x7fb08ec028f0] 0
  0x7fb08ec02940 [0x0:0x0:0x7fb08ec027a0] 4
  0x7fb08ec028f0 [0x7fb08ec028a0:0x7fb08ec027a0:0x0] 3
  0x7fb08ec028a0 [0x7fb08ec027f0:0x0:0x7fb08ec028f0] 2
  0x7fb08ec027f0 [0x0:0x0:0x7fb08ec028a0] 1
*/

$(function() {
    canvas = new fabric.Canvas('canvas');

    let s = (
        ''
            + '0x7fb08ec028f0 [0x7fb08ec028a0:0x7fb08ec027a0:0x0] 3\n'
            + '0x7fb08ec02940 [0x0:0x0:0x7fb08ec027a0] 4\n'
            + '0x7fb08ec027a0 [0x7fb08ec02940:0x0:0x7fb08ec028f0] 5\n'
            + '0x7fb08ec028a0 [0x7fb08ec027f0:0x0:0x7fb08ec028f0] 2\n'
            + '0x7fb08ec027f0 [0x0:0x0:0x7fb08ec028a0] 1\n'
    );
    $('#textarea').attr('placeholder', s);

    $('#button').on('click', function() {
        let input = $('#textarea').val() || s;
        let [vs, es] = parse(input);
        draw(vs, es);
    });

    let [vs, es] = parse(s);
    draw(vs, es);
});
