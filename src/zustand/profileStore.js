import create from 'zustand'

const profileStore = create((set)=>({
    users: {
        name: 'Mohamad Ridwan Apriyadi',
        age: '21',
        city: 'Bogor'
    },
    tesState: 'Anda berhasil!',
    changeUserProfile: (payload)=> set((state)=> ({
        users: {
            name: payload.name.replace(/ /g, '+').split('+').filter(e=> e !== '').join(' '),
            age: payload.age.replace(/ /g, '+').split('+').filter(e=> e !== '').join(' '),
            city: payload.city.replace(/ /g, '+').split('+').filter(e=> e !== '').join(' ')
        },
        tesState: 'Anda hebat!'
    }))
}))

export default profileStore