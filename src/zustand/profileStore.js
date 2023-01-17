import { create } from 'zustand'
import {devtools, persist} from 'zustand/middleware'
// menangani state tersebut dengan produce function dari immer
import { produce } from 'immer'

const store = (set) => ({
    users: {
        name: 'Mohamad Ridwan Apriyadi',
        age: '21',
        city: 'Bogor',
        dataSecret: [
            {
                id: 1,
                berkas: 'column1',
                NIK: '10402412'
            },
            {
                id: 2,
                berkas: 'column2',
                NIK: '210239111'
            }
        ],
    },
    tesState: 'Kamu berhasil!',
    changeUserProfile: (payload) => set(
        produce((state) => {
            const keyUserState = Object.entries(state.users).filter(([key])=> !['dataSecret'].includes(key)).map(e=>e[0])

            keyUserState.forEach(e=>{
                state.users[e] = payload[e].replace(/ /g, '+').split('+').filter(e => e !== '').join(' ')
            })
            state.tesState = 'Kamu Hebat!!'
        })
    ),
    changeDataSecret: (payload) => set(
        produce((state) => {
            state.users.dataSecret.find(e => e.berkas === 'column2')['NIK'] = payload
        })
    )
})

const configStorage = {
    name: 'profile',
}

const persistedStore = persist(store, configStorage)

const profileStore = create(devtools(persistedStore, {profileStore: 'profile-store'}))

export default profileStore