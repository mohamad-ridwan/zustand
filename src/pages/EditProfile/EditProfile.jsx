import React, { useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import './EditProfile.scss'
import profileStore from '../../zustand/profileStore'

const EditProfile = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    age: '',
    city: '',
    nik: ''
  })

  const users = profileStore((state) => state.users)
  const NIK = profileStore((state) => state.users.dataSecret.find(e=> e.berkas === 'column2')['NIK'])
  const changeUserProfile = profileStore((state) => state.changeUserProfile)
  const changeDataSecret = profileStore((state)=>state.changeDataSecret)

  useEffect(() => {
    if (users && Object.keys(users).length > 0) {
      setInputValue({
        name: users.name,
        age: users.age,
        city: users.city,
        nik: NIK
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
    if(inputValue.nik.trim() !== NIK){
      checkSomeValue = true
    }
    
    if(checkSomeValue && window.confirm('update your profile?')){
     changeUserProfile(inputValue)
     changeDataSecret(inputValue.nik)
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
          <Input
            label="NIK"
            name="nik"
            inputChange={changeInput}
            placeholder="Enter your nik"
            value={inputValue && inputValue.nik}
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