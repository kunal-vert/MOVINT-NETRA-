import Sidebar from "../layout/sidebar.jsx";
import Topbar from "../layout/topbar.jsx";
import MapView from "../map/mapview.jsx";
import AlertsPanel from "../alerts/alerts_panel.jsx";
import StateCard from "./statecard.jsx";
import RiskDistribution from "./risk_distribution.jsx";

function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-area">
        <Topbar />
        <div className="content-grid">
          <MapView />
          <AlertsPanel />
        </div>
        <div className="stats-row">
          <StateCard />
          <RiskDistribution />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;