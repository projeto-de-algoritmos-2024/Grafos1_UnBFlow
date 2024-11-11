const top = 0

function parent (i: number) {
	return ((i + 1) >>> 1) - 1
}

function left (i: number) {
	return (i << 1) + 1
}

function right (i: number) {
	return (i + 1) << 1
}

export class PriorityQueue {

	_heap: Array<any>
	_comparator: (arg1: any, arg2: any) => boolean

	constructor(comparator = (a: any, b: any) => a > b) {
		this._heap = []
		this._comparator = comparator
	}

	size() {
		return this._heap.length
	}

	empty() {
		return this.size() === 0
	}

	peek() {
		return this._heap[top];
	}

	push(...values: Array<any>) {
		for (const value of values) {
			this._heap.push(value)
			this._siftUp()
		}

		return this.size()
	}

	pop() {
		const poppedValue = this.peek();
		const bottom = this.size() - 1;
		if (bottom > top) {
			this._swap(top, bottom);
		}

		this._heap.pop();
		this._siftDown();
		return poppedValue;
	}

	replace(value: any) {
		const replacedValue = this.peek();
		this._heap[top] = value;
		this._siftDown();
		return replacedValue;
	}

	_greater(i: number, j: number) {
		return this._comparator(this._heap[i], this._heap[j]);
	}

	_swap(i: number, j: number) {
		[this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
	}

	_siftUp() {
		let node = this.size() - 1;
		while (node > top && this._greater(node, parent(node))) {
			this._swap(node, parent(node));
			node = parent(node);
		}
	}

	_siftDown() {
		let node = top;
		while (
			(left(node) < this.size() && this._greater(left(node), node)) ||
			(right(node) < this.size() && this._greater(right(node), node))
		) {
			const maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
			this._swap(node, maxChild);
			node = maxChild;
		}
	}
}
