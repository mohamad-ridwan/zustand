import React, { useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import './EditProfile.scss'
import profileStore from '../../zustand/profileStore'

const EditProfile = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    age: '',
    city: ''
  })

  const users = profileStore((state) => state.users)
  const changeUserProfile = profileStore((state) => state.changeUserProfile)

  useEffect(() => {
    if (users && Object.keys(users).length > 0) {
      setInputValue({
        name: users.name,
        age: users.age,
        city: users.city
      })
    }
  }, [users])

  function changeInput(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  function submit() {
    let checkSomeValue = false
    
    if(inputValue.name.trim() !== users.name){
      checkSomeValue = true
    }
    if(inputValue.age.trim() !== users.age){
      checkSomeValue = true
    }
    if(inputValue.city.trim() !== users.city){
      checkSomeValue = true
    }
    
    if(checkSomeValue && window.confirm('update your profile?')){
     changeUserProfile(inputValue)
     return alert('update was successful')
    }else if(checkSomeValue){
      return
    }

    return alert('harap ganti dulu')
  }

  return (
    <div className="wrapp-edit-profile">
      <div className="edit-profile">
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            label="Name"
            name="name"
            inputChange={changeInput}
            placeholder="Enter your name"
            value={inputValue && inputValue.name}
          />
          <Input
            label="Age"
            name="age"
            inputChange={changeInput}
            placeholder="Enter your age"
            value={inputValue && inputValue.age}
          />
          <Input
            label="City"
            name="city"
            inputChange={changeInput}
            placeholder="Enter your city"
            value={inputValue && inputValue.city}
          />
          <button className="submit" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProfile