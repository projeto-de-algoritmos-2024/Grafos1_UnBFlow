const PriorityQueue = require("./priority_queue.js")
// import { PriorityQueue } from "./priority_queue"
const data = require("./disciplinas.json")
//import data from "./disciplinas.json"

const goal = "FGA0003"

/**
 * Description
 * @type {Set<string>}
 */
const exists = new Set()

/**
 * @type {Map<string, Array<string>>}
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
classes.set(goal, goal_info.pre.map(item => item.code))

/**
 * @type Array<string>
 */
let queue = [].concat(map.get(goal).pre.map(item => item.code))
while (queue.length)
{
	const pre = /** @type string */ (queue.shift())
	if (exists.has(pre))
		continue

	exists.add(pre)

	const course = map.get(pre)

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
		classes.set(pre, course.pre.map(item => item.code))

	// Is not being offered, and there is no equivalent.
	else
		continue

	queue = queue.concat(course.pre.map(item => item.code))
}

console.log("classes")
console.log(classes)
console.log("\n")

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
		const pre_code = pre_class
		if (out.has(pre_code))
			out.set(pre_code, /** @type number */ (out.get(pre_code)) + 1)
		else
			out.set(pre_code, 1)
	}
}

console.log("out")
console.log(out)
console.log("\n")

/*
 * Calculate topological sorting of the graph.
 */


/**
 * @param {{from: string, to: string}} a
 * @param {{from: string, to: string}} b
 */
function compare (a, b) {
	return a.from.localeCompare(b.from) > 0
}

const pq = new PriorityQueue(compare)

for (const [code, value] of out)
	if (!value)
		pq.push({
			from: code,
			to: code
		})

//console.log("PriorityQueue")
//console.log(pq._heap)
//console.log()

/**
 * @type {Set<{from: string, to: string}>}
 */
const rev = new Set([])

while (pq.size())
{
	const item = /** @type {{from: string, to: string}} */ (pq.pop())

	let has_item = false
	for (const k of rev)
		if (k.from === item.from && k.to === item.to)
		{
			has_item = true
			break
		}

	if (has_item)
		continue

	rev.add(item)

	// Class is not available.
	if (!classes.has(item.from))
		continue

	for (const pre of /** @type Array<string> */ (classes.get(item.from)))
	{
		--out[pre]
		if (!out[pre])
			pq.push({
				from: pre,
				to: item.from,
			})
	}
}

// Reverse the set.
const ans = []
for (const course of rev)
	ans.unshift(course)

console.log(ans)
