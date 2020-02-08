import moment from 'moment'
import { 
	getDate,
	capitalizeWords,
	convertDatumToHabit,
	getChain,
} from './Habits'
import Datum from '../DatumClass'

it('capitalizes words', () => {
	let before, after
	function test() {
		expect(capitalizeWords(before)).toBe(after)
	}

	before = 'test'
	after = 'Test'
	test()

	before = 'test again'
	after = 'Test Again'
	test()
})

it('counts your current completion chain', () => {
	let days, chain
	function test() {
		expect(getChain(days)).toBe(chain)
	}

	days = [false, false, 'uuid', 'uuid']
	chain = 0
	test()

	days = ['uuid', false, false, false]
	chain = 1
	test()

	days = ['uuid', 'uuid', false, false]
	chain = 2
	test()

	days = []
	chain = 0
	test()

	days = ['uuid', 'uuid']
	chain = 2
	test()
})

it('converts relative dates to absolute', () => {
	let days_ago, from_date, result
	function test() {
		expect(
			getDate(days_ago, from_date)
		).toBe(result)	
	}

	days_ago = 1
	from_date = Date.now()
	result = moment(from_date).subtract(days_ago, 'days').valueOf()
	test()

	days_ago = -1
	test()
})

it('converts datums to habit-day-objects', () => {
	let datum, habit
	function test() {
		expect(
			convertDatumToHabit(datum)
		).toBe(habit)
	}

	datum = new Datum(1, Date.now(), [
		{ name: 'habit', value: 'test'}
	])
	habit = {
		name: 'test',
		relative_value: -1,
	}
})