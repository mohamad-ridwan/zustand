import React from 'react'
import './Dashboard.scss'
import profileStore from '../../zustand/profileStore'

const Dashboard = () => {
    const { name, age, city, tesState } = profileStore((state) => ({
        name: state.users.name,
        age: state.users.age,
        city: state.users.city,
        tesState: state.tesState
    }))
    const dataSecret = profileStore((state) => state.users.dataSecret)

    return (
        <>
            <div className="wrapp-dashboard">
                <div className="dashboard">
                    <div className="profile">
                        <p>{tesState}</p>
                        <p className="label-group">
                            Name : <p className="txt-group">
                                {name}
                            </p>
                        </p>
                        <p className="label-group">
                            Age : <p className="txt-group">
                                {age}
                            </p>
                        </p>
                        <p className="label-group">
                            City : <p className="txt-group">
                                {city}
                            </p>
                        </p>
                        <p className="label-group">
                            NIK : <p className="txt-group">
                            {dataSecret.find(e=>e.berkas === 'column2')['NIK']}
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard