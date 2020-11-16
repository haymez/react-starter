import SomeComponent from 'components/SomeComponent'
import React, { FC } from 'react'

const css = require('./styles.scss')

const App: FC = () => {
  return (
    <div className={css.container}>
      <SomeComponent title="React Starter" subtitle="Enjoy!" />
    </div>
  )
}

export default App
