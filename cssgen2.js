	const rtl = document.getElementById('rtl');
	const rtr = document.getElementById('rtr');
	const rbl = document.getElementById('rbl');
	const rbr = document.getElementById('rbr');

	const ttl = document.getElementById('ttl');
	const ttr = document.getElementById('ttr');
	const tbl = document.getElementById('tbl');
	const tbr = document.getElementById('tbr');

	const rfr = document.getElementById('rfr');
	const tfr = document.getElementById('tfr');

	const rsz = document.getElementById('rsz');
	const tsz = document.getElementById('tsz');

	const block = document.getElementById('block');

	let ss = '123';

const redraw = () => {
	block.style.borderRadius = rtl.value + 'px ' + rtr.value + 'px ' + rbr.value + 'px ' + rbl.value + 'px ';
    block.style.borderWidth = rfr.value  + 'px';
    block.style.width = rsz.value  + 'px';
    block.style.height = rsz.value  + 'px';
}

const f1 = () => {
	ttl.value = rtl.value;
	ttr.value = rtr.value;
	tbl.value = rbl.value;
	tbr.value = rbr.value;
	
	redraw();
}

const f2 = (event) => {
//	console.log(Object.entries(event));
//	console.log(event.target.nodeName);
//	console.log(event.target.nodeType);
//	console.log(event.target.parentNode.nodeName);

	let node = event.target;
	while (node !== null) {
		console.log(`${node.nodeName}(${node.nodeType})`);
		node = node.parentNode;

	}

	rtl.value = ttl.value;
	rtr.value = ttr.value;
	rbl.value = tbl.value;
	rbr.value = tbr.value;
	
	redraw();
}


const f3 = () => {
	tfr.value = rfr.value;
	redraw();
}

const f4 = () => {
	rfr.value = tfr.value;
	redraw();
}

const f5 = () => {
	tsz.value = rsz.value;
	redraw();
}

const f6 = () => {
	rsz.value = tsz.value;
	redraw();
}



ttl.addEventListener('input', f2);
ttr.addEventListener('input', f2);
tbl.addEventListener('input', f2);
tbr.addEventListener('input', f2);
rtl.value = 50;
rbr.value = 50;
f1();
