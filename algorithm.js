import { PriorityQueue } from "./priority_queue"
import data from "./disciplinas.json"

const goal = "FGA0003"

/**
 * Description
 * @type {Set<string>}
 */
const exists = new Set()

/**
 * @type {Map<string, Array<{code: string, name: string}>>}
 */
const classes = new Map()

/*
 * Fill map with all classes to its keys.
 * A.k.a form graph.
 */
const map = new Map()
for (const department of data)
	for (const course of department.classes)
	{
		map.set(course.code, course)

		// Link equivalent course to main one if it's not mapped yet.
		//for (const equiv of course.equiv)
		//	if (!map.has(equiv.code))
		//		map.set(equiv.code, course.code)
	}

if (!map.has(goal))
	throw Error(`Class ${goal} is not available!`)

const goal_info = map.get(goal)
exists.add(goal_info.code)
classes.set(goal, goal_info.pre)

/**
 * @type Array<{code: string, name: string}>
 */
let queue = [].concat(map.get(goal).pre)
while (queue.length)
{
	const pre = /** @type {{code: string, name: string}} */ (queue.shift())
	if (exists.has(pre.code))
		continue

	exists.add(pre.code)

	const course = map.get(pre.code)

	console.log(`couse -> ${course}`)

	// For classe that are not being offered for the students.
	// In this case, linked to the class that is being offered!
	//if (typeof course === 'string') {
	//	queue.push({
	//		code: course,
	//		name: map.get(course).name
	//	})
	//	continue
	//}

	// Class that is being offered.
	if (course)
		classes.set(pre.code, course.pre)

	// Is not being offered, and there is no equivalent.
	else
		continue

	queue = queue.concat(course.pre)
}

console.log(classes)

/**
 * @type {Map<string, number>}}
 */
const out = new Map()

for (const [code, pre] of classes)
{
	if (!out.has(code))
		out.set(code, 0)

	for (const pre_class of pre)
	{
		const pre_code = pre_class.code
		if (out.has(pre_code))
			out.set(pre_code, /** @type number */ (out.get(pre_code)) + 1)
		else
			out.set(pre_code, 1)
	}
}

console.log(out)

/*
 * Calculate topological sorting of the graph.
 */


/**
 * @param {string} a
 * @param {string} b
 */
function compare (a, b) {
	return a.localeCompare(b) > 0
}

const pq = new PriorityQueue(compare)

for (const [code, value] of out)
	if (!value)
		pq.push(code)

/**
 * @type {Set<string>}
 */
const rev = new Set([])

while (pq.size())
{
	const code = /** @type string */ (pq.pop())

	rev.add(code)

	// Class is not available.
	if (!classes.has(code))
		continue

	for (const pre of /** @type Array<{code: string, name: string}> */ (classes.get(code)))
	{
		--out[pre.code]
		if (!out[pre.code])
			pq.push(pre.code)
	}
}

// Reverse the set.
const ans = []
for (const course of rev)
	ans.unshift(course)

console.log(ans)

//queue.push(1, 10);
//queue.push(2, 5);
//console.log(queue.pop())  // 2
//queue.peek();  // 1
//queue.clear();
//queue.pop();  // undefined
