import { convertDurationToTimeString } from '../convertDurationToTimeString'

test('converts duration to time string', () => {
  expect(convertDurationToTimeString(3981)).toBe('01:06:21')
})
