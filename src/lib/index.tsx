import React from 'react'
import Button from './components/Button'
import Input from './components/Form/Input'

function Lib() {
  return (
    <div>
      <div className="bg-black w-9 h-7"></div>
      <div>dkfkjdk</div>
      <h1>kdfjdkfj</h1>
      <p>test</p>
      <button className="bg-button-outline text-button rounded-xl shadow-button font-sans text-base h-button px-button">My button</button>
      <div className="prose">
        <h1>My heading</h1>
        <p>My paragraph</p>
        <a href="#">My link</a>
        <Button onClick={() => alert('Button 1 is clicked !')} variant="primary" size="sm">
          Info
        </Button>
        <Input label="Name" placeholder="John Doe" />
        <Input label="Name" placeholder="John Doe" required={true} />
      </div>
    </div>
  )
}

export default Lib
