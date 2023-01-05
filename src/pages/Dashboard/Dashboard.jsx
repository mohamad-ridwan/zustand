import React from 'react'
import './Dashboard.scss'
import profileStore from '../../zustand/profileStore'

const Dashboard = () => {
    const users = profileStore((state) => state.users)
    const tesState = profileStore((state) => state.tesState)

    return (
        <>
            <div className="wrapp-dashboard">
                <div className="dashboard">
                    <div className="profile">
                        <p>{tesState}</p>
                        <p className="label-group">
                            Name : <p className="txt-group">
                                {users && users.name}
                            </p>
                        </p>
                        <p className="label-group">
                            Age : <p className="txt-group">
                                {users && users.age}
                            </p>
                        </p>
                        <p className="label-group">
                            City : <p className="txt-group">
                                {users && users.city}
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard