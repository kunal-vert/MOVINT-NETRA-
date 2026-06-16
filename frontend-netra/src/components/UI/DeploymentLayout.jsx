import { Outlet } from 'react-router-dom'
import OperatingL from './OperatingL'

const DeploymentLayout = () => {
    return (
        <div>
            <OperatingL />
            <Outlet />
        </div>
    )
}

export default DeploymentLayout