import {render} from '@testing-library/vue'
import '@testing-library/jest-dom'
import SearchForm from '@/components/SearchForm'

test('Search form contains search button', () => {
  const {getByText} = render(SearchForm, {
    stubs: ['FontAwesomeIcon'],
  })
  expect(getByText('Search now')).toBeInTheDocument()
})
