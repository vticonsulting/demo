import {render} from '@testing-library/vue'
import '@testing-library/jest-dom'
import {uppercase} from '@/directives/uppercase'

import Header from '@/components/Header'
// We are about to test an easy vue directive, that we have implemented,
// named v-uppercawse.
test('Component with a custom directive', () => {
  // Do not forget to add the new custom directive to the render function as
  // the third parameter.
  const {queryByText, getByText} = render(Header, {}, vue =>
    vue.directive('uppercase', uppercase),
  )

  // Test that the text in lower case does not appear in the DOM
  expect(queryByText('example text')).not.toBeInTheDocument()

  // Test that the text in upper case does appear in the DOM thanks to the directive
  expect(getByText('EXAMPLE TEXT')).toBeInTheDocument()
})
