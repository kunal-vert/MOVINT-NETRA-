import { Outlet } from 'react-router-dom'
import OperatingL from './OperatingL'

const DeploymentLayout = () => {
    return (
        <div className="h-full flex flex-col overflow-hidden">
            <div className="shrink-0">
                <OperatingL />
            </div>
            <div className="flex-1 overflow-hidden min-h-0">
                <Outlet />
            </div>
        </div>
    )
}

export default DeploymentLayout    