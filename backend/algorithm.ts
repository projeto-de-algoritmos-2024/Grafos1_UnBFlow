import { PriorityQueue } from "./priority_queue.ts"
import data from "./disciplinas.json"

export function topological_sort (goal: string): {classes: Array<string>, edges: Array<{from: string, to: string}>}
{
	const exists = new Set<string>()

	const classes = new Map<string, Array<string>>()

	const equivalent = new Map<string, Set<string>>()

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
			for (const equiv of course.equiv)
			{
				if (!equivalent.has(course.code))
				{
					equivalent.set(course.code, new Set([]))
				}

				equivalent.get(course.code)!.add(equiv.code)

				if (!equivalent.has(equiv.code))
				{
					equivalent.set(equiv.code, new Set([]))
				}

				equivalent.get(equiv.code)!.add(course.code)
			}

			// Link co-dependency course to main one if it's not mapped yet.
			for (const co of course.co)
			{
				if (!equivalent.has(course.code))
				{
					equivalent.set(course.code, new Set([]))
				}

				equivalent.get(course.code)!.add(co.code)

				if (!equivalent.has(co.code))
				{
					equivalent.set(co.code, new Set([]))
				}

				equivalent.get(co.code)!.add(course.code)
			}
		}

	if (!equivalent.has(goal) && !map.has(goal))
		throw Error(`Class ${goal} is not available!`)

	const goal_info = map.get(goal)
	exists.add(goal_info.code)
	classes.set(goal, goal_info.pre.map(item => item.code))

	/**
	 * @type Array<string>
	 */
	let queue = map.get(goal).pre.map(item => item.code)

	while (queue.length)
	{
		const pre = /** @type string */ (queue.shift())
		if (exists.has(pre))
			continue

		exists.add(pre)

		const course = map.get(pre)

		// Class that is being offered.
		if (course)
		{
			classes.set(pre, course.pre.map(item => item.code).concat(course.equiv.map(item => item.code)))

			// Add equivalent or co-equivalent classes that is being offered!
			//console.log(`Equivalent from ${pre}`, equivalent.get(pre))
			//console.log(`Co-equivalent from ${pre}`, equivalent.get(pre))
			if (equivalent.has(pre))
			{
				const equivs = equivalent.get(pre)!
				for (const equiv of equivs)
				{
					classes.get(pre)!.push(equiv)

					queue.push(equiv)
				}
			}

		}

		// Is not being offered.
		else {
			classes.set(pre, [])

			// Add equivalent or co-equivalent classes that is being offered!
			if (equivalent.has(pre))
			{
				const equivs = equivalent.get(pre)!
				for (const equiv of equivs)
				{
					classes.get(pre)!.push(equiv)

					queue.push(equiv)
				}
			}

			continue
		}

		queue = queue.concat(course.pre.map(item => item.code))
	}

	//console.log("classes")
	//console.log(classes)
	//console.log("\n")

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

	//console.log("out")
	//console.log(out)
	//console.log("\n")

	/*
	 * Calculate topological sorting of the graph.
	 */

	function compare (a: {from: string, to: string}, b: {from: string, to: string}) {
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

	const rev = new Set<{from: string, to: string}>([])

	while (!pq.empty())
	{
		const item = pq.pop() as {from: string, to: string}

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

		for (const pre of classes.get(item.from)!)
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
	const ans = Array<{from: string, to: string}>()
	for (const course of rev)
		ans.unshift(course)

	for (const edge of ans)
		console.log(`${edge.from} ${edge.to}`)

	return {
		classes: Array.from(out.keys()),
		edges: ans
	}
}

console.log(topological_sort("FGA0119"))
