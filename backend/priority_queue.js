const top = 0;

/**
 * @param {number} i
 */
function parent (i) {
	return ((i + 1) >>> 1) - 1
}

/**
 * @param {number} i
 */
function left (i) {
	return (i << 1) + 1
}

/**
 * @param {number} i
 */
function right (i) {
	return (i + 1) << 1
}

class PriorityQueue {
	/**
	 * @param {(a: any, b: any) => boolean} [comparator=(a, b) => a > b]
	 */
	constructor(comparator = (a, b) => a > b) {
		this._heap = [];
		this._comparator = comparator;
	}
	size() {
		return this._heap.length;
	}
	isEmpty() {
		return this.size() === 0;
	}
	peek() {
		return this._heap[top];
	}

	/**
	 * @param {...any} values
	 */
	push(...values) {
		for (const value of values) {
			this._heap.push(value)
			this._siftUp()
		}
		return this.size();
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

	/**
	 * @param {any} value
	 */
	replace(value) {
		const replacedValue = this.peek();
		this._heap[top] = value;
		this._siftDown();
		return replacedValue;
	}

	/**
	 * @param {number} i
	 * @param {number} j
	 */
	_greater(i, j) {
		return this._comparator(this._heap[i], this._heap[j]);
	}

	/**
	 * @param {number} i
	 * @param {number} j
	 */
	_swap(i, j) {
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

module.exports = PriorityQueue
