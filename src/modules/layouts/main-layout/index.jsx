import Sidebar from "../../sidebar";

import "./index.scss"

export default function MainLayout({children}) {
  return <div className="main-layout">
    <div className="main-layout-sidebar">
      <Sidebar />
    </div>
    <div className="main-layout-wrapper">
      <div className="main-layout-header">
        {'{Header di sini}'}
      </div>
      <div className="main-layout-content">
        {children}
      </div>
    </div>
  </div>
}